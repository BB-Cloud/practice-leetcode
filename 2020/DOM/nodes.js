function grep(parentNode, pattern){
	var matches = [];
	var endScan = false;
	
	eachNode(parentNode, function(node){
		if(endScan)
			return false;
		
		// Ignore anything which isn't a text node
		if(node.nodeType !== Node.TEXT_NODE)
			return;

		if("string" === typeof pattern){
			if(-1 !== node.textContent.indexOf(pattern))
				matches.push(node);
		}
		else if(pattern.test(node.textContent)){
			if(!pattern.global){
				endScan = true;
				matches = node;
			}
			else matches.push(node);
		}
	});
	
	return matches;
}

function eachNode(rootNode, callback){
    var nodes;
	if(!callback){
		nodes = [];
		eachNode(rootNode, function(node){
			nodes.push(node);
		});
		return nodes;
	}

	if(false === callback(rootNode))
		return false;

	if(rootNode.hasChildNodes()){
		nodes = rootNode.childNodes;
		for(var i = 0, l = nodes.length; i < l; ++i)
			if(false === eachNode(nodes[i], callback))
				return;
	}
}

var typos = ["teh", "adn", "btu", "adress", "youre", "msitakes"];
var pattern = new RegExp("\\b(" + typos.join("|") + ")\\b", "gi");
var mistakes = grep(document.body, pattern);
console.log(mistakes);