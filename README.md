# Landon's RESTful Server #


## API URL ##
https://shrouded-hollows-45616.herokuapp.com


## End Points ##

/products

/places

/people


## Methods ##
GET | POST | PUT | DELETE


## Exanples Calls ##

#### Get all data (GET) ####
https://shrouded-hollows-45616.herokuapp.com/products


#### Create an entry (POST) ####
https://shrouded-hollows-45616.herokuapp.com/products

Model:
{
	"name": "Headphones",
	"price": 20,
	"desc": "We got beats"
}


#### Get a single data object using its ID (GET) ####
https://shrouded-hollows-45616.herokuapp.com/products/5c6e063435b6501718e0dbc0


#### Update a single data oject using its ID (PUT) ####
https://shrouded-hollows-45616.herokuapp.com/products/5c6e063435b6501718e0dbc0

Model:
{
	"name": "Kit Kat Bar",
    "price": 1,
	"desc": "Break me off a peice!"
}


#### Delete a single data object using its ID (DELETE) ####
https://shrouded-hollows-45616.herokuapp.com/products/5c6f25229fc1df41845fb447


## Data Models ##

Products:

    name: { type: String, required: true, max: 100 },
    price: {type: Number, required: false},
    desc: {type: String, required: false}

Places:

    name: { type: String, required: true, max: 100 },
    address: {type: String, required: false},
    city: {type: String, required: false},
    state: {type: String, required: false}

People:

    name: { type: String, required: true, max: 100 },
    age: {type: Number, required: false},
    occupation: {type: String, required: false}
