import React, { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul", score: 75 },
    { id: 2, name: "Aman", score: 32 },
    { id: 3, name: "Priya", score: 58 }
  ]);

  // update score
  const updateScore = (id, newScore) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, score: Number(newScore) }
          : student
      )
    );
  };

  // add student
  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name: name,
      score: Number(score)
    };

    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };
  const deleteStudent = (id) => {
  setStudents((prevStudents) =>
    prevStudents.filter((student) => student.id !== id)
  );
};

  return (
    <div className="container">
      <Header />

      <AddStudentForm addStudent={addStudent} />

   
      <StudentTable
  students={students}
  updateScore={updateScore}
  deleteStudent={deleteStudent}
/>
      
    </div>
  );
}

export default App;