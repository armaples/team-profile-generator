const Intern = require('../lib/Intern');

describe('Intern class', () => {
    it('Should create new intern and give name, id, email, and school', () => {
        const testingInternName = "Kia";
        const testingInternId = 33;
        const testingInternEmail = "kia@email.com";
        const testingInternSchool = "UNCC";

        const intern = new Intern(testingInternName, testingInternId, testingInternEmail, testingInternSchool);

        expect(intern.name).toBe(testingInternName);
        expect(intern.id).toBe(testingInternId);
        expect(intern.email).toBe(testingInternEmail);
        expect(intern.school).toBe(testingInternSchool);
    });

    it('getSchool() should return intern school', () => {
        const intern = new Intern("Kia", 33, "kia@email.com", "UNCC");

        expect(intern.getSchool()).toBe("UNCC");
    });

    it('getRole() should return Intern', () => {
        const intern = new Intern("Kia", 33, "kia@email.com", "UNCC");

        expect(intern.getRole()).toBe("Intern");
    })
})