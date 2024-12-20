
//1. Define a student class 
class Student {
    constructor(studentID, firstName, lastName, qualification){
        this.studentID = studentID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.qualification = qualification;
    }
}

//2. Create arrar of student
let studentsArray = [
    new Student(11, "Rebekah","Velten", "Bachelor of Science"),
    new Student(5, "Dani", "Cunniam", "Master of Arts"),
    new Student(8, "Suzann", "Filgate", "Doctorate"),
    new Student(3, "Dorie", "Simonini", "Bachelor of Engineering"),
    new Student(25, "Tom", "Betjeman", "Master of Science"),
    new Student(16, "Genevieve", "Wilson", "Bachelor of Arts"),
    new Student(31, "Vonnie", "Moore", "Master of Business Administration"),
    new Student(45, "Callean", "Anderson", "Doctorate"),
    new Student(14, "Sophia", "Eastbrook", "Bachelor of Medicine"),
    new Student(20, "Lucas", "Martinez", "Master of Science")
];


//3. Sort the students array by studentID in ascending order
studentsArray.sort((a, b) => a.studentID - b.studentID);
console.log("Sorted:", studentsArray);


function sequentialSearch(arr,value) {
    arr.sort((a, b) => a.studentID - b.studentID);
    //loop tgrough array 
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].studentID === value){
            return index; // return index of array if found
        }
    }
    return -1;// return -1  if value not found in the array
}

//console.log("\nArray Test case2 :",studentsArray);
let searchID = 20 ;
let result = sequentialSearch(studentsArray,searchID);
if (result === -1) {
    console.log(searchID+" is not found");
} else {
    console.log(searchID+" is found");
    console.log("Frist Name : "+studentsArray[result].firstName);
    console.log("Last Name : "+studentsArray[result].lastName);
    console.log("Qualification: "+studentsArray[result].qualification);
    
}


// console.log("Array: "+ arraryNum);
// let number2 = 46 ;
// let result2 = sequentialSearch(arraryNum,number2);
// console.log(number2+" "+(result == -1? 'is not found':'is found'));//Conditional (ternary) operator.