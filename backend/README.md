# Firefly backend

This backend server was created using KeystoneJS Starter Template.

## Tech Stack

- KeystoneJS 5
- MongoDB Atlas

## Running the Project

`npm install`

## End Points

#### Admin UI

`localhost:3000/admin`

#### GraphQL API

`http://localhost:3000/admin/graphiql`

## Development

The database table currently used is `secondDB`

## Heroku Deployment

```
git subtree push --prefix backend/ heroku main
```

Since the root of the server is in the `backend/` folder, we need to deploy only the `backend/` to Heroku.
