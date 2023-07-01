const cspit={
    departments:['CE','IT','CSE','EC','EE','CL','ME'],
    year:2003,
    location:"Changa",

    getDepartment:function(){

        console.log("Year of Establishment :" + this.year);
        console.log("Location :" + this.location);
        for(let i of this.departments)// For Of Loop used for string
        {
            console.log(i);
        }
    }
}
//cspit.getDepartment();

const CE=Object.create(cspit);
CE.TotalStudents=250;
CE.NoofFaculty=30;

CE.getCE=function(){
    CE.getDepartment();
    console.log("Total Students :" + this.TotalStudents);
    console.log("No of Faculty :" + this.NoofFaculty);
    for(let i in this.departments)//for in loop used for array
    {
        console.log(this.departments[i]);
    }
}

CE.getCE(); 