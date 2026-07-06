function login() {
    user = document.getElementById('email').value;
    password = document.getElementById('password').value;

    if (user == "dipi@gmail.com" && password == 1234) {
        window.alert("Successfully connected!");
        window.open("https://www.google.com", "_blank");


    } else {
        window.alert("Not connected😔");
    }
}
