const Component = require("../lib/component.js");

describe('Component', () => {
    describe('Instantiate with no arg', () => {
        it('should set component.children to [] since no arguments were passed to the constructor', () => {
            const component = new Component();

            expect(component.children).toEqual([]);
        })
    });

    describe('Instantiate with arg', () => {
        it('should set component.children equal to the array passed as a parameter', () => {
            let arr = ["a", "b", "c"];
            const component = new Component(arr);

            expect(component.children).toEqual(arr);
        })
    });

    describe('call render() on Component', () => {
        it('should throw an error if render() is called on a component object', () => {
            const component = new Component();
            const error = new Error("child class must implement render() method")

            expect(component.render).toThrowError(error);
        })
    });
})
