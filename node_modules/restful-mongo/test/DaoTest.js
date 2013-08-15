var request = require('request'),
	expect = require('chai').expect,
	DbPopulator = require('./DbPopulator.js'),
	path = require('path'),
	RestfulMongo = require('../index.js');



var data = {
	saluti: [{
		saluto: 'ciao',
	}, {
		saluto3: 'ola'
	}]
}



describe('TEST', function() {
	var dao;



	beforeEach(function(done) {


		dao = new RestfulMongo({
			url: 'mongodb://rest:ful@localhost:27017/restfulMongo'
		}).getDao()

		new DbPopulator({
			databaseName: 'restfulMongo',
			data: data,
			user: 'rest',
			password: 'ful'
		}).execute().then(function() {
			console.log('DbPopulator executed')
			done()
		})

	})


	describe('DAO get', function() {

		it('By field', function(done) {

			dao.get('restfulMongo', 'saluti', {
				saluto: 'ciao'
			}, {}, {}, function(err, doc) {

				expect(err).to.be.eql(null)
				expect(doc).to.have.property('saluto','ola')

				done()
			})



		})


	})


})