'use strict'
 
const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })
 

client.search({
  size: 0,
  index: 'product_metadata_event',
  body: {
        "aggs" : {
            "all_projects" : {
              "terms" : { "field" : "project" }
            }
        }
    }
}).then(function(resp) {
  console.log("Successful query!");
  console.log(JSON.stringify(resp, null, 4));
}, function(err) {
  console.trace(err.message);
});

