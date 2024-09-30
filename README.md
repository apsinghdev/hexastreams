# Hexastreams

### Steps to test locally

#### Run the client

1. cd into the `web` folder
2. run `npm i` in it
3. run `npm run dev`
4. Congrats! Your fronted is running on `localhost:5173`

#### Run the api

1. cd into the `api` folder
2. run `npm i` in it
3. make a `.env` file in the `api` folder
3. add these two variables in it
- `DB_URI="mongodb+srv://{username}:{password}@cluster0.zirsf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"`
- `JWT_SECRET="aeef42be12db456e6c36a6b16e99826f257fa212fe165dc34dc181f"` (example)

You can get a new `JWT_SECTET` from [here](https://www.javainuse.com/jwtgenerator) and a free `DB_URI` from [here](https://cloud.mongodb.com/v2/66f976f36145ac7ea9dd73f7#/clusters)
