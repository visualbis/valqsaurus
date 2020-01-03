const jsdom = require("jsdom");
const fs = require('fs');
const { JSDOM } = jsdom;


const nextUntil = function (elem, selector) {

	// Setup siblings array
	var siblings = [];

	// Get the next sibling element
	elem = elem.nextElementSibling;

	// As long as a sibling exists
	while (elem) {

        // If we've reached our match, bail
		if (elem.matches(selector)) break;

		// Otherwise, push it to the siblings array
		siblings.push(elem);

		// Get the next sibling element
		elem = elem.nextElementSibling;

	}

	return siblings;

};

const HtmlFile = fs.readFileSync('./build/docs/general/getting-started/index.html');
const dom = new JSDOM(HtmlFile);
const article = dom.window.document.querySelector("article"); 
const markdown = article.querySelector(".markdown");
const sections = Array.from(markdown.getElementsByTagName("h2"));
let i =0;
while(true){
    if(i >=sections.length){
        break;
    }
    const sib = nextUntil(sections[i],"h2");
    console.log("Heading : " + sections[i].textContent);
    sib.forEach(s =>{
        console.log(s.textContent);
    });
    console.log("------------------------------------------");
    i++;
}
