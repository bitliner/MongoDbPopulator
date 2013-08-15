# RESTful MongoDB

It allows to add easily and quickly RESTful API to your nodejs app, to be used with MongoDB.

It is based on https://github.com/tdegrunt/mongodb-rest.

## Install and setting

* install library `npm install restful-mongo`
* create a config file in the root of your project, whose content is like this:

```

module.exports = {
	db: {
		username: '',
		password:'',
		host: 'localhost',
		port: 27017
	},
	"flavor": "nounderscore",
	"debug": true
}

```

* add routers to your app in app.js files

```
var app = express();
,	config=require('./config.js')
,	restfulMongo=require('../../index.js');

restfulMongo.configure(app, config );

```

Installation and configuration is completed.


## Documentation

### GET method

To get all resources contained in a collection, use the following url:

* `/api/database_name/collection_name`

To get a single resource, append _id value to the prevouos url, like the following:

* `/api/database_name/collection_name/_id`

GET method supports the following parameters:

* sort: to sort the results, for example `?sort=-_id,name` sort the results by _id field, in descending order, and then by name, in ascending order
* fields: to apply projection to the results, for example `?fields=name,_id` returns an array of objects with only 2 fields: name and _id
* query: to query specific objects, you can specify condition on evenry single object dirrectly as parameters, separated by comma. For example `?name=giovanni,age=18` returns only objects that has 'giovanni' as name and '18' as age. You can specify more complex query too. See below documentation about comples query

### POST method
### PUT method
### DELETE method
