const Header = require("../lib/header.js");

describe('Header', () => {
    describe('Instantiate Header', () => {
        it('should create an object of type header when the constructor is called', () => {
            const header = new Header();

            expect(header).toBeInstanceOf(Header);
        })
    });

    describe('render()', () => {
        it('should return a string of HTML when the render method is called', () => {
            const header = new Header();
            const expectedOutput = `<header class="header"><h1>${header.title}</h1><p>${header.date}</p></header>`;
            console.log(expectedOutput);
            const renderOutput = header.render();
            
            expect(renderOutput).toEqual(expectedOutput);
        })
    });
})