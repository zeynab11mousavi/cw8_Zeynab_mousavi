function Student(name, gender){
    this.name = name;
    this.gender = gender;

}

let stuObj = new Student('Zeynab','Female');


Student.prototype = {
    age: 21,
    constructor : Student
};


let stuObj1 = new Student();
console.log(stuObj1.age);



Student.prototype = {
    age: 18,
}
let stuObj2 = new Student('zizi', 'Female');
console.log(stuObj2.age);



/*
//another way
stuObj['age']=21;
let stuObj2 = {...stuObj};
stuObj2.age = 18;
console.log(stuObj);
console.log(stuObj2);*/