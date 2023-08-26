import React, { useState } from 'react';
import './StudentCard.css';

const StudentCard = ({ student }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div className="student-card">
            <img src={student.profilePicture} alt={student.name} />
            <p>{student.name}</p>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                Present
            </label>
        </div>
    );
}

export default StudentCard;
