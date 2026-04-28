import React from "react";

function StudentRow({ student, updateScore, deleteStudent })  {
  const isPass = student.score >= 40;

  return (
    <tr>
      <td>{student.name}</td>

      <td>
        <input
          type="number"
          value={student.score}
          onChange={(e) =>
            updateScore(student.id, e.target.value)
          }
        />
      </td>

      <td className={isPass ? "pass" : "fail"}>
        {isPass ? "Pass" : "Fail"}
      </td>
      <td>
  <button
    className="delete-btn"
    onClick={() => deleteStudent(student.id)}
  >
    Delete
  </button>
</td>
    </tr>
  );
}

export default StudentRow;