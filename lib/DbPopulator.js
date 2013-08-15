var deferred = require('deferred')



function DbPopulator(options) {
		var options = options || {},
			self = this

			// specify database params (host, port, db name)
			self.databaseName = options.databaseName || 'test'
		self.host = options.host || 'localhost'
		self.port = options.port || 27017

		// authentication
		self.user = options.user || null;
		self.password = options.password || null;

		// data
		self.data = options.data

		// connect fixture module
		self.fixtures = require('pow-mongodb-fixtures').connect(self.databaseName, {
			host: self.host,
			port: self.port,
			user: self.user,
			pass: self.password
		});
	}

// it clead and load data specified in the constructor
DbPopulator.prototype.execute = function() {
	var def = deferred(),
		self = this;
	self.fixtures.clearAllAndLoad(self.data, function(err) {
		console.log('error(err)', err)
		def.resolve({})
	})
	return def.promise
}

module.exports = DbPopulator