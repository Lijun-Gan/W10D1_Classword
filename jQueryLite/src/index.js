import DOMNodeCollection from "./dom_node_collection";

Window.prototype.$l = function(selector){
    let nodeList = Document.querySelectorAll(selector);
    let arr = Array.from(nodeList);
    let domNodes = new DOMNodeCollection(arr);
    return domNodes;
}