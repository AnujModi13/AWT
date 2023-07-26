let person={
    firstname :'Anuj',
    lastname :'Modi',
    age :'20',
    hobbies :['reading','gaming','Tracking'],
    greet : function(){
        console.log(`Hello, my name is ${this.firstname} ${this.lastname}.
        I'm ${this.age} years old.`)
    },
    address:['Rajesthan','Bharuch','Gujarat'],
    address1: {State:'Rajesthan',City:'Bharuch',Country:'India'},   
}
console.log(person.firstname , person['lastname']);
console.log(person.greet());

let p1=person;
let p2={...person};
let p3={address :{...person.address}};
let p4={address1 :{...person.address1}};
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);


const p5=JSON.parse(JSON.stringify(p2));
p5.address1.City="Vadodara";
console.log(p2);
console.log(p5);

//lodash .js file we can change the structureClone
