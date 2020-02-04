import React from "react";

const FormChooser = ({forms, currentForm, setCurrentForm}) => {

    const handleChange = (event) => {

        setCurrentForm(event.target.value);

        console.log(event.target.value);
    }
    
    return (
        <div className="formChooser">
            <h2>Choose a Form</h2>
            <select name="formsAvailable" onChange={handleChange}>
                {forms.map(formData => <option key={formData.name} value={formData.name}>{formData.name}</option>)}
            </select>
        </div>
    )
}

export default FormChooser;