let express = require("express");
let app = express();
require("dotenv").config();
let puerto = process.env.PORT || 3000;
let mongoose = require("mongoose");
let cors = require("cors");
let userDB = process.env.DB_USER;
let passDB = process.env.DB_PASS;
let userID;
let DBconnection = ``; //CONNECT YOUR MONGODB CLUSTER HERE

mongoose.connect(DBconnection);
let db = mongoose.connection;

db.once("open", () => console.log("Conexión a la base de datos exitosa"));

app.use(cors());
app.use(express.json());

app.use("/", express.static("frontend"));

let usuarioSchema = new mongoose.Schema({
  mail: String,
  pais: String,
  pass: String,
});

let Usuario = mongoose.model("Usuario", usuarioSchema);

let deseoSchema = new mongoose.Schema({
  id: String,
  titulo: String,
  categoria: String,
  color: String,
  marca: String,
  modelo: String,
  talle: String,
  precio: Number,
  tienda: String,
  link: String,
});

let deseo = mongoose.model("deseo", deseoSchema);

//LOGIN DE USUARIOS
app.post("/login", (req, res) => {
  Usuario.findOne(
    { mail: { $eq: req.body.mail }, pass: { $eq: req.body.pass } },
    (err, usuario) => {
      if (err) {
        res.json({ mensaje: "Error al iniciar sesión, inténtelo de nuevo.", codigo: 404 });
      } else if (usuario === null) {
        res.json({ mensaje: "Correo y/o contraseña incorrectas.", codigo: 401 });
      } else {
        res.json(usuario);
        userID = usuario._id;
      }
    }
  );
});

//REGISTRO DE USUARIO
app.post("/registro", (req, res) => {
  Usuario.findOne({ mail: { $eq: req.body.mail } }, (err, usuario) => {
    if (err) {
      res.json({ mensaje: "Error al registrar usuario, inténtelo de nuevo.", codigo: 404 });
    } else if (usuario === null) {
      let usuarioNuevo = new Usuario({
        mail: req.body.mail,
        pais: req.body.pais,
        pass: req.body.pass,
      });

      usuarioNuevo.save((err, usuarioRegistrado) => {
        if (err) {
          res.json({ mensaje: "Error al registrar usuario, inténtelo de nuevo.", codigo: 404 });
        } else {
          res.json(usuarioRegistrado);
          userID = usuarioRegistrado._id;
        }
      });
    } else {
      res.json({ mensaje: "El correo ingresado ya está registrado.", codigo: 400 });
    }
  });
});

//LEVANTAR DESEOS
app.get("/deseos", (req, res) => {
  deseo.find({ id: { $eq: userID } }, (err, deseos) => {
    if (err) {
      res.json({ mensaje: "Hubo un error al recuperar tu lista de deseos.", codigo: 404 });
    } else {
      if (deseos.length === 0) {
        res.json({ mensaje: "Tu lista de deseos está vacía :(", codigo: 400 });
      } else {
        res.json({ response: deseos, codigo: 200 });
      }
    }
  });
});

//REGISTRO DE DESEO
app.post("/postDeseo", (req, res) => {
  deseo.findOne(
    {
      titulo: { $eq: req.body.titulo },
      categoria: { $eq: req.body.categoria },
      color: { $eq: req.body.color },
      marca: { $eq: req.body.marca },
      modelo: { $eq: req.body.modelo },
      talle: { $eq: req.body.talle },
      precio: { $eq: req.body.precio },
      tienda: { $eq: req.body.tienda },
      link: { $eq: req.body.link },
    },
    (err, deseoEncontrado) => {
      if (err) {
        res.json({
          mensaje: "Error al ingresar el artículo, inténtelo de nuevo más tarde.",
          codigo: 404,
        });
      } else if (deseoEncontrado === null) {
        let nuevoDeseo = new deseo({
          id: req.body.id,
          titulo: req.body.titulo,
          categoria: req.body.categoria,
          color: req.body.color,
          marca: req.body.marca,
          modelo: req.body.modelo,
          talle: req.body.talle,
          precio: req.body.precio,
          tienda: req.body.tienda,
          link: req.body.link,
        });

        nuevoDeseo.save((err, deseoIngresado) => {
          if (err) {
            res.json({
              mensaje: "Error al ingresar el artículo, inténtelo de nuevo más tarde.",
              codigo: 404,
            });
          } else {
            res.json(deseoIngresado);
          }
        });
      } else {
        res.json({ mensaje: "Ese artículo ya está entre tus deseos.", codigo: 400 });
      }
    }
  );
});

//BORRAR DESEO
app.delete("/deseos/:idEliminar", (req, res) => {
  deseo.findByIdAndDelete(req.params.idEliminar, (err, deseoEliminado) => {
    if (err) {
      res.json({
        mensaje: "Error al eliminar el artículo, inténtelo de nuevo más tarde.",
        codigo: 404,
      });
    } else {
      res.json(deseoEliminado);
    }
  });
});

//EDITAR DESEO
app.put("/deseos/:idModificar", (req, res) => {
  deseo.findByIdAndUpdate(
    req.params.idModificar,
    {
      titulo: req.body.titulo,
      precio: req.body.precio,
      tienda: req.body.tienda,
      link: req.body.link,
    },
    (err, deseoModificado) => {
      if (err) {
        res.json({
          mensaje: "Error al modificar el artículo, inténtelo de nuevo más tarde.",
          codigo: 404,
        });
      } else {
        res.json(deseoModificado);
      }
    }
  );
});

//middleware de 404
app.use((req, res, next) => {
  res.statusCode = 404;
  res.json({ mensaje: "Error 404" });
});

app.listen(puerto, () => {
  console.log("Servidor ejecutado");
});
