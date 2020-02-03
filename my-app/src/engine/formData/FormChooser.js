import React, {useState} from "react";

const FormChooser = ({forms, currentForm, setCurrentForm}) => {



    return (
        <div className="formChooser">
            <select name="formsAvailable">
                {forms.map(formData => <option key={formData.name} value={formData.name}>{formData.name}</option>)}
            </select>
        </div>
    )
}

export default FormChooser;