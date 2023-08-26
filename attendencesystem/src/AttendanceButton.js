import React from 'react';
import './AttendanceButton.css';

const AttendanceButton = ({ onClick }) => {
    return (
        <button className="attendance-button" onClick={onClick}>
            Submit Attendance
        </button>
    );
}

export default AttendanceButton;
