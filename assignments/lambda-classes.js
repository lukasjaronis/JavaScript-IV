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
    grader(Students) {
        let score = 100 - Math.round(Math.random() * 100);
        while (score > 0) {
            if (score - (Math.random() * 10) > 70) {
                return `${Students.name} has scored above a 70! (${score}), they are ready to graduate!`;
            } else {
                return `${Students.name} has scored below a 70! (${score}), they are NOT ready to graduate!`;
            } 
        }
        
    }
}

// STUDENTS
class Students extends Person {
    constructor(studentsAttr) {
        super(studentsAttr);
        this.previousBackground = studentsAttr.previousBackground;
        this.className = studentsAttr.className;
        this.favSubjects = studentsAttr.favSubjects; 
        this.grade = studentsAttr.grade;
    } // methods
    listsSubjects() {
         this.favSubjects.forEach(element => {
            console.log(element);
        });
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

// students

let lukas = new Students({
    name: `Lukas`,
    location: `Palm Coast`,
    age: 25,
    className: `WEB25`,
    favSubjects: [`HTML`,`CSS`,`JavaScript`],
    previousBackground: `HTML/CSS/JS`,
});

let eko = new Students({
    name: `Eko`,
    location: `${lukas.name} house.`,
    age: 2,
    className: `Doggo25`,
    favSubjects: [`Eating`,` CSS`,` JavaScript`],
    previousBackground: `HTML/CSS/JS`,
});

let kai = new Students({
    name: `Kai`,
    location: `Girlfriend house`,
    age: 2,
    className: `Doggo25`,
    favSubjects: [`Catching Squirrels`,` CSS`,` JavaScript`],
    previousBackground: `HTML/CSS/JS`,
});

// instructors

let molly = new Instructors({
    name: `Molly`,
    location: `Cali`,
    age: 30,
    favLanguage: `Node`,
    specialty: `Node`,
    catchPhrase: `Want some?`,
});

let jack = new Instructors({
    name: `Jack`,
    location: `Cali`,
    age: 32,
    favLanguage: `Node`,
    specialty: `Node`,
    catchPhrase: `Get out of here MAN!`,
});

let larry = new Instructors({
    name: `Larry`,
    location: `Cali`,
    age: 99,
    favLanguage: `Node`,
    specialty: `Node`,
    catchPhrase: `I like drinking beer.`,
});

// pms

let jolly = new ProjectManager({
    name: `Jolly`,
    location: `Chicago`,
    gradClassName: `WEB25`,
    favInstructor: molly.name,
});

let croggy = new ProjectManager({
    name: `Croggy`,
    location: `Boston`,
    gradClassName: `WEB25`,
    favInstructor: molly.jolly,
});

let froggy = new ProjectManager({
    name: `Froggy`,
    location: `West Palm Beach`,
    gradClassName: `WEB25`,
});


console.log(lukas.speak());
console.log(molly.demo(`JavaScript-4`));
console.log(molly.grade(lukas, `JavaScript-4`));
console.log(`Instructor ${molly.name}'s favorite language is ${molly.favLanguage} and her catch phrase is ${molly.catchPhrase}. Her specialty is ${molly.specialty}`);
lukas.listsSubjects();
console.log(lukas.PRAssignment(`JavaScript-4`));
console.log(lukas.sprintChallenge(`JavaScript-4`));
console.log(jolly.standUp(`https://app.slack.com`));
console.log(jolly.debugsCode(lukas, `JavaScript-4`));
console.log(`${jolly.name}'s favorite instructor is ${jolly.favInstructor} who has ${molly.catchPhrase} as a catch phrase.`);


console.log(`${froggy.name}'s favorite instructor is himself, ${froggy.name}!`);
console.log(`${croggy.name} is from ${croggy.location} graduating from ${croggy.gradClassName}`);
console.log(`${jack.name} is ${jack.age} years old and his catch phrase is "${jack.catchPhrase}"`);
console.log(`${larry.name} is ${larry.age} years old and his catch phrase is "${larry.catchPhrase}"`);

console.log(`${kai.name} and ${eko.name} are both dogs. ${kai.name}'s favorite subjects are ${kai.favSubjects}. ${eko.name}'s favorite subjects are ${eko.favSubjects}.`)

console.log(molly.grader(lukas));