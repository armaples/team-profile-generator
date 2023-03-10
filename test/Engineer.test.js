const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    it('Should create new Engineer and give name, id, email, and github', () => {
        const testingEngineerName = "Aaron";
        const testingEngineerId = 11;
        const testingEngineerEmail = "aaron@email.com";
        const testingEngineerGithub = "tylee711";

        const engineer = new Engineer(testingEngineerName, testingEngineerId, testingEngineerEmail, testingEngineerGithub);

        expect(engineer.name).toBe(testingEngineerName);
        expect(engineer.id).toBe(testingEngineerId);
        expect(engineer.email).toBe(testingEngineerEmail);
        expect(engineer.github).toBe(testingEngineerGithub);
    });

    it('getGithub() should return engineer github', () => {
        const engineer = new Engineer("Aaron", 11, "aaron@email.com", "tylee711");

        expect(engineer.getGithub()).toBe("tylee711");
    });

    it('getRole() should return Engineer', () => {
        const engineer = new Engineer("Aaron", 11, "aaron@email.com", "tylee711");

        expect(engineer.getRole()).toBe("Engineer");
    })
})