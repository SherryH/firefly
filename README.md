
# Firefly Project

This App aims to encourage social interaction between individuals in a city through offers of skills, hobbies and interests.
You get to paint a picutre of someone from what they are willing to share!




## Demo


### Frontend: 
https://firefly-tau.vercel.app/

### Backend:
https://twinkling-firefly.herokuapp.com/  
## Tech Stack

**Client:** NextJS, Chakra UI, Cloudinary, Mongo DB

**Server:** KeystoneJS


## Features

- Display of offers in aggregation view and users view 
- Authentication and User Login (WIP)

## TODO
- Messaging 
- Offer creation and update 

  
## Development Environment

To deploy this project, please clone the repo and
-  Navigate to `/frontend`

```bash
  npm run dev
```
The app will start running in `http://localhost:7777/`

- Navigate to `/backend`
```bash
  npm run dev
```

## Deployment
### Frontend: 
`git push` triggers the deployment to Vercel

### Backend: 
Make sure you are in the current root directory and run
```
git subtree push --prefix backend/ heroku main
```
