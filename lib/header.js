const Component = require("./component.js");
const { formatDate } = require('./date.js');

class Header extends Component {
    constructor(title) {
        super();
        this.title = title;
        this.date = formatDate(new Date());
    }
    
    render() {
        return `<header class="header"><h1>${this.title}</h1><p>${this.date}</p></header>`;
    }
}

module.exports = Header;