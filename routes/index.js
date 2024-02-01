import express from 'express';

const router = express.Router();


/* GET INDEX data. */
router.get('/', function (req, res, next) {
  res.json({ title: 'Express Boilerplate', 
  description: `
  Dit is een boilerplate die bedoeld is om je te helpen snel aan 
  de slag te gaan met het bouwen van geweldige webapplicaties met 
  behulp van Express.js`, 
  author: 'P. Thong', 
  year: 2024});
});

export default router;