

//21..They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


interface itCourse {
    courseName: string;
    location: string;
    onSiteStudents: Number;
}

let itCourse = {
    courseName : "Typescript and Javascript",
    location : "Governer house sindh",
    onSiteStudents : 50000
};

console.log(itCourse);