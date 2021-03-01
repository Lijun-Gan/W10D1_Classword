import DOMNodeCollection from "./dom_node_collection";

Window.prototype.$l = function(arg){
    let arr;
    if(arg instanceof HTMLElement){
         arr = [arg];

    }else{

        let nodeList = document.querySelectorAll(arg);
        debugger
        arr = Array.from(nodeList);
    }
    let domNodes = new DOMNodeCollection(arr);
    return domNodes;
}