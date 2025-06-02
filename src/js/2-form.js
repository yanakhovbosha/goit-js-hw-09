const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const btn = document.querySelector("button");

populateInput();

const formData = {
    email: "",
    message: "",
};

form.addEventListener("input", formChange);

function formChange(event) {
    const userName = event.target.name;
    const value = event.target.value.trim();
    formData[userName] = value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));

};

function populateInput() {
    const value = localStorage.getItem("feedback-form-state");
    if (value) {
        const parseValue = JSON.parse(value);
        input.value = parseValue.email || "";
        textarea.value = parseValue.message || "";
        console.log(value);
    }
}

form.addEventListener("submit", formBtn);

function formBtn(event) {
    event.preventDefault();
    if (formData.email.trim() === "" || formData.message.trim() === "") {
        alert("Fill please all fields")
        return
    }
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    event.target.reset();
}