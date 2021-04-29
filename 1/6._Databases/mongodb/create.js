const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "movies";


MongoClient.connect(url, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        throw new Error(error);
    }

    const db = client.db(dbName);
    const actors = db.collection("actors");

    actors.insertOne({ name: "Gary Oldman" }, (error, result) => {
        if (error) {
            throw new Error(error);
        }

        console.log(result);
        client.close();
    });    
    
});
