class StudentList{
    constructor(student){
      //this.rootId = rootId; // The html id of where the list is going
      this.studentList = student; // The array of student to be displayed
      //this.refresh();
    }
    
    genStudents() {
        let tableBody = document.querySelector('#student-list tbody');
        tableBody.innerHTML = '';
        
        this.studentList.forEach(studentList => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${studentList.studentID}</td>
                <td>${studentList.firstName}</td>
                <td>${studentList.lastName}</td>
                <td>${studentList.qualification}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    add(id,firstName,lastName,qualification){
        console.log(this.studentList)

        if (id && firstName && lastName && qualification) {
            this.studentList.push(new Student(parseInt(id), firstName, lastName, qualification));
            console.log(this.studentList)
        }  
    }

    searchID(id){
        id = parseInt(id);
        this.studentList.sort((a, b) => a.studentID - b.studentID);
        for (let index = 0; index < this.studentList.length; index++) {
            console.log(this.studentList[index].studentID)
            if (this.studentList[index].studentID === id){
                return this.studentList[index]; // return array if found
            }
        }
        return -1;// return -1  if value not found in the array  
    }
   
    searcName(searchName){
        let results = this.studentList.filter(student => 
            student.firstName.toLowerCase().includes(searchName) || 
            student.lastName.toLowerCase().includes(searchName)
        );
        return results;
    
    }
    sortA2Z(){
        return this.studentList.sort((a, b) => a.lastName.localeCompare(b.lastName));
      }
      
      // Sort  Z - A
    sortZ2A(){
        return this.studentList.sort((a, b) => b.lastName.localeCompare(a.lastName));
      }
      
    
}