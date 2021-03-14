# Firefly backend

This backend server was created using KeystoneJS Starter Template.

## Tech Stack

- KeystoneJS 5
- MongoDB Atlas

## Running the Project.

To run this project first run `npm install`. Note: If you generated this project via the Keystone cli step this has been done for you \\o/.

Once running, the Keystone Admin UI is reachable via `localhost:3000/admin`.

## Next steps

This example has no front-end application but you can build your own using the GraphQL API (`http://localhost:3000/admin/graphiql`).

## Deployment

### Heroku

```
git subtree push --prefix backend/ heroku main
```

Since the root of the server is in the `backend/` folder, we need to deploy only the `backend/` to Heroku.
