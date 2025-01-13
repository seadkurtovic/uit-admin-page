const { MongoClient } = require('mongodb');

// Replace with your MongoDB Atlas connection string
const uri = 'mongodb+srv://raymonreddington55:s7R2ceGtBBMYzKqy@user-data.uxhxy.mongodb.net/uit.admin?retryWrites=true&w=majority&appName=user-data';

async function connect() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    
    const db = client.db('uit');  // Select your database
    const collection = db.collection('admin');  // Choose your collection
    
    // Example of performing an operation:
    const docs = await collection.find({}).toArray();
    console.log(docs);
    
    await client.close();  // Close the connection when done
  } catch (err) {
    console.error(err);
  }
}

connect();
