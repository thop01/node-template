import express from 'express';
import db from '../db.js'
const router = express.Router();


const cards = [
    {title: "Kaart 3",  description: "Dit is de vierde kaart vanuit express.js"},
    {title: "Kaart 4", description: "Dit is de vierde kaart vanuit express.js"}
]

router.get("/", async (req, res) => {
  let collection = await db.collection("cards");
  let results = await collection.find({})
    .limit(50)
    .toArray();
  res.send(results).status(200);
});

/* GET All cards data. */
router.post('/', async function (req, res, next) {
    console.log("POST request on cards");
    const card = req.body;

    const result = await db.collection("cards").insertOne(req.body);
    res.json(card);
  });
  

export default router;