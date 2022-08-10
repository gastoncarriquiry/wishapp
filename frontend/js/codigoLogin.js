const URLBase = "http://localhost:3000";

//DEFINICIONES
let inputMailL = document.querySelector("#inp_mailL");
let inputPassL = document.querySelector("#inp_pwdL");

let form = document.querySelector("#ingresoWish");
let form2 = document.querySelector("#modificarWish");
let backdrop = document.querySelector("#backdrop");

let btnLogin = document.querySelector("#btn_login");
let btn_lnkRegistro = document.querySelector("#lnkRegistro");
let btn_wish = document.querySelector("#btn_wish");
let btn_close = document.querySelector("#close");
let btn_ingresarWish = document.querySelector("#btn_ingresarWish");
let btn_close2 = document.querySelector("#close2");
let btn_cerrarSesion = document.querySelector("#cerrarSesion");

let arrayDeseos = [];

let id;

let selectCategoria = document.querySelector("#selectCategoria");
let selectColor = document.querySelector("#selectColor");
let inputTituloDIV = document.querySelector("#titulo");
let inputTitulo = document.querySelector("#inp_titulo");
let inputColorDIV = document.querySelector("#color");
let inputColor = document.querySelector("#selectColor");
let inputCategoriaDIV = document.querySelector("#categoria");
let inputCategoria = document.querySelector("#selectCategoria");
let inputMarcaDIV = document.querySelector("#marca");
let inputMarca = document.querySelector("#inp_marca");
let inputModeloDIV = document.querySelector("#modelo");
let inputModelo = document.querySelector("#inp_modelo");
let inputTalleDIV = document.querySelector("#talle");
let inputTalle = document.querySelector("#inp_talle");
let inputPrecioDIV = document.querySelector("#precio");
let inputPrecio = document.querySelector("#inp_precio");
let inputTiendaDIV = document.querySelector("#tienda");
let inputTienda = document.querySelector("#inp_tienda");
let inputLinkDIV = document.querySelector("#link");
let inputLink = document.querySelector("#inp_link");

let contLista = document.querySelector("#listaDIV");

let btn_reset = document.querySelector("#btn_reset");
let inputKeyword = document.querySelector("#filtroKeyword");
let inputFiltroPrecio = document.querySelector("#filtroPrecio");
let inputFiltroCategoria = document.querySelector("#filtroCategoria");
let inputFiltroTienda = document.querySelector("#filtroTienda");
inputKeyword.value = "";
inputFiltroPrecio.value = "LtoH";
inputFiltroCategoria.value = "";
inputFiltroTienda.value = "";

let categorias = [
    {
        nombre: "Belleza y cuidado personal",
        value: "belleza"
    },
    {
        nombre: "Computadoras y electrónicos",
        value: "comp"
    },
    {
        nombre: "Electrodomésticos",
        value: "electro"
    },
    {
        nombre: "Ropa",
        value: "ropa"
    },
    {
        nombre: "Herramientas",
        value: "herramientas"
    },
    {
        nombre: "Juguetes y juegos",
        value: "juegos"
    },
]
let colores = [
    {
        nombre: "No especificar",
        hex: "transparent"
    },
    {
        nombre: "Rojo",
        hex: "#FF0000"
    },
    {
        nombre: "Marrón",
        hex: "#800000"
    },
    {
        nombre: "Amarillo",
        hex: "#FFFF00"
    },
    {
        nombre: "Lima",
        hex: "#00FF00"
    },
    {
        nombre: "Verde",
        hex: "#008000"
    },
    {
        nombre: "Azul",
        hex: "#0000FF"
    },
    {
        nombre: "Azul Oscuro",
        hex: "#000080"
    },
    {
        nombre: "Fucsia",
        hex: "#FF00FF"
    },
    {
        nombre: "Violeta",
        hex: "#800080"
    },
    {
        nombre: "Negro",
        hex: "#000000"
    },
    {
        nombre: "Blanco",
        hex: "#FFFFFF"
    },
    {
        nombre: "Plateado",
        hex: "#C0C0C0"
    },
    {
        nombre: "Gris",
        hex: "#808080"
    },
    {
        nombre: "Salmón",
        hex: "#FA8072"
    }
];
let tiendas = [];

