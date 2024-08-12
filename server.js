require('dotenv').config();
const client = require('./DB/client')
const express = require(`express`);
const {createFlavor, showflavors} = require(`./DB/flavors`)

const app = express();
app.use(express.json());

client.connect();

app.get(`/api/v1/flavors`, async (req, res, next) => {
  try{
    const allFlavors = await showflavors();
    const { rows } = allFlavors;
    res.json(rows)
  } catch(error) {
    console.log(`Cannot GET Flavors, Error: ${error}`)
  }
})

app.post(`/api/v1/flavors`, async(req,res, next) => {
  try{
    const { name } = req.body;
    await createFlavor(name);
    res.json(name)
  }catch(error){
    console.log(`Error while creating flavor:`, error)
  }
})

const PORT = process.env.PORT;
app.listen(PORT, ()=> console.log(`Express Server Started: listening to ${PORT}`));
