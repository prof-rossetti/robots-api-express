## API Documentation

This API conforms to REST architecture principles, facilitating requests for "robot" and "order" resources. The API is configured to send and receive data in JSON format, and is available for use at https://southernct-443-robots-api.herokuapp.com.

### Robot Endpoints

Each robot resource has the following data attributes:

name | datatype | example value
--- | --- | ---
`name` | String | "New Bot"
`description` | String | "Does all the things!"
`in_stock` | Integer | 75

To perform operations on robot resources, issue requests to the following API endpoints:

endpoint name | request method | URL path
--- | --- | ---
List Robots | GET | `/api/robots`
Create Robot | POST | `/api/robots`
Show Robot | GET | `/api/robots/:id`
Update Robot | PUT | `/api/robots/:id`
Destroy Robot | DELETE | `/api/robots/:id`

Additional documentation on each of these endpoints is detailed below.

#### List Robots

Issue a **GET** request to `/api/robots` to retrieve an array of all robot records currently in the database.

Example response:

```` json
[
  {
    "_id":"58e487ad32ac2000f07acc4c",
    "updated_at":"2017-04-05T05:59:09.694Z",
    "created_at":"2017-04-05T05:59:09.694Z",
    "name":"r2d2",
    "description":"holds a secret message",
    "in_stock":100,
    "__v":0
  },
  {
    "_id":"58e487ad32ac2000f07acc4d",
    "updated_at":"2017-04-05T05:59:09.696Z",
    "created_at":"2017-04-05T05:59:09.696Z",
    "name":"bb8",
    "description":"rolls around",
    "in_stock":75,
    "__v":0
  },
  {
    "_id":"58e487ad32ac2000f07acc4b",
    "updated_at":"2017-04-05T05:59:09.687Z",
    "created_at":"2017-04-05T05:59:09.687Z",
    "name":"c3po",
    "description":"specializes in language translation",
    "in_stock":50,
    "__v":0
  }
]
````

#### Create Robot

Issue a **POST** request to `/api/robots` to create a new robot. The body of your request must provide a JSON object representing the robot to be created. Example request body:

```` js
{
  name: "My Bot",
  description: "Does all the things!",
  in_stock:75
}
````

#### Show Robot

Issue a **GET** request to `/api/robots/:id`, where `:id` is the robot's unique identifier, to retrieve an object representing the given robot.

Example response:

```` json
{
  "_id":"abc123def456kpwg0987",
  "updated_at":"2017-04-05T05:59:09.696Z",
  "created_at":"2017-04-05T05:59:09.696Z",
  "name":"my bot",
  "description":"does useful stuff",
  "in_stock":325,
  "__v":0
}
````

#### Update Robot

Issue a **PUT** request to `/api/robots/:id`, where `:id` is the robot's unique identifier, to update that robot's attributes. The body of your request must provide a JSON object representing the desired values for all robot attributes. Example request body:

```` js
{
  name: "My Renamed Bot",
  description: "Does different things!",
  in_stock: 50
}
````

#### Destroy Robot

Issue a **DELETE** request to `/api/robots/:id`, where `:id` is the robot's unique identifier, to delete the corresponding robot record from the database.












### Order Endpoints

TBA