//LISTAR ARTICULOS
const listarArticulos = (array) => {
    contLista.innerHTML = "";

    console.log(array);
    array.forEach(articulo => {
        console.log('HOLA');
        let categoria;
        switch (articulo.categoria) {
            case "belleza":
                categoria = "Belleza y cuidado personal";
                break;
            case "comp":
                categoria = "Computadoras y electrónicos";
                break;
            case "electro":
                categoria = "Electrodomésticos";
                break;
            case "herramientas":
                categoria = "Herramientas";
                break;
            case "juegos":
                categoria = "Juguetes y juegos";
                break;
            case "ropa":
                categoria = "Ropa";
                break;
        }

        if (articulo.categoria === "belleza" || articulo.categoria === "comp" || articulo.categoria === "electro" || articulo.categoria === "herramientas" || articulo.categoria === "juegos") {
            contLista.innerHTML += `
            <article class="wish">
                <div class="info">
                    <img src="assets/${articulo.categoria}.png" alt="Imagen de ${articulo.titulo}">
                    <div class="info-vert">
                        <h2>${articulo.titulo}</h2>
                        <h3>${categoria}</h3>
                        <h3>USD ${articulo.precio}</h3>
                        <div class="info-hor">
                            <p>${articulo.marca}</p>
                            <p>${articulo.modelo}</p>
                            <p class="color" style="background-color: ${articulo.color};"></p>
                        </div>
                        <h3 id="logoTienda">${articulo.tienda}</h3>
                    </div>
                </div>
                <div class="botones">
                    <a class="btn_articulo link" title="VER PRODUCTO" href="${articulo.link}" target="_blank"><img src="assets/externalLink.png" alt="Visitar artículo"></a>
                    <input type="button" value="EDITAR" class="btn_articulo modificar" data-id="${articulo._id}" data-titulo="${articulo.titulo}" data-precio="${articulo.precio}" data-tienda="${articulo.tienda}" data-link="${articulo.link}">
                    <input type="button" value="ELIMINAR" class="btn_articulo eliminar" data-id="${articulo._id}">
                </div>
            </article>
            `
        } else {
            contLista.innerHTML += `
            <article class="wish">
                <div class="info">
                    <img src="assets/${articulo.categoria}.png" alt="Imagen de producto">
                    <div class="info-vert">
                        <h2>${articulo.titulo}</h2>
                        <h3>${categoria}</h3>
                        <h3>USD ${articulo.precio}</h3>
                        <div class="info-hor">
                            <p>Talle ${articulo.talle}</p>
                            <p class="color" style="background-color: ${articulo.color};"></p>
                        </div>
                        <h3 id="logoTienda">${articulo.tienda}</h3>
                    </div>
                </div>
                <div class="botones">
                    <a class="btn_articulo link" title="VER PRODUCTO" href="${articulo.link}" target="_blank"><img src="assets/externalLink.png" alt="Visitar artículo"></a>
                    <input type="button" value="EDITAR" class="btn_articulo modificar" data-id="${articulo._id}" data-titulo="${articulo.titulo}" data-precio="${articulo.precio}" data-tienda="${articulo.tienda}" data-link="${articulo.link}">
                    <input type="button" value="ELIMINAR" class="btn_articulo eliminar" data-id="${articulo._id}">
                </div>
            </article>
            `
        }
    });

    let botonesEliminar = document.querySelectorAll(".eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", deleteWishes);
    });

    let botonesModificar = document.querySelectorAll(".modificar");
    botonesModificar.forEach(boton => {
        boton.addEventListener("click", editWishes);
    });
}

