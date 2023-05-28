// Import the mongoose module
const mongoose = require('mongoose');

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
mongoose.set('strictQuery', false);

// Define the database URL to connect to.
const mongoDB = process.env.MONGO_DB_URL;

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
