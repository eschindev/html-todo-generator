const Component = require('./component.js');

class TaskListItem extends Component {
    constructor(priority = false, text = "") {
        super();
        this.priority = priority;
        this.text = text;
    }

    render() {
        if (this.priority) {
            return `<li class="tasks-item tasks-item-priority">${this.text}</li>`
        }
        return `<li class="tasks-item">${this.text}</li>`;
    }
}

module.exports = TaskListItem;