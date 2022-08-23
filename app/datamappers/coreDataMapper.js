import { ObjectId } from "mongodb";

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

  async findOne(userId) {
    const db = this.client.db(this.dbName);
    const collection = db.collection(this.collectionName);

    const result = await collection.find(ObjectId(userId)).toArray();

    return result;
  }

  async create(inputData) {
    const db = this.client.db(this.dbName);
    const collection = db.collection(this.collectionName);

    const result = await collection.insertOne(inputData);

    if (!result.acknowledged) return null;

    return result.acknowledged;
  }

  async update(userId,inputData) {
    const db = this.client.db(this.dbName);
    const collection = db.collection(this.collectionName);

    const result = await collection.updateOne(ObjectId(userId),{$set: inputData});

    if (!result.acknowledged) return null;

    return result.acknowledged;
  }

  async delete(userId) {
    const db = this.client.db(this.dbName);
    const collection = db.collection(this.collectionName);

    const result = await collection.deleteOne(userId);

    if (!result.acknowledged) return null;

    return result.acknowledged;
  }
}

export { CoreDataMapper };
