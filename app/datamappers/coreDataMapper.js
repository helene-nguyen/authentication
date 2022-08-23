class CoreDataMapper {
    dbName = 'authme';
    collectionName;

    constructor(client) {
        this.client = client;
    }

    async findAll() {
        await client.connect();
        const db = client.db(this.dbName);
        const collection = db.collection(this.collectionName);

        const result = await collection.find().toArray();
        this.client.close();

        return result;
    }

    async create(inputData) {
        await client.connect();
        const db = client.db(this.dbName);
        const collection = db.collection(this.collectionName);

        const result = await collection.insertOne(inputData);
   
        if (!result.acknowledged) return null;
        client.close();

        return result.acknowledged;
    }
}

export {CoreDataMapper};