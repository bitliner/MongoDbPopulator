var deferred = require('deferred')



function DbPopulator(options) {
		var options = options || {}
			, self=this

		self.databaseName=options.databaseName||'test'
		self.host=options.host||'localhost'
		self.port=options.port||27017 
		self.data = options.data
		self.user=options.user||null;
		self.password=options.password||null;

		self.fixtures = require('pow-mongodb-fixtures').connect(self.databaseName, {
			host: self.host,
			port: self.port,
			user: self.user,
			pass:self.password
		});
	}

DbPopulator.prototype.execute = function() {
	var def = deferred(),
		self = this
		self.fixtures.clearAllAndLoad(self.data, function(err) {
			console.log('error(err)',err)
			def.resolve({})
		})
		return def.promise
}

module.exports = DbPopulator