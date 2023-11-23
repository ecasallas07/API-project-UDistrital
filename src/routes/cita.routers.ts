import { Router } from "express"
import { createCita, deleteCita, getCitas, getOneCita, updateCita } from "../controllers/citas.controllers";

const router = Router();

router.get('/', getCitas)
router.get('/one', getOneCita)
router.post('/', createCita)
router.put('/:id', updateCita)
router.delete('/:id', deleteCita)

export default router;