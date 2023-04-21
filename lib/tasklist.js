const Component = require('./component.js');

class TaskList extends Component {
    constructor(children) {
        super(children);
        this.innerHTML = () => {
            listContent = ``;
            for (el of this.children) {
                listContent += el.render();
            }
            return listContent;
        }
    }

    render() {
        return `<ul class="tasks">${this.innerHTML}</ul>`;
    }
}

module.exports = TaskList;