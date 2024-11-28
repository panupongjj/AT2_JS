window.addEventListener("load", defaultDisply);

class Student {
    constructor(studentID, firstName, lastName, qualification){
        this.studentID = studentID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.qualification = qualification;
    }
}
//2. Create array of student
let initStudents = [
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

let studentList = new StudentList(initStudents);
let tempStudents = studentList
let tempstudentList = new StudentList(initStudents);
// Set defualt Display student
function defaultDisply(){
    studentList.genStudents();
};

function refreshClick(){
    defaultDisply()
}

function addClick(){
    let id = document.getElementById('student-id').value;
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let qualification = document.getElementById('qualification').value;
    studentList.add(id,firstName,lastName,qualification)
    let studentListTemp = studentList
    studentListTemp.genStudents()
    clearInputs()
}


function searchIdClick(){
    let id = document.getElementById('search-id').value;
    let result = studentList.searchID(id)
    
    if(result == -1){
        alert("Student ID:"+id+" Not Found !!");
        clearInputs();
    }else{
        tempStudents = []
        tempStudents = [new Student(result.studentID, result.firstName, result.lastName, result.qualification)]
        tempstudentList = new StudentList(tempStudents);
        tempstudentList.genStudents();
        clearInputs()
    }
}

function searchNameClick(){
    
    let searchName = document.getElementById('search-name').value.toLowerCase();
    let results = studentList.searcName(searchName)
    
    if(results.length == 0){
        alert("Student name: "+searchName+" Not Found !!");
        clearInputs();
    }else{
        tempStudents = []
        results.forEach(result =>{
            tempStudents.push(new Student(result.studentID, result.firstName, result.lastName, result.qualification))
        });
        tempstudentList = new StudentList(tempStudents);
        tempstudentList.genStudents();
        clearInputs()
    }
}

function a2zClick(){
    let result = tempstudentList.sortA2Z();
    tempstudentList = new StudentList(result);
    tempstudentList.genStudents()
    
  }
  
  // Z to a Click
  function z2aClick(){
    let result = tempstudentList.sortZ2A();
    tempstudentList = new StudentList(result);
    tempstudentList.genStudents()
  }
function clearInputs() {
    document.getElementById('student-id').value = '';
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('qualification').value = '';
    document.getElementById('search-id').value = '';
    document.getElementById('search-name').value = '';
}
