

class Component {
    constructor(children = []) {
        this.children = children;
    }

    render() {
        throw new Error("child class must implement render() method");
    }

    renderInnerHTML() {
        for(el of children) {
            if (typeof(el) !== String) {
                el = el.render();
            }
        }
    }
}

// const comp = new Component();
// console.log(comp.render);

module.exports = Component;