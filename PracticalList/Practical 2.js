let Array2=['Anuj',12,true,"Modi",'21ce072'];
let Array1=[23,67,352,1,45];
console.log(Array1);

console.log(' Length of the Array1 is : ',Array1.length);

console.log(" Element at index 3 is : ",Array1[3]);

Array1.push(55);
console.log(" Push Method() :",Array1);

Array1.pop();
console.log(" Pop Method() :",Array1);

Array1.shift();
console.log(" Shift Method() :",Array1);

Array1.unshift(21);
console.log(" Unshift Method() :",Array1);

Array3=Array1.join('');
console.log(" Join Method() on Array1 and Array2 : ",Array3);

delete Array1[2];
console.log(" Delete Method() : ",Array1);

Array4=Array1.concat(Array2);
console.log("Concat Method() : ",Array4);

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(" Flat Upto Infnity : ", arr4.flat(Infinity));

console.log(" Flat Upto 2 : ", arr4.flat(2));

const months = ['Jan', 'March', 'April', 'June'];
months.splice(3, 1, 'May');
console.log(" Splice Method  : ", months);

let month1=months.slice(1, 4);
console.log(" Slice Method  : ", month1);


let Objects={
    "Name" :"Anuj Modi",
    "Address": " B-104 Laxmi Narayan Nagar, Link Road , Bharuch ",
    "Rollno" : "21ce072",
    "Rohan" :()=>{
        console.log(Objects.Name);
        console.log(Objects.Address);
        console.log(Objects.Rollno);
    }
}

const tell= Objects;
tell.Rohan();