//SELECTS
categorias.forEach(categoria => {
    selectCategoria.insertAdjacentHTML("beforeend", `<option value="${categoria.value}">${categoria.nombre}</option>`);
    inputFiltroCategoria.insertAdjacentHTML("beforeend", `<option value="${categoria.value}">${categoria.nombre}</option>`);
})
colores.forEach(color => {
    selectColor.insertAdjacentHTML("beforeend", `<option value="${color.hex}">${color.nombre}</option>`);
})
const cargarFiltroTienda = () => {
    inputFiltroTienda.innerHTML = `
        <option selected hidden value="">Seleccione la tienda deseada</option>
        <option disabled value="disabled">--Seleccione la tienda deseada--</option>
        <option value="todas">Todas las tiendas</option>
    `;

    arrayDeseos.forEach(articulo => {
        if (tiendas.indexOf(articulo.tienda) === -1) {
            tiendas.push(articulo.tienda);
        }
    });
    tiendas.forEach(tienda => {
        inputFiltroTienda.insertAdjacentHTML("beforeend", `
        <option value="${tienda}">${tienda}</option>`);
    });
}

//LOGIN
const doLogin = () => {
    let _mail = inputMailL.value;
    let _pass = inputPassL.value;

    fetch(URLBase + "/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mail: _mail,
            pass: _pass
        })
    })
        .then(r => r.json())
        .then(usuario => {
            console.log(usuario);
            if (usuario.codigo === 401) {
                inputMailL.style.border = "3px solid #f03765";
                inputPassL.style.border = "3px solid #f03765";
                alertify.alert(usuario.mensaje);
            } else {
                contLista.innerHTML = "";
                localStorage.setItem("id", usuario._id);
                id = localStorage.getItem("id");
                console.log(id);
                getWishes();
                tiendas = [];

                inputMailL.style.border = "3px solid #2D46B9";
                inputPassL.style.border = "3px solid #2D46B9";
                let sectionLogin = document.querySelector("#login");
                let sectionMain = document.querySelector("#index");
                sectionLogin.style.display = "none";
                sectionMain.style.display = "grid";
                alertify.success("INICIO DE SESIÓN EXITOSO");
            }
        });

}

//LEVANTAR LISTA DE DESEOS POR USUARIO
const getWishes = () => {
    fetch(URLBase + "/deseos", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(r => r.json())
        .then(deseos => {
            console.log(deseos);
            if (deseos.codigo === 200) {
                arrayDeseos = deseos.response;
                console.log(arrayDeseos);
            }

            if (deseos.codigo === 400) {
                contLista.innerHTML = `<h2 class="empty">${deseos.mensaje}</h2>`
            } else if (deseos.codigo === 404) {
                alertify.alert(deseos.mensaje);
            } else {
                listarArticulos(arrayDeseos);
                cargarFiltroTienda();
            }
        })
}

//AGREGAR ARTICULO A LA LISTA DE DESEOS
const postWishes = () => {
    if (inputTitulo.value != "" && selectCategoria.value != "" && inputPrecio.value != "" && inputTienda.value != "" && inputLink.value != "") {
        fetch(URLBase + "/postDeseo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id,
                titulo: inputTitulo.value,
                categoria: selectCategoria.value,
                color: selectColor.value,
                marca: inputMarca.value,
                modelo: inputModelo.value,
                talle: inputTalle.value,
                precio: inputPrecio.value,
                tienda: inputTienda.value,
                link: inputLink.value
            })
        })
            .then(r => r.json())
            .then(deseo => {
                console.log(deseo);
                if (deseo.codigo === 400) {
                    alertify.alert(deseo.mensaje);
                } else if (deseo.codigo === 404) {
                    alertify.alert(deseo.mensaje);
                } else {
                    form.style.display = "none";
                    backdrop.style.display = "none";
                    console.log(arrayDeseos);
                    arrayDeseos.push(deseo);
                    listarArticulos(arrayDeseos);
                }
            });
    } else {
        alertify.alert("Rellene todos los campos obligatorios (*) por favor.")
    }
}

