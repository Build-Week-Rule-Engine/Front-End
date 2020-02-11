import React from "react";

const FormRecipients = ({lastSelectedOption, updateLastSelectedOption}) => {

    let form = {to: ["Zach", "Tyrone", "Kayla", "Steffie", "Grant"]};

    let optionType = "recipient";

    const handleDrag = event => {
        // event.preventDefault();

        alert("Dragging hasn't been implemented yet. For now, click on the field you want to place, and click again in the destination box.")
    }

    return (
        <div className="formRecipients">
            <h2>Recipients</h2>
            <div className="formOptions">
                {form.to.map(recipient =>
                    <div className={"formRecipient" + ((lastSelectedOption.type === optionType && lastSelectedOption.value === recipient) ? " optionSelectedLight" : "")}
                    
                    key={"recipient_" + recipient} value={"recipient_" + recipient}
                    
                    onClick={event => updateLastSelectedOption({type: "recipient", value: event.target.textContent})}>{recipient}</div>
                )}
            </div>
        </div>
    )
}

export default FormRecipients;