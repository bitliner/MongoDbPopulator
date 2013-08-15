var request = require('request'),
	expect = require('chai').expect,
	DbPopulator = require('../index.js'),
	path = require('path'),
	RestfulMongo = require('restful-mongo'),
	path=require('path');



describe('TEST', function() {
	var dao;



	beforeEach(function(done) {


		dao = new RestfulMongo({
			url: 'mongodb://user:pwd@localhost:27017/dbPopulatorTest'
		}).getDao()
		done()

	})


	describe('LOAD', function() {

		it('By object', function(done) {

			var data = {
				greetings: [{
					'g1': 'ciao'
				}, {
					'g2': 'ola'
				}]
			}
			new DbPopulator({
				databaseName: 'dbPopulatorTest',
				data: data,
				user: 'user',
				password: 'pwd'
			}).execute().then(function() {
				dao.query('dbPopulatorTest', 'greetings', {}, {}, {}, function(err, docs) {

					expect(docs.length).to.be.eql(2)
					done()
				})



			})



		})

		it('By folder', function(done) {

			new DbPopulator({
				databaseName: 'dbPopulatorTest',
				data: path.resolve('./fixtures'),
				user: 'user',
				password: 'pwd'
			}).execute().then(function() {
				dao.query('dbPopulatorTest', 'greetings', {}, {}, {}, function(err, docs) {
					
					expect(docs.length).to.be.eql(3)
					done()
				})



			})



		})



	})


})