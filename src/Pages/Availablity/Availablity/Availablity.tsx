import React, { useState } from 'react';
import useTitle from '../../../hooks/useTitle/useTitle';

const arr = [
    "Option 4", "Option 5", "Option 6"

]

const Checkbox = ({ id, label }: any) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    return (
        <div>
            <input type="checkbox" id={id} checked={checked} onChange={handleCheckboxChange} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default Checkbox;