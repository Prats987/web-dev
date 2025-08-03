const studentRecords = [];

    function submit() {
      const name = document.getElementById("studentName").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const marks = parseInt(document.getElementById("marks").value);

      if (!name || !subject || isNaN(marks) || marks < 0 || marks > 100) {
        alert("Please fill all fields correctly.");
        return;
      }

      let grade;
      if (marks >= 90) grade = "A";
      else if (marks >= 75) grade = "B";
      else if (marks >= 50) grade = "C";
      else grade = "Fail";

      const student = { name, subject, marks, grade };
      studentRecords.push(student);

      

      console.clear();
      console.table(studentRecords);

      
        console.log(`Student ${studentRecords.length} added successfully\n\n`) 
        console.log(`Student Info:\n`) 
        console.log(`Name: ${name}\n`) 
        console.log(`Subject: ${subject}\n`)
        console.log(`Marks: ${marks}\n`)
        console.log(`Grade:  ${grade}`)
      

      document.getElementById("studentName").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("marks").value = "";
    }

    function clear() {
      studentRecords.length = 0;
      document.getElementById("studentName").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("marks").value = "";
      document.getElementById("resultMessage").innerText = "";
      document.getElementById("totalCount").innerText = "";
      console.clear();
      alert("All student records cleared.");
    }