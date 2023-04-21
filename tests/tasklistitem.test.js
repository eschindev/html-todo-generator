const TaskListItem = require('../lib/taskListItem.js');

describe ('TaskListItem', () => {
    describe('TaskListItem instantiates', () => {
        it('should instantiate a TaskListItem object when the constructor is called', () => {
            const tli = new TaskListItem();

            expect(tli).toBeInstanceOf(TaskListItem);
        })
    });

    describe('TaskListItem assigns boolean to priority property', () => {
        it('should assign the boolean value to the priority property', () => {
            const tli = new TaskListItem(true);

            expect(tli.priority).toEqual(true);
        })
    });

    describe('TaskListItem.render() with priority = false', () => {
        it('should return a string of HTML when the render method is called, with class="tasks-item"', () => {
            const tli = new TaskListItem();
            const expectedOutput = `<li class="tasks-item">${tli.text}</li>`;

            const renderOutput = tli.render();
            
            expect(renderOutput).toEqual(expectedOutput);
        })
    });

    describe('TaskListItem.render() with priority = true', () => {
        it('should return a string of HTML when the render method is called, with class="tasks-item tasks-item-priority"', () => {
            const tli = new TaskListItem([], true, "a task");
            const expectedOutput = `<li class="tasks-item tasks-item-priority">${tli.text}</li>`;

            const renderOutput = tli.render();
            
            expect(renderOutput).toEqual(expectedOutput);
        })
    });
})