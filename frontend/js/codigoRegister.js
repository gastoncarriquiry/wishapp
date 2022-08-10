//ARRAYS
let paises = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

//DEFINICIONES
let selectPaises = document.querySelector("#inp_pais");
let inputMail = document.querySelector("#inp_mail");
let inputPass = document.querySelector("#inp_pwd");
let inputPassConfirm = document.querySelector("#inp_confirm");
let btn_lnkLogin = document.querySelector("#lnkLogin");
let btnRegistrar = document.querySelector("#btn_register");
let estadoMail = false;
let estadoPais = false;
let estadoPass = false;
let estadoPassConfirm = false;

//SELECT PAISES
paises.forEach(pais => {
    selectPaises.insertAdjacentHTML("beforeend", `<option value="${pais}">${pais}</option>`)
})

//VALIDACIÓN CAMPOS
const validarCampos = () => {
    validarMail();
    validarSelect();
    validarPass();
    confirmarPass();

    if (estadoMail === false) {
        alertify.warning("Correo inválido");
    }
    if (estadoPais === false) {
        alertify.warning("Seleccione un país");
    }
    if (estadoPass === false) {
        alertify.warning("Contraseña inválida");
    }
    if (estadoPassConfirm === false) {
        alertify.warning("Las contraseñas no coinciden");
    }

    if (estadoMail === true && estadoPais === true && estadoPass === true && estadoPassConfirm === true) {
        registrarUsuario();
    }
}

const validarMail = () => {
    let mail = inputMail.value;

    if (isNaN(mail)) {
        if (mail.indexOf("@") === -1) {
            inputMail.style.border = "3px solid #f03765";
            estadoMail = false;
        }
        else if (mail.indexOf(".", mail.indexOf("@")) === -1) {
            inputMail.style.border = "3px solid #f03765";
            estadoMail = false;
        } else if (mail.charAt(mail.length - 1) === ".") {
            inputMail.style.border = "3px solid #f03765";
            estadoMail = false;
        } else {
            inputMail.style.border = "3px solid #2D46B9";
            estadoMail = true;
        }
    } else if (mail === "") {
        inputMail.style.border = "3px solid #f03765";
        estadoMail = false;
    } else {
        inputMail.style.border = "3px solid #f03765";
        estadoMail = false;
    }

    return estadoMail;
}

const validarSelect = () => {
    let selectVal = selectPaises.value;

    if (selectVal === "") {
        estadoPais = false;
        selectPaises.style.border = "3px solid #f03765";
    } else {
        estadoPais = true;
        selectPaises.style.border = "3px solid #2D46B9";
    }

    return estadoPais;
}

const validarPass = () => {
    let pass = inputPass.value;

    if (pass === "") {
        inputPass.style.border = "3px solid #f03765";
        estadoPass = false;
    } else if (pass.length < 8) {
        inputPass.style.border = "3px solid #f03765";
        estadoPass = false;
    }
    else {
        inputPass.style.border = "3px solid #2D46B9";
        estadoPass = true;
    }

    return estadoPass;
}

const confirmarPass = () => {
    let pass = inputPass.value;
    let passConfirm = inputPassConfirm.value;

    if (pass === passConfirm && pass != "") {
        estadoPassConfirm = true;
        inputPassConfirm.style.border = "3px solid #2D46B9";
    } else {
        inputPassConfirm.style.border = "3px solid #f03765";
        estadoPassConfirm = false;
    }

    return estadoPassConfirm;
}

//REGISTRO DE USUARIO
const registrarUsuario = () => {
    let _mail = inputMail.value;
    let _pais = selectPaises.value;
    let _pass = inputPass.value;

    fetch(URLBase + "/registro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mail: _mail,
            pais: _pais,
            pass: _pass
        })
    })
        .then(r => r.json())
        .then(nuevoUsuario => {
            if (nuevoUsuario.codigo === 400) {
                alertify.alert(nuevoUsuario.mensaje);
            } else if (nuevoUsuario.codigo === 404) {
                alertify.alert(nuevoUsuario.mensaje);
            } else {
                console.log(nuevoUsuario);
                localStorage.setItem("id", nuevoUsuario._id);
                id = localStorage.getItem("id");
                getWishes();
                tiendas = [];

                let sectionRegistro = document.querySelector("#registro");
                let sectionMain = document.querySelector("#index");
                sectionRegistro.style.display = "none";
                sectionMain.style.display = "grid";
                alertify.success("REGISTRO EXITOSO");
            }
        })
}

//IR A LOGIN
const goLogin = () => {
    let sectionRegistro = document.querySelector("#registro");
    let sectionLogin = document.querySelector("#login");

    sectionLogin.style.display = "block";
    sectionRegistro.style.display = "none";
}

//EVENTOS
inputMail.addEventListener("keyup", validarMail);
inputPass.addEventListener("keyup", validarPass);
inputPassConfirm.addEventListener("keyup", confirmarPass);
selectPaises.addEventListener("change", validarSelect)
btn_lnkLogin.addEventListener("click", goLogin);
btnRegistrar.addEventListener("click", validarCampos);