import { Router } from "express";
import {
  cancelarCita,
  citas,
  citasCliente,
  clientes,
  editarEmpleados,
  eliminarClientes,
  eliminarEmpleados,
  eliminarServicios,
  empleados,
  empleadosID,
  horariosCitas,
  informacionCliente,
  infromesGuardar,
  insertarServicios,
  login,
  login1,
  obtenerPDFDesdeBaseDeDatos,
  recuperarContrasenia,
  registroEmpleados,
  registroUsuario,
  reservaCita,
  seleccionarEmpleado,
  seleccionarInformes,
  servicios,
  usuarios,
  validar,
} from "../controllers/citas.controller.js";
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = Router();

router.get("/citas", citas);
router.get("/clientes", clientes);
router.get("/horariosCitas", horariosCitas);
router.get("/servicioOfrecido", servicios);
router.get("/login", login1);
router.get("/usuarios", usuarios);
router.get("/seleccionarInforme", seleccionarInformes);
router.get("/obtenerInforme", obtenerPDFDesdeBaseDeDatos);
router.get("/empleados", empleados);
router.get("/seleccionarEmpleado", seleccionarEmpleado);

router.post("/citasCliente", citasCliente);
router.post("/informacionCliente", informacionCliente);
router.post("/informacionEmpleados", empleadosID);
router.post("/validar", validar);
router.post("/insertarServicios", insertarServicios);
router.post("/login", login);
router.post("/registroEmpleado", registroEmpleados);
router.post("/registroUsuario", registroUsuario);
router.post("/reservaCita", reservaCita);
router.post("/recuperarContrasenia", recuperarContrasenia);
router.post("/guardarInforme/:idCita", upload.single("pdf"), infromesGuardar);
router.put("/editarEmpleado", editarEmpleados);
router.delete("/eliminarClientes/:ClienteID", eliminarClientes);
router.delete("/eliminarServicios/:ServicioID", eliminarServicios);
router.delete("/eliminarEmpleado/:EmpleadoID", eliminarEmpleados);
router.delete("/cancelarCita/:CitaID", cancelarCita);
export default router;