//BORRAR ARTICULOS
const deleteWishes = (evt) => {
    let idEliminar = evt.target.getAttribute("data-id");
    let confirmacion = confirm("¿Está seguro desea eliminar el artículo?");

    //QUISE HACERLO SIGUIENDO EL ESTILO DE LAS ALERTAS PERO NO ME TOMA EL BOTÓN DE OK PARA CAMBIAR EL VALOR DE LA VARIABLE CONFIRMACION Y ASÍ EJECUTAR LA ELIMINACIÓN
    // let confirmacion = false;
    // alertify.confirm('CONFIRMAR', '¿Está seguro desea eliminar el artículo?', function () { confirmacion = true; alertify.succes("Artículo Eliminado"); }, function () { alertify.error('Artículo No Eliminado'); });

    if (confirmacion === true) {
        fetch(URLBase + "/deseos/" + idEliminar, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(r => r.json())
            .then(articuloEliminado => {
                if (articuloEliminado.codigo === 404) {
                    alertify.alert(articuloEliminado.mensaje);
                } else {
                    alertify.success('Artículo Eliminado');
                    console.log(articuloEliminado)
                    let idEliminado = articuloEliminado._id;
                    arrayDeseos = arrayDeseos.filter(articulo => articulo._id != idEliminado);
                    listarArticulos(arrayDeseos);
                }
            });
    } else {
        alertify.error('Artículo No Eliminado');
    }
}

//EDITAR ARTICULOS
const editWishes = (evt) => {
    document.querySelector("#modificarWish").style.display = "block";
    backdrop.style.display = "block";
    document.querySelector("#modificador").innerHTML = "";
    let idModificar = evt.target.getAttribute("data-id");
    let tituloART = evt.target.getAttribute("data-titulo");
    let precioART = evt.target.getAttribute("data-precio");
    let tiendaART = evt.target.getAttribute("data-tienda");
    let linkART = evt.target.getAttribute("data-link");

    document.querySelector("#modificador").innerHTML = `
    <label for="mod_titulo">Título del producto:</label> <br>
    <input type="text" placeholder="Modificar título" id="mod_titulo" value="${tituloART}">

    <label for="mod_precio">Precio:</label><br>
    <input type="number" id="mod_precio" placeholder="(USD) Modificar precio" value="${precioART}">

    <label for="mod_tienda">Tienda:</label><br>
    <input type="text" id="mod_tienda" placeholder="Modificar tienda" value="${tiendaART}">

    <label for="mod_link">URL de Referencia:</label><br>
    <input type="url" id="mod_link" placeholder="Modificar el link del producto" value="${linkART}">
    `;

    let btn_modificarWish = document.querySelector("#btn_modificarWish");
    btn_modificarWish.addEventListener("click", () => {
        let _titulo = document.querySelector("#mod_titulo").value;
        let _precio = document.querySelector("#mod_precio").value;
        let _tienda = document.querySelector("#mod_tienda").value;
        let _link = document.querySelector("#mod_link").value;
        fetch(URLBase + "/deseos/" + idModificar, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                titulo: _titulo,
                precio: _precio,
                tienda: _tienda,
                link: _link
            })
        })
            .then(r => r.json())
            .then(articuloModificado => {
                if (articuloModificado.codigo === 404) {
                    alertify.alert(articuloModificado.mensaje);
                } else {
                    form2.style.display = "none";
                    backdrop.style.display = "none";
                    console.log(articuloModificado);
                    getWishes();
                }
            })
    })
}

//IR A REGISTRO
const goRegistro = () => {
    let sectionRegistro = document.querySelector("#registro");
    let sectionLogin = document.querySelector("#login");

    sectionLogin.style.display = "none";
    sectionRegistro.style.display = "block";
}

//DESPLEGAR FORM PARA AGREGAR WISH
const openForm = () => {
    inputColorDIV.style.display = "none";
    inputCategoriaDIV.style.display = "none";
    inputMarcaDIV.style.display = "none";
    inputModeloDIV.style.display = "none";
    inputTalleDIV.style.display = "none";
    inputPrecioDIV.style.display = "none";
    inputTiendaDIV.style.display = "none";
    inputLinkDIV.style.display = "none";
    form.style.display = "block";
    backdrop.style.display = "block";

    inputTitulo.value = "";
    inputColor.value = "";
    inputCategoria.value = "";
    inputMarca.value = "";
    inputModelo.value = "";
    inputTalle.value = "";
    inputPrecio.value = "";
    inputTienda.value = "";
    inputLink.value = "";

    inputTitulo.addEventListener("keyup", () => { inputColorDIV.style.display = "block"; inputCategoriaDIV.style.display = "block"; });
    inputCategoria.addEventListener("change", () => {
        if (inputCategoria.value === "belleza" || inputCategoria.value === "comp" || inputCategoria.value === "electro" || inputCategoria.value === "herramnientas" || inputCategoria.value === "juegos") {
            inputMarcaDIV.style.display = "block";
            inputModeloDIV.style.display = "block";
            inputTalleDIV.style.display = "none";
        } else {
            inputMarcaDIV.style.display = "none";
            inputModeloDIV.style.display = "none";
            inputTalleDIV.style.display = "block";
        }
    });
    inputMarca.addEventListener("keyup", () => { inputPrecioDIV.style.display = "block"; });
    inputTalle.addEventListener("keyup", () => { inputPrecioDIV.style.display = "block"; });
    inputPrecio.addEventListener("keyup", () => { inputTiendaDIV.style.display = "block"; });
    inputTienda.addEventListener("keyup", () => { inputLinkDIV.style.display = "block"; });
}

