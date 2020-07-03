const { esclient, index, type } = require("../../elastic");




module.exports = {

  // Product Metadata Event  
  async index(req, res){
    const { body } = await esclient.search({
      index: 'product_metadata_event'
    })
    return res.json(body.hits.hits);
  },


 // GET ALL PROJECTS
  async all_projects(req, res){
    const { body } = await esclient.search({
    index: 'product_metadata_event', 
    body: {
          "aggs" : {
              "all_projects": {
                "terms" : { "field" : "project" }
              } 
            }
      }
    })
    return res.json(body.aggregations.all_projects);
  },

 // GET ALL SOURCES
 async all_sources(req, res){
  const { body } = await esclient.search({
  index: 'product_metadata_event', 
  body: {
        "aggs" : {
            "all_sources": {
              "terms" : { "field" : "source" }
            } 
          }
    }
  })
  return res.json(body.aggregations.all_sources);
}





};