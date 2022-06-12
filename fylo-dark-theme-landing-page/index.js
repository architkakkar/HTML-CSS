
function validateEmail() {
    var email = document.querySelector(".signup-card>form>input").value;
    const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regex_pattern.test(email)) {
        document.querySelector(".invalid-email-text").classList.remove("negative-result");
    } else {
        document.querySelector(".invalid-email-text").classList.add("negative-result");
    }
}