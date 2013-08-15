MongoDbPopulator
================

It lets to load fixtures for MongoDB on NodeJS. The fixtures can be specified as json files in a folder, or as Javascript objects.

# Install

```
npm install mongo-db-populator
```

# Fill the database by Javascript object

1. Import the module
```
var DbPopulator=require('mongo-db-populator')
```

2. Create an object whose keys are the collection names, the values are arrays representing the objects to be load
```
var collectionsToBeLoaded={
	greetings: [{
		'g1': 'ciao'
	}, {
		'g2': 'ola'
	}]
}
```

3. Initialize  DbPopulator (specifying the parameters for the mongodb connection and the data to be loaded) and execute it
new DbPopulator({
	databaseName: 'dbPopulatorTest',
	data: collectionsToBeLoaded,
	user: 'user',
	password: 'pwd'
}).execute().then(function(){
	console.log('Done!')
})
```

# Fill the database by js files

Like the previuos example, but in the point 3 specify the `data` parameter as a string representing the path to the folder containing data to be loaded. Example:

```
new DbPopulator({
        databaseName: 'dbPopulatorTest',
        data: path.resolve('./fixtures'),
        user: 'user',
        password: 'pwd'
}).execute().then(...)
```
where the folder './fixtures' contains js files.

An example of the content of a js file is:

```
module.exports.greetings=[{
	"g1": "ciao"
}, {
	"g2": "ola"
},{
	"g3": "hi"
}]
```

Check the test cases to see details about the examples.

 
