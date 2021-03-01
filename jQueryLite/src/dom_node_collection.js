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
        // debugger
        return this.array[0].innerHTML;
    }
}

DOMNodeCollection.prototype.empty = function () {
    this.array.forEach(node => {
        node.innerHTML = "";
    })
}

DOMNodeCollection.prototype.append = function (arg) {
        for (let j = 0; j < this.array.length; j++) {
            debugger
            if (arg.constructor.name === "DOMNodeCollection") {
                for (let i = 0; i < arg.array.length; i++) {
                    const node = arg.array[i];
                    console.log(this.array[j].constructor.name)
                    console.log(node.constructor.name)
                    // this.array[j].appendChild(node);
                    this.array[j].innerHTML += node.outerHTML;
                }
            } else {
                this.array[j].innerHTML += arg;
            }
            
        }
}

// $('li').append("<img>", "<p>")

module.exports = DOMNodeCollection;


