const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
 event.preventDefault();
    isValidName ()
    isValidPassword ()
 alert("CADASTRADO COM SUCESSO")
})



function isValidName () {
    let name = document.getElementById("nameOrgan").value;
    name = name.trim();
    if (name != "" && name.length >=8 && name.length <=25 ) {
        const validName = name
        return true
    } else {
        msgError( "nameOrgan" , "O nome deve ter mais de 8 caracteres")
        return false
    }
}
//mensagem de erro

function isValidPassword () {
    let password = document.getElementById("passwordOrgan").value;
    let confirmPassword = document.getElementById("ConfirmPasswordOrgan").value;
    if (password == confirmPassword && password.length >=8 && password.length <=25) {
        const validPassword = password;
        return true
    } else {
        msgError(password , "As senhas devem ter mais de 8 caracteres e serem identicas")
        return false
    }
}

function msgError (input , message) {
    const formItem = input.parentElement;
    const  textMsg = formItem.querySelector("p")
    
    textMsg.innerHTML = message;
    formItem.className = "error";
    textMsg.style.display = "block";
}