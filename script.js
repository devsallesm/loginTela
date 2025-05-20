// add o form
const form = document.getElementById("form");

//add o event listener no form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  isValidName();
  isValidPassword();
  alert("CADASTRADO COM SUCESSO");
});


// pegando os inputs
const name = document.getElementById("nameOrgan").value;
const password = document.getElementById("passwordOrgan").value;
const confirmPassword = document.getElementById("ConfirmPasswordOrgan").value;


//validando os dados
function isValidName() {
  let name = document.getElementById("nameOrgan").value;
  name = name.trim();
  if (name != "" && name.length >= 8 && name.length <= 25) {
    const validName = name;
    return true;
  } else {
    msgError("nameOrgan", "O nome deve ter mais de 8 caracteres");
    return false;
  }
}

function isValidPassword() {
  let password = document.getElementById("passwordOrgan").value;
  let confirmPassword = document.getElementById("ConfirmPasswordOrgan").value;
  if (
    password == confirmPassword &&
    password.length >= 8 &&
    password.length <= 25
  ) {
    const validPassword = password;
    return true;
  } else {
    msgError(
      (passwordOrgan,confirmPasswordOrgan),
      "As senhas devem ter mais de 8 caracteres e serem identicas"
    );
    return false;
  }
}

function msgError(input, message) {
  const formItem = input.parentElement;
  const textMsg = formItem.querySelector("p");

  textMsg.innerHTML = message;
  formItem.className = "error";
  textMsg.style.display = "block";
}





const info = {
  nome:name
};

const infoJSON = JSON.stringify();
