const mongoose = require("mongoose");

const decisionSchema = new mongoose.Schema({
  apto_venta: { type: Boolean },
  empaque_origina: { type: Boolean },
  importado: { type: Boolean },
  origen: { type: String },
  prmite_devolver: { type: Boolean },
  prov_haier: { type: Boolean },
  reparable: { type: Boolean },
  req_descto: { type: Boolean },
  solucion: { type: String },
});
const DecisionModel = mongoose.model("desiciones", decisionSchema);
module.exports = DecisionModel;