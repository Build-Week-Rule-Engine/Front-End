import React from "react";

const FormChooser = ({forms, currentForm, setCurrentForm}) => {

    const handleChange = (event) => {

        // find the form associated with the chosen value
        const newForm = forms.filter(form => form.name === event.target.value)[0];

        if (newForm)
            { setCurrentForm(newForm); }
    }
    
    return (
        <div className="formChooser">
            <h2>{currentForm.name} Form</h2>
            <select name="formsAvailable" onChange={handleChange}>
                {forms.map(formData => <option key={formData.name} value={formData.name}>{formData.name}</option>)}
            </select>
        </div>
    )
}

export default FormChooser;