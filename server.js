var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var port = 5555;

app.get('/status', function internalStaus(req, res){
  res.send('API server running.');
});

app.get('/products/', function(req, res){
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');
  res.status(200);
  res.send('{    "data" : [         {              "id":3,            "name":"Chicken Burger",            "brand" : "Happy Meal Brand",            "price" : "120",            "status" : "Published",            "img" : "http://www.tastyburger.com/wp-content/themes/tastyBurger/images/home/img-large-burger.jpg"        },          {              "id":1,            "name":"Chicken Submarine",            "brand" : "Happy Meal Brand",            "price" : "120",            "status" : "Published",            "img" : "http://www.smileysgrill.com/UserFiles/Menu%20Images/Chicken/Small/ChickenSubmarine.jpg"        },        {             "id":2,            "name":"Chicken Nuggets",            "brand" : "Happy Meal Brand",            "price" : "200",            "status" : "Draft",            "img" : "http://rediscoverwashington.org/wp-content/uploads/2012/11/mcdonalds-chicken-mcnuggets-4-piece.png"        },        {             "id":2,            "name":"Chicken Nuggets",            "brand" : "Happy Meal Brand",            "price" : "200",            "status" : "Draft",            "img" : "http://rediscoverwashington.org/wp-content/uploads/2012/11/mcdonalds-chicken-mcnuggets-4-piece.png"        },        {             "id":2,            "name":"Chicken Nuggets",            "brand" : "Happy Meal Brand",            "price" : "200",            "status" : "Draft",            "img" : "http://rediscoverwashington.org/wp-content/uploads/2012/11/mcdonalds-chicken-mcnuggets-4-piece.png"        },        {             "id":2,            "name":"Chicken Nuggets",            "brand" : "Happy Meal Brand",            "price" : "200",            "status" : "Draft",            "img" : "http://rediscoverwashington.org/wp-content/uploads/2012/11/mcdonalds-chicken-mcnuggets-4-piece.png"        },        {             "id":2,            "name":"Chicken Nuggets",            "brand" : "Happy Meal Brand",            "price" : "200",            "status" : "Draft",            "img" : "http://rediscoverwashington.org/wp-content/uploads/2012/11/mcdonalds-chicken-mcnuggets-4-piece.png"        },        {             "id":2,            "name":"Chicken Nuggets",            "brand" : "Happy Meal Brand",            "price" : "200",            "status" : "Draft",            "img" : "http://rediscoverwashington.org/wp-content/uploads/2012/11/mcdonalds-chicken-mcnuggets-4-piece.png"        },        {             "id":2,            "name":"Chicken Nuggets",            "brand" : "Happy Meal Brand",            "price" : "200",            "status" : "Draft",            "img" : "http://rediscoverwashington.org/wp-content/uploads/2012/11/mcdonalds-chicken-mcnuggets-4-piece.png"        },        {             "id":2,            "name":"Chicken Nuggets",            "brand" : "Happy Meal Brand",            "price" : "200",            "status" : "Draft",            "img" : "http://rediscoverwashington.org/wp-content/uploads/2012/11/mcdonalds-chicken-mcnuggets-4-piece.png"        },        {             "id":2,            "name":"Chicken Nuggets",            "brand" : "Happy Meal Brand",            "price" : "200",            "status" : "Draft",            "img" : "http://rediscoverwashington.org/wp-content/uploads/2012/11/mcdonalds-chicken-mcnuggets-4-piece.png"        }    ]}');
});
app.get('/product/brands', function(req, res){
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');
  res.status(200);
  res.send('{    "data": [        {            "name" : "Happy Meal Brand",            "id" : 1        },        {            "name" : "Brand2",            "id" : 2        }                ]}');
});
app.get('/product/3', function(req, res){
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');
  res.status(200);
  res.send('{            "name":"Chicken Burger",            "brandId" : 1,            "price" : "120",            "status" : "Published",            "img" : "http://www.tastyburger.com/wp-content/themes/tastyBurger/images/home/img-large-burger.jpg"            "customAttribs": [				{					"key": "Promotion",					"value": ""				}			]}');
});
app.get('/product/1', function(req, res){
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');
  res.status(200);
  res.send('{             "id":1,            "name":"Chicken Submarine",            "brand" : "Happy Meal Brand",            "price" : "120",            "status" : "Published",            "img" : "http://www.smileysgrill.com/UserFiles/Menu%20Images/Chicken/Small/ChickenSubmarine.jpg"        }');
});
app.get('/template/all', function(req, res){
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');
  res.status(200);
  res.send('{    "data": [		{		    "id":1,			"name": "Template1",			"customAttribs": [				{					"key": "Promotion",					"value": ""				}			]			},		{		    "id":2,			"name": "Template2",			"customAttribs": [				{					"key": "",					"value": ""				}			]			}	]}');
});



server.listen(port, function () {
    console.log('API is available at: http://localhost:' + port);
});

