const api = async(req, res) => {

  const query = req.query.id;

  let metadata = {
      "name": 'BeaverDAO',
      "description": "MIT in crypto.",
      "tokenId" : parseInt(query),
      "image": `https://beaverdao.com/images/beaver.png`,
      "external_url":"https://beaverdao.com",
      "attributes": [
      ]
    }

  res.statusCode = 200
  res.json(metadata)
}

export default api
