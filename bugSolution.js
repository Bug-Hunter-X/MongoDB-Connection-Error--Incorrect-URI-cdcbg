```javascript
const MongoClient = require('mongodb').MongoClient;

async function updateDocument() {
  const uri = "mongodb://localhost:27017/mydatabase"; // Correct URI
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('mydatabase');
    const collection = db.collection('mycollection');

    const result = await collection.updateOne({ name: "John Doe" }, { $set: { age: 30 } });
    console.log(result);
  } finally {
    await client.close();
  }
}

updateDocument();
```