const Employee = require('../lib/Employee');

describe('Employee class', () => {
    it('Should create new employee and give name, id, and email', () => {
        const testingEmployeeName = "Alyssa";
        const testingEmployeeId = 22;
        const testingEmployeeEmail = "alyssa@email.com"
        
        const employee = new Employee(testingEmployeeName, testingEmployeeId, testingEmployeeEmail);

        expect(employee.name).toBe(testingEmployeeName);
        expect(employee.id).toBe(testingEmployeeId);
        expect(employee.email).toBe(testingEmployeeEmail);
    });

    it('getName() should return employee name', () => {
        const employee = new Employee("Alyssa", 22, "alyssa@email.com");

        expect(employee.getName()).toBe("Alyssa");
    });

    it('getId() should return employee id', () => {
        const employee = new Employee("Alyssa", 22, "alyssa@email.com");

        expect(employee.getId()).toBe(22);
    });

    it('getEmail() should return employee email', () => {
        const employee = new Employee("Alyssa", 22, "alyssa@email.com");

        expect(employee.getEmail()).toBe("alyssa@email.com");
    });

    it('getRole() should return Employee', () => {
        const employee = new Employee("Alyssa", 22, "alyssa@email.com");

        expect(employee.getRole()).toBe("Employee");
    });
})