import React, { useState } from "react";

const FormChooser = ({formsAvailable, form, changeForm}) => {

    const [currentForm, setCurrentForm] = useState(form);

    const handleChange = (event) => {

        // find the form associated with the chosen value
        const newForm = formsAvailable.filter(form => form.formName === event.target.value)[0];

        if (newForm)
            {
                setCurrentForm(newForm);

                // update current form via dispatcher
                changeForm(newForm);
            }
    }
    
console.log(currentForm, "is the current form");
console.log(formsAvailable, "are available");

    return (
        <div className="formChooser">
            <h2>{currentForm.name} Form</h2>
            <select name="formsAvailable" onChange={handleChange}>
                {formsAvailable.map(formData => <option key={formData.formName} value={formData.formName}>{formData.formName}</option>)}
            </select>
        </div>
    )
}

export default FormChooser;