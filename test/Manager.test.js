const Manager = require('../lib/Manager');

describe('Manager class', () => {
    it('Should return officeNumber of Manager', () => {
        const testingOfficeNumber = 3400;
        const manager = new Manager("Mel", 1, "mel@email.com", testingOfficeNumber);

        expect(manager.officeNumber).toBe(testingOfficeNumber);
    })

    it('Should return Manager when using getRole()', () => {
        const manager = new Manager("Adam", 3, "adam@email.com", 3300);

        expect(manager.getRole().toBe("Manager"));
    })
})