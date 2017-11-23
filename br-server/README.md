## Bitrefill Server

### Setup
The requirements for the project include `node v8` and `mongoDB`
The project also requires a local `.env` file. Create a file in the root of the server folder with the name `.env`
Here is an example `.env` file that I use:
```
DB=mongodb://localhost:27017/bitrefill
LOCAL_DB=mongodb://localhost:27017/bitrefill
JWT_SECRET=bitrefill
PORT=8080
```
You can change the details accordingly.

### Start Server
To start the server run `npm start`
