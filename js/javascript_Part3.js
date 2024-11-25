
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
