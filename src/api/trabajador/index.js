const trabajador = require("../../src/api/trabajador");
const app = express();
const bodyParser = require("body-parser");
const {upload} = require('../../middlewares/File');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res) => trabajador.trabajador(req,res));

app.get("/",(req,res) => trabajador.id(req,res));

app.post("/",upload.single('file'), async (req, res) => {
    let data = req.body;
  
   data.profile_picture = 'localhost:4000/'+req.file.path;
   console.log(req.file);
    const trabajador = await trabajador.create(data);
  
    res.json(trabajador);
  });

  app.get("/",(req,res) => clientes.clientes(req,res));

send = function(req, res) { 
    req.send(res.locals.content);
};

app.put('api/asignar_proyecto/:trabajador_id/:proyecto_id', function(res,req) {
    res.send('proyecto asignado');
}, send);