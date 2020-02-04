import React from "react";

const FormChooser = ({forms, currentForm, setCurrentForm}) => {

    const handleChange = (event) => {

        // find the form associated with the chosen value
        const newForm = forms.filter(form => form.name === event.target.value)[0];

        if (newForm)
            { setCurrentForm(newForm); }

        console.log("changed form to", newForm);
    }
    
    return (
        <div className="formChooser">
            <h2>Choose a Form</h2>
            <select name="formsAvailable" onChange={handleChange}>
                {forms.map(formData => <option key={formData.name} value={formData.name}>{formData.name}</option>)}
            </select>
            <h2>{currentForm.name}</h2>
        </div>
    )
}

export default FormChooser;