// curently not used

export const setAsCurrentField = (event, updateLastSelectedOption) => {
        
    let selectedOption = event.target.attributes.value.nodeValue;
    console.log("value to be used", selectedOption);

    updateLastSelectedOption(selectedOption);

}