//CERRAR FORM
const closeForm = () => {
    form.style.display = "none";
    backdrop.style.display = "none";
}
const closeForm2 = () => {
    form2.style.display = "none";
    backdrop.style.display = "none";
}

//FILTROS
const filtroTienda = () => {
    contLista.innerHTML = "";
    let tienda = inputFiltroTienda.value;
    if (tienda === "todas") {
        listarArticulos(arrayDeseos);
    } else {
        let articulosFiltrados = arrayDeseos.filter(articulo => articulo.tienda === tienda);
        listarArticulos(articulosFiltrados);
    }

}
const filtroCategoria = () => {
    contLista.innerHTML = "";
    let categoria = inputFiltroCategoria.value;
    if (categoria === "todos") {
        listarArticulos(arrayDeseos);
    } else {
        let articulosFiltrados = arrayDeseos.filter(articulo => articulo.categoria === categoria);
        listarArticulos(articulosFiltrados);
    }
}
const filtroPrecio = () => {
    if (inputFiltroPrecio.value === "LtoH") {
        arrayDeseos.sort(function (a, b) {
            if (a.precio > b.precio) {
                return 1;
            }
            if (a.precio < b.precio) {
                return -1;
            }
            return 0;
        });
    } else {
        arrayDeseos.sort(function (a, b) {
            if (a.precio > b.precio) {
                return -1;
            }
            if (a.precio < b.precio) {
                return 1;
            }
            return 0;
        });
    }

    listarArticulos(arrayDeseos);
}
const filtroKeyword = () => {
    contLista.innerHTML = "";
    let keyword = document.querySelector("#filtroKeyword").value.toLowerCase();
    let articulosFiltrados = arrayDeseos.filter((articulo) => {
        let tituloArticulo = articulo.titulo.toLowerCase();
        if (tituloArticulo.includes(keyword) === true) {
            return articulo;
        }
    })
    listarArticulos(articulosFiltrados);
}
const resetFiltros = () => {
    inputKeyword.value = "";
    inputFiltroPrecio.value = "LtoH";
    inputFiltroCategoria.value = "";
    inputFiltroTienda.value = "";

    listarArticulos(arrayDeseos);
}

//CERRAR SESIÓN
const cerrarSesion = () => {
    id = "";
    arrayDeseos = [];
    contLista.innerHTML = "";

    let sectionLogin = document.querySelector("#login");
    let sectionMain = document.querySelector("#index");
    sectionLogin.style.display = "block";
    sectionMain.style.display = "none";
    alertify.success("CIERRE DE SESIÓN EXITOSO");
}

//EVENTOS
btnLogin.addEventListener("click", doLogin);
btn_lnkRegistro.addEventListener("click", goRegistro);
btn_wish.addEventListener("click", openForm);
btn_ingresarWish.addEventListener("click", postWishes);
btn_close.addEventListener("click", closeForm);
backdrop.addEventListener("click", closeForm);
inputKeyword.addEventListener("keyup", filtroKeyword);
btn_reset.addEventListener("click", resetFiltros);
inputFiltroPrecio.addEventListener("change", filtroPrecio);
inputFiltroTienda.addEventListener("change", filtroTienda);
inputFiltroCategoria.addEventListener("change", filtroCategoria);
btn_close2.addEventListener("click", closeForm2);
backdrop.addEventListener("click", closeForm2);
btn_cerrarSesion.addEventListener("click", cerrarSesion);