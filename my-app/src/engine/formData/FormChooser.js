import React from "react";

const FormChooser = ({formsAvailable, currentForm, setCurrentForm, changeForm}) => {

    const handleChange = (event) => {

        // find the form associated with the chosen value
        const newForm = formsAvailable.filter(form => form.name === event.target.value)[0];

        if (newForm)
            {
                setCurrentForm(newForm);

                // update current form via dispatcher
                changeForm(newForm);
            }
    }
    
    return (
        <div className="formChooser">
            <h2>{currentForm.name} Form</h2>
            <select name="formsAvailable" onChange={handleChange}>
                {formsAvailable.map(formData => <option key={formData.name} value={formData.name}>{formData.name}</option>)}
            </select>
        </div>
    )
}

export default FormChooser;