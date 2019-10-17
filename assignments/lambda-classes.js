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

let lukas = new Person({
name: `Lukas`,
location: `Palm Coast`,
age: 25,
className: `WEB25`,
favSubjects: [
    `HTML`,
    `CSS`,
    `JavaScript`
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

});


console.log(lukas.speak());
console.log(molly.demo(`JavaScript-4`));
console.log(molly.grade(lukas, `JavaScript-4`));
console.log(`Instructor ${molly.name}'s favorite language is ${molly.favLanguage} and her catch phrase is ${molly.catchPhrase}. Her specialty is ${molly.specialty}`);
