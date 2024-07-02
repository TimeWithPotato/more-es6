class TeamMember{
    name;
    location;
    constructor(name, location) {
        this.name = name
        this.location = location
    }

    provideFeedback() {
        console.log(`${this.name} Thank You for your feedback`)
    }
}

class Instructor extends TeamMember{
    designation = 'Web Course Instructor'
    team = 'Web Team'
    constructor(name, location) {
        super(name, location)
    }
    startSupportSession(time) {
        console.log(`Start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`Please create quiz for module: ${module}`);
    }
}

class Developer extends TeamMember{
    designation = 'Web Developer'
    team = 'Web Team'
    tech = 'CSE'
    constructor(name, location,tech) {
        super(name, location)
        this.tech = tech
    }
    developerFeature(feature) {
       console.log(`${this.name} please develop this feature ${feature}`)
    }
    release(version) {
        console.log(`${this.name} please release this version: ${version}`)
    }
}


