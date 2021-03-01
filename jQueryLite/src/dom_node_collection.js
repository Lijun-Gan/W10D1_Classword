class DOMNodeCollection {
    constructor(array) {
        this.array = array;
    }
}

DOMNodeCollection.prototype.html = function (string){
    if(string){
        this.array.forEach( node => {
            node.innerHTML = string;
        })
    }else{
        debugger
        return this.array[0].innerHTML;
    }
}

module.exports = DOMNodeCollection;


