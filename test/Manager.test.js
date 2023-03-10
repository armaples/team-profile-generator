const Manager = require('../lib/Manager');

describe('Manager class', () => {
    it('Should create new manager and give name, id, email, and office number', () => {
        const testingManagerName = "Mel";
        const testingManagerId = 1;
        const testingManagerEmail = "mel@email.com";
        const testingOfficeNumber = 3400;

        const manager = new Manager(testingManagerName, testingManagerId, testingManagerEmail, testingOfficeNumber);

        expect(manager.name).toBe(testingManagerName);
        expect(manager.id).toBe(testingManagerId);
        expect(manager.email).toBe(testingManagerEmail);
        expect(manager.officeNumber).toBe(testingOfficeNumber);
    });

    it('getOfficeNumber() should return Manager office number', () => {
        const manager = new Manager("Adam", 2, "adam@email.com", 3300);

        expect(manager.getOfficeNumber().toBe(3300));
    });

    it('getRole() should return Manager', () => {
        const manager = new Manager("Adam", 2, "adam@email.com", 3300);

        expect(manager.getRole().toBe("Manager"));
    });
})