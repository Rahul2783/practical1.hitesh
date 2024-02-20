function enableButton(){
    var agreeCheckbox = document.getElementById("agreeCheckbox");
    var registerButton = document.getElementById("registerButton");
    registerButton.disabled = !agreeCheckbox.checked;
}
