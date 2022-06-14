function validateEmail() {
    var email = document.querySelector(".email>input").value;
    const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regex_pattern.test(email)) {
        document.querySelector(".error-text").classList.remove("invalid-email");
        document.querySelector(".error-icon").classList.remove("invalid-email");
    } else {
        document.querySelector(".error-text").classList.add("invalid-email");
        document.querySelector(".error-icon").classList.add("invalid-email");
    }
}