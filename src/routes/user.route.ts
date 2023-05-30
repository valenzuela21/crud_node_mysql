import * as userController from "../controllers/user.controller";
import {Router} from "express";
import {body, param} from "express-validator";
import {validateInputs} from "../middlewares/validate-inputs";
const router: Router = Router();

router.post("/", [
    body("fullName", "El nombre es requerido").not().isEmpty(),
    body("country", "El correo es obligatorio").not().isEmpty(),
    validateInputs
], userController.addUser );


router.get("/", userController.allUser);
router.patch("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.get("/:id", userController.findOneUser);

export default router;