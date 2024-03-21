import { MongoClient } from "mongodb";
const connectionString = process.env.DB || "";
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}
let db = conn.db("express_boilerplate");
export default db;