import lunr from "lunr";
lunr.tokenizer.separator = /[\s\-/]+/;

class LunrSearchAdapter {
    constructor(searchData) {
        this.searchData = searchData;
        this.init();
    }

    init() {
        const { searchData } = this;
        this.lunrIndex = lunr(function () {
            this.ref("id");
            this.field("title", { boost: 200 });
            this.field("content", { boost: 2 });
            this.metadataWhitelist = ["position"];
            searchData.forEach((d, i) => {
                const doc = {
                    id: i,
                    title: d.title,
                    content: d.content
                };
                this.add(doc);
            });
        });
    }

    getLunrResult(input) {
        return this.lunrIndex.query(function (query) {
            const tokens = lunr.tokenizer(input);
            query.term(tokens, {
                boost: 10
            });
            query.term(tokens, {
                wildcard: lunr.Query.wildcard.TRAILING
            });
        });
    }

    getTitleHit(doc, position, length) {
        const start = position[0];
        const end = position[0] + length;
        let formattedTitle = doc.title.substring(0, start) + '<span class="algolia-docsearch-suggestion--highlight">' + doc.title.substring(start, end) + '</span>' + doc.title.substring(end, doc.title.length);
        return {
            hierarchy: {
                lvl0: doc.pageTitle || doc.title,
                lvl1: doc.type === 0 ? null : doc.title
            },
            url: doc.url,
            _highlightResult: {
                hierarchy: {
                    lvl0: {
                        value: doc.type === 0 ? formattedTitle : doc.pageTitle
                    },
                    lvl1:
                        doc.type === 0
                            ? null
                            : {
                                value: formattedTitle
                            }
                }
            }
        };
    }

    search(input) {
        return new Promise((resolve, rej) => {
            const results = this.getLunrResult(input);
            console.log(results);
            const hits = [];
            results.forEach(result => {
                const doc = this.searchData[result.ref];
                const { metadata } = result.matchData;
                for (let i in metadata) {
                    if (metadata[i].title) {
                        const position = metadata[i].title.position[0]
                        hits.push(this.getTitleHit(doc, position, input.length));
                    } else if (metadata[i].content) {
                    }
                }
            });
            resolve(hits);
        });
    }
}

export default LunrSearchAdapter;
