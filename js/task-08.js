const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const {
        email: { value: mailUser },
        password: {value: passwordUser},
    } = loginForm.elements;

    const infoUser = { email: mailUser, password: passwordUser };

    if (mailUser === "" || passwordUser === "") {
        alert("Todos los espacios deben ser llenados")
        return;
    }
    console.log(infoUser);
    e.currentTarget.reset();
});