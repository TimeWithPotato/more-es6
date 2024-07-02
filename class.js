//syntactic sugar

class Instructor{
    name
    designation = 'Web Course Instructor'
    team = 'Web Team'
    location
    startSupportSession(time) {
        console.log(`Start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`Please create quiz for module: ${module}`);
    }
}
const aamir = new Instructor();
console.log(aamir);
aamir.startSupportSession('9.00');
aamir.createQuiz(60);

class Instructor2{
    name
    designation = 'Web Course Instructor'
    team = 'Web Team'
    location
    startSupportSession(time) {
        console.log(`Start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`Please create quiz for module: ${module}`);
    }
    constructor(name, location) {
        this.name = name
        this.location = location
    }
}

const hossain = new Instructor2('hossain', 'mumbai');
console.log(hossain);