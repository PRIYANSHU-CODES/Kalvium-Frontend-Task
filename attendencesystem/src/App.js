import React, { useState } from 'react';
import Header from './Header';
import StudentCard from './StudentCard';
import AttendanceButton from './AttendanceButton';
import Footer from './Footer';
import './App.css';

const studentData = [
  { name: 'Student 1', profilePicture: 'url-to-image' },
  { name: 'Student 2', profilePicture: 'url-to-image' },
  // ... Add more student data
];

function App() {
  const [attendance, setAttendance] = useState([]);

  const handleAttendanceSubmit = () => {
    const presentStudents = studentData.filter((student, index) => {
      return attendance[index];
    });
    console.log('Present Students:', presentStudents);
  }

  return (
    <div className="App">
      <Header className="header" date="August 26, 2023" />
      <div className="student-list">
        {studentData.map((student, index) => (
          <StudentCard
            key={index}
            student={student}
            isChecked={attendance[index]}
            onCheckboxChange={(isChecked) => {
              const updatedAttendance = [...attendance];
              updatedAttendance[index] = isChecked;
              setAttendance(updatedAttendance);
            }}
          />
        ))}
      </div>
      <AttendanceButton onClick={handleAttendanceSubmit} />
      <Footer />
    </div>
  );
}

export default App;
