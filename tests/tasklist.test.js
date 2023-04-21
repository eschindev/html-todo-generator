const TaskList = require('../lib/tasklist.js');

describe('TaskList', () => {
    describe('TaskList instantiates', () => {
        it('should instantiate a TaskList object when the constructor is called', () => {
            const tl = new TaskList();

            expect(tl).toBeInstanceOf(TaskList);
        })
    });

    describe('TaskList assigns array to children property upon instantiation', () => {
        it('TaskList constructor should assign the array to the children property', () => {
            const tl = new TaskList(['a','b','c']);

            expect(tl.children).toEqual(['a','b','c']);
        })
    });

    describe('TaskList.render()', () => {
        it('should return a string of HTML when the render method is called', () => {
            const tl = new TaskList();
            const expectedOutput = `<ul class="tasks">${tl.innerHTML}</ul>`;

            const renderOutput = tl.render();
            
            expect(renderOutput).toEqual(expectedOutput);
        })
    });
})