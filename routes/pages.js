import express from 'express';
import db from '../db.js'

const router = express.Router();

/* GET All pages data. */
router.get("/", async (req, res) => {
  let collection = await db.collection("cards");
  let results = await collection.find({})
    .limit(50)
    .toArray();
  res.send(results).status(200);
});


export default router;
