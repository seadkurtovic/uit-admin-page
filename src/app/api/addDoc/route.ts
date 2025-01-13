import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server'; // Import NextResponse for response handling

const uri = 'mongodb+srv://raymonreddington55:s7R2ceGtBBMYzKqy@user-data.uxhxy.mongodb.net/uit.admin?retryWrites=true&w=majority&appName=user-data'; // Replace with your MongoDB connection URI

export async function POST() {
  try {
    // Get current timestamp
    const time = new Date();

    // Generate a random ID between 0 and 24
    const randomID = Math.floor(Math.random() * 25); // Math.random() * 25 gives a number between 0 and 24

    // Dictionary mapping IDs to locations
    const locationMap: { [key: number]: string } = {
        0: "Unknown",
        1: "Accessibility",
        2: "Blockchain",
        3: "Extended Reality",
        4: "Künstliche Intelligenz",
        5: "Robotic Process Automation",
        6: "User Experience Design",
        7: "Vision & Trend Explorer (</digitalCampus>)",
        8: "Big Atari WX 04.308",
        9: "CoWorking 1 04.306",
        10: "CoWorking 2 04.301",
        11: "Community Kitchen WX 04.315",
        12: "Cyber Space WX 04.309",
        13: "Discovery Space WX 04.202",
        14: "Genius Zone WX 04.206",
        15: "Print Hub WX 04.303",
        16: "Projektfläche 1 WX 04.212",
        17: "Projektfläche 2 WX 04.210",
        18: "Projektfläche 3 WX 04.207",
        19: "Recruiting Center WX 04.302",
        20: "Staff Kitchen WX 04.201",
        21: "UniHall WX 04.313",
        22: "User Test Studio 1 WX 04.305",
        23: "User Test Studio 2 WX 04.304",
        24: "WorkBench WX 04.213",
    };

    // Fetch the location based on the random ID
    const location = locationMap[randomID]; // Use the random ID to get the location from the map

    // MongoDB client connection
    const client = new MongoClient(uri);
    await client.connect();

    // Select database and collection
    const db = client.db('uit'); // Replace with your database name
    const collection = db.collection('admin'); // Replace with your collection name

    // Document to be inserted
    const newDocument = {
      Time: time,
      ID: randomID.toString(), // Default value for ID
      Location: location // Default value for Location
    };

    console.log(newDocument)

    // Insert the document into the collection
    const result = await collection.insertOne(newDocument);

    // Close the MongoDB client connection
    await client.close();

    // Respond with success using NextResponse
    return NextResponse.json({ message: 'Document added successfully', data: result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error adding document', error }, { status: 500 });
  }
}
