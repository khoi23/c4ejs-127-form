// Get elements
const form = document.querySelector("form"),
    eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input");

// console.log(form); console.log(eField); console.log(eInput); console.log(pField);console.log(pInput);

form.onsubmit = (e) => {
    e.preventDefault(); // preventing form form submitting
    if(eInput.value == "") { // if email is empty
        eField.classList.add("shake", "error");
    } else {
        checkEmail(); // calling checkEmail function
    }
    if(pInput.value == "" || pInput.value.length <= "8") { // if password is empty
        pField.classList.add("shake", "error");
    }

    setTimeout(() => { //remove shake class after 500
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500)

    // let's work on input keyup
    eInput.onkeyup = () => {
        checkEmail(); // calling checkEmail function
    }
    
    // let's create a function
    function checkEmail() {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}/ //pattern to validate email
        if(!eInput.value.match(pattern)) { //if pattern not matched with user entered value
            eField.classList.add("error");

            let errorTxt = eField.querySelector(".errer-text");

            (eInput.value != "") ? errorTxt.innerText = "Enter a vaild email address" : errorTxt.innerText = "Email can't be blank";
        } else {
            eField.classList.remove("error");
        }
    }


    pInput.onkeyup = () => {
        if(pInput.value == "" || pInput.value.length <= "8") { //if pattern not matched with user entered value
            pField.classList.add("error");
        } else {
            pField.classList.remove("error");
        }
    }
    
    // let work on what to do after user filled up proper details
    if(!eField.classList.contains("error") && !pField.classList.contains("error")) {
        window.location.href = "#";
        console.log("form submit");
    }
}