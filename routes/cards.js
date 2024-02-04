import express from 'express';

const router = express.Router();


const cards = [
    {title: "Kaart 3",  body: "Dit is de vierde kaart vanuit express.js"},
    {title: "Kaart 4", body: "Dit is de vierde kaart vanuit express.js"}
]

/* GET All cards data. */
router.get('/', function (req, res, next) {
    console.log("GET request on cards");
  res.json(cards);
});

/* GET All cards data. */
router.post('/', function (req, res, next) {
    console.log("POST request on cards");
    const card = req.body;
    console.log(req.body.title);
    cards.push(card);
    res.json(card);
  });
  

export default router;