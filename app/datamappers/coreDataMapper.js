class CoreDataMapper {
  dbName = 'authme';
  collectionName;

  constructor(client) {
    this.client = client;
  }

  async findAll() {
    const db = this.client.db(this.dbName);
    const collection = db.collection(this.collectionName);

    const result = await collection.find().toArray();

    return result;
  }

  async create(inputData) {
    const db = this.client.db(this.dbName);
    const collection = db.collection(this.collectionName);

    const result = await collection.insertOne(inputData);

    if (!result.acknowledged) return null;

    return result.acknowledged;
  }
}

export { CoreDataMapper };
