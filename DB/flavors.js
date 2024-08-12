const client = require(`./client`);

const createFlavor = async(name) => {
  try{
    await client.query(`
      INSERT INTO flavors (name)
      VALUES ('${name}');
      `);
      console.log(`WOO HOO! Added a Flavor!!!!`)
  } catch(error) {
    console.log(error)

  }
}

const showflavors = async() =>{
  try{
    const result = await client.query(`
      SELECT * FROM flavors;
      `)
      return result;
  }catch(error) {
    console.log(`Encountered error while SELECT flavors:`, error)

  }
}

module.exports = {
  createFlavor,
  showflavors
}
