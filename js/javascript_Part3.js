// Show default data on the page
window.addEventListener("load", defaultDisply);

function defaultDisply(){
    tempStudentArray = studentsArray
    displayStudents();
};


//1. Define a student class 
class Student {
    constructor(studentID, firstName, lastName, qualification){
        this.studentID = studentID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.qualification = qualification;
    }
}
//2. Create array of student
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
studentsArray.sort((a, b) => a.studentID - b.studentID);
let tempStudentArray = []

// Click EVENT
document.getElementById('refresh-btn').addEventListener('click', function(){
    tempStudentArray = studentsArray
    displayStudents();
});
document.getElementById('submit-btn').addEventListener('click', function(){
    addStudent();
});


document.getElementById('search-btn').addEventListener('click', searchByID );


document.getElementById('search-name-btn').addEventListener('click', function() {
    let searchName = document.getElementById('search-name').value.toLowerCase();
    let results = studentsArray.filter(student => 
        student.firstName.toLowerCase().includes(searchName) || 
        student.lastName.toLowerCase().includes(searchName)
    );
    if(results.length == 0){
        alert("Student Not Found !!");
        clearInputs();
    }else{
        tempStudentArray = [];
        results.forEach(result =>{
            tempStudentArray.push(new Student(result.studentID, result.firstName, result.lastName, result.qualification))
        });
       
        clearInputs();
        displayStudents()
    }

});

// Displat student list.
function displayStudents() {
    let tableBody = document.querySelector('#student-list tbody');
    tableBody.innerHTML = '';
    
    tempStudentArray.forEach(studentArr => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${studentArr.studentID}</td>
            <td>${studentArr.firstName}</td>
            <td>${studentArr.lastName}</td>
            <td>${studentArr.qualification}</td>
        `;
        tableBody.appendChild(row);
    });
}
// Add new student to studentsArray
function addStudent(){
    let id = document.getElementById('student-id').value;
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let qualification = document.getElementById('qualification').value;

    if (id && firstName && lastName && qualification) {
        studentsArray.push(new Student(id, firstName, lastName, qualification));
        
        tempStudentArray = studentsArray;
        clearInputs();
        displayStudents();
    }
}
// Sequential Search for searchByID
function sequentialSearch(arr,value) {
    arr.sort((a, b) => a.studentID - b.studentID);
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].studentID == value){
            return arr[index]; // return array if found
        }
    }
    return -1;// return -1  if value not found in the array
}

// search student by studentID
function searchByID(){

    let searchId = document.getElementById('search-id').value;
    let result = sequentialSearch(studentsArray,searchId)
    if(result == -1){
        alert("Student Not Found !!");
        clearInputs();
    }else{
        tempStudentArray = [];
        tempStudentArray.push(new Student(result.studentID, result.firstName, result.lastName, result.qualification))
        clearInputs();
        displayStudents()
    }
}
document.getElementById('sort-az').addEventListener('click', function() {

    tempStudentArray.sort((a, b) => a.lastName.localeCompare(b.lastName));
    displayStudents();
});

document.getElementById('sort-za').addEventListener('click', function() {
    tempStudentArray.sort((a, b) => b.lastName.localeCompare(a.lastName));
    displayStudents();
});

// clear all the input field.
function clearInputs() {
    document.getElementById('student-id').value = '';
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('qualification').value = '';
    document.getElementById('search-id').value = '';
    document.getElementById('search-name').value = '';
}

