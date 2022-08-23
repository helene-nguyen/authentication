//~import module
import { MongoClient } from "mongodb";

//~connexion 
const url = process.env.CONNEXION_STRING;
const client = new MongoClient(url);
console.log("client: ", client);

export { client };