const express = require("express");
const dbconnect = require("./config");
const DecisionModel = require("./decision.schema");
const app = express();

dbconnect();

const router = express.Router();

router.post("/", async (req, res) => {
  const body = req.body;

  body.apto_venta = body.apto_venta == "SI";
  body.empaque_original = body.empaque_original == "SI";
  body.req_descto = body.req_descto == "SI";
  body.prov_haier = body.prov_haier == "SI";
  body.prmite_devolver = body.prmite_devolver == "SI";
  body.reparable = body.reparable == "SI";
  body.importado = body.importado == "SI";
  body.solucion = body.solucion.toLowerCase();
  body.solucion = body.solucion.split(" ").join("_");
  body.origen = body.origen.toLowerCase();
  body.origen = body.origen.split(" ").join("_");

  const response = await DecisionModel.create(body);
  res.send({ response });
});

router.get("/", async (req, res) => {
  const body = req.body;
  const response = await DecisionModel.find({
    apto_venta: body.apto_venta,
    empaque_original: body.empaque_original,
    req_descto: body.req_descto,
    prov_haier: body.prov_haier,
    prmite_devolver: body.prmite_devolver,
    reparable: body.reparable,
    importado: body.importado,
  });
  res.send({ response });
});

app.use(express.json());
app.use(router);

app.listen(3001, () => {
  console.log("init");
});
