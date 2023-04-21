class Component {
    constructor(children = []) {
        this.children = children;
    }

    render() {
        throw new Error("child class must implement render() method");
    }

    renderInnerHTML() {
        let renderedChildren = []
        for(let el of this.children) {
            if (typeof(el) !== 'string') {
                renderedChildren.push(el.render());
            } else {
                renderedChildren.push(el);
            }
        }
        return renderedChildren.join('');
    }
}

module.exports = Component;