// Show default data on the page
window.addEventListener("load", defaultDisply);


// Set defualt Display student
function defaultDisply(){
    tempStudentArray = studentsArray
    displayStudents();
};

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

