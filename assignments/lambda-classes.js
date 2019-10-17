// CODE here for your Lambda Classes

class Person {
    constructor(personAttr) {
        this.name = personAttr.name;
        this.location = personAttr.location;
        this.age = personAttr.age;
    } // methods
    speak() {
        return `Howdy! my name is ${this.name} and I reside in ${this.location}.`
    }
}

// INSTRUCTOR
class Instructors extends Person {
    constructor(instructorsAttr) {
        super(instructorsAttr);
        this.favLanguage = instructorsAttr.favLanguage;
        this.specialty = instructorsAttr.specialty;
        this.catchPhrase = instructorsAttr.catchPhrase;
    } // method
    demo(subject) {
        return `Today we are learning about ${subject}.`;

    }
    grade(Students, subject) {
        return `${Students.name} receives a perfect score on ${subject}.`;
    }
}

// STUDENTS
class Students extends Person {
    constructor(studentsAttr) {
        super(studentsAttr);
        this.previousBackground = studentsAttr.previousBackground;
        this.className = studentsAttr.className;
        this.favSubjects = studentsAttr.favSubjects; 
    } // methods
    listsSubjects() {
        return `${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun a sprint challenge on ${subject}`;
    }
}

// PM
class ProjectManager extends Instructors {
    constructor(projectManagerAttr) {
        super(projectManagerAttr);
        this.gradClassName = projectManagerAttr.gradClassName;
        this.favInstructor = projectManagerAttr.favInstructor;
    } // method
    standUp(slackChannel) {
        return `${this.name} announces ${slackChannel}, @channel standup time!`;
    }
    debugsCode(Students, subject) {
        return `${this.name} debugs ${Students.name}'s code on ${subject}`;
    }
}

let lukas = new Students({
    name: `Lukas`,
    location: `Palm Coast`,
    age: 25,
    className: `WEB25`,
    favSubjects: [
        `HTML`,
        ` CSS`,
        ` JavaScript`
    ],
    previousBackground: `HTML/CSS/JS`,
});

let molly = new Instructors({
    name: `Molly`,
    location: `Cali`,
    age: 30,
    favLanguage: `Node`,
    specialty: `Node`,
    catchPhrase: `Want some?`,
});

let jolly = new ProjectManager({
    name: `Jolly`,
    location: `Chicago`,
    gradClassName: `WEB25`,
    favInstructor: molly.name,
});


console.log(lukas.speak());
console.log(molly.demo(`JavaScript-4`));
console.log(molly.grade(lukas, `JavaScript-4`));
console.log(`Instructor ${molly.name}'s favorite language is ${molly.favLanguage} and her catch phrase is ${molly.catchPhrase}. Her specialty is ${molly.specialty}`);
console.log(lukas.listsSubjects());
console.log(lukas.PRAssignment(`JavaScript-4`));
console.log(lukas.sprintChallenge(`JavaScript-4`));
console.log(jolly.standUp(`https://app.slack.com`));
console.log(jolly.debugsCode(lukas, `JavaScript-4`));
console.log(`${jolly.name}'s favorite instructor is ${jolly.favInstructor} who has ${molly.catchPhrase} as a catch phrase.`);
console.log(Students.grade);