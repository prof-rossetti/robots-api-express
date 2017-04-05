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
  {"id":1, "name": "my bot", "description":"does stuff"},
  {"id":2, "name": "other bot", "description":"does other stuff"},
  {"id":3, "name": "big bot", "description":"does big stuff"}
]
````

#### Show Robot

Issue a GET request to `/robots/:id`.json, where `:id` is the robot's unique identifier, to retrieve an object representing the given robot.

Example response:

```` json
{
  "id":1,
  "name": "my bot",
  "description":"does stuff"
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
