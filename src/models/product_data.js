const { esclient, index, type } = require("../../elastic");

async function getProductData(req) {

  const query = {
    query: {
      match: {
        quote: {
          query: req.text,
          operator: "and",
          fuzziness: "auto"
        }
      }
    }
  }

  const { body: { hits } } = await esclient.search({
    from:  req.page  || 0,
    size:  req.limit || 100,
    index: index, 
    type:  type,
    body:  query
  });

  const results = hits.total.value;
  const values  = hits.hits.map((hit) => {
    return {
      id:     hit._id,
      project:  hit._source.project,
      base_name: hit._source.base_name,
      owner: hit._source.owner,
      score:  hit._score
    }
  });

  return {
    results,
    values
  }

}


module.exports = {
  getProductData
}