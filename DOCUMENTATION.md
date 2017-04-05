## API Documentation

This API serves data in JSON format. The current production environment base URL is `https://southernct-443-robots-api.herokuapp.com/`.

The current API version is indicated in the `package.json` file. This project follows semantic versioning.

The base URL for this version of the API is `https://southernct-443-robots-api.herokuapp.com/api/`.

### `Robot` Endpoints

#### List Robots

Issue a GET request to `/robots.json` to retrieve an array of all robot records currently in the database.

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

#### Show Robot

Issue a GET request to `/robots/:id`.json, where `:id` is the robot's unique identifier, to retrieve an object representing the given robot.

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

#### Destroy Robot

TBA

#### Create Robot

TBA

#### Update Robot

TBA

<hr>

### `Order` Endpoints

TBA
