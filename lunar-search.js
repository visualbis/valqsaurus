const lunr = require("lunr");
const search_data = require("./search-data");

lunr.tokenizer.separator = /[\s\-/]+/;
const index = lunr(function() {
  this.ref("id");
  this.field("title", { boost: 200 });
  this.field("content", { boost: 2 });
  this.metadataWhitelist = ["position"];

  search_data.forEach((d, i) => {
    const doc = {
      id: i,
      title: d.title,
      content: d.content
    };
    this.add(doc);
  });
});

const results = index.query(function(query) {
  const tokens = lunr.tokenizer("Formatting");
  query.term(tokens, {
    boost: 10
  });
  query.term(tokens, {
    wildcard: lunr.Query.wildcard.TRAILING
  });
});

const hits = [];
results.forEach(result => {
  const doc = search_data[result.ref];
  const { metadata } = result.matchData;
  for (let i in metadata) {
    if (metadata[i].title) {
      const hit = {
        hierarchy: {
          lvl0: doc.pageTitle || doc.title,
          lvl1: doc.type === 0 ? null : doc.title
        },
        url: doc.url,
        _highlightResult: {
          hierarchy: {
            lvl0: {
              value: doc.pageTitle || doc.title
            },
            lvl1:
              doc.type === 0
                ? null
                : {
                    value: doc.title
                  }
          }
        }
      };
      hits.push(hit);
    } else if (metadata[i].content) {
    }
  }
});

console.log(JSON.stringify(hits));
