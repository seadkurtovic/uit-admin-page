// src/app/api/getScanData/route.ts
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://raymonreddington55:s7R2ceGtBBMYzKqy@user-data.uxhxy.mongodb.net/uit.admin?retryWrites=true&w=majority&appName=user-data'; // Deine MongoDB-Verbindungs-URI
const client = new MongoClient(uri);
const dbName = 'uit'; // Ersetze mit deinem DB-Namen
const collectionName = 'admin'; // Deine Collection für die Anker Scans

export async function GET() {
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    // Abrufen aller Einträge aus der Collection
    const scanData = await collection.find({}).toArray();

    // Die Daten, die an das Frontend gesendet werden
    const formattedData = scanData.map((entry: any) => ({
      Time: entry.Time,
      ID: entry.ID,
      Location: entry.Location,
    }));

    // Rückgabe der Daten als JSON
    return NextResponse.json(formattedData);
  } catch (error) {
    console.error('Fehler beim Abrufen der Daten:', error);
    return NextResponse.json({ error: 'Fehler beim Abrufen der Daten' }, { status: 500 });
  } finally {
    await client.close();
  }
}
