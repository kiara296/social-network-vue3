const { check } = require("express-validator");
const path = require('path')
const mainService = require('../services/mainService');

const validations = [
    check("name").trim().notEmpty().withMessage("* Nombre requerido").isLength({min:5}).withMessage("* Debe tener al menos 5 caracteres"),
    check("lastname").trim().notEmpty().withMessage("* Apellido requerido").isLength({min:5}).withMessage("* Debe tener al menos 5 caracteres"),
    check("email").trim().notEmpty().withMessage("* Email requerido").bail().isEmail().withMessage("* Debes escribir un correo electrónico válido")
    .custom(async (email, {req}) => {
        const existingUser = await mainService.findByEmail(req.body.email)
        if (!existingUser) {
            return false
        } else {
            throw new Error('Direccion de correo ya registrado') 
        }
    }),
    check("password").trim().notEmpty().withMessage("* Contraseña requerida").bail().isLength({min:8}).withMessage("* Debe tener al menos 8 caracteres"),
    check("pass_confirm").trim().notEmpty().withMessage("* Debes repetir la contraseña").isLength({min:8, max:16}).withMessage("* Debe tener al menos 8 caracteres")
        .custom(async (pass_confirm, {req}) => {
        const password = req.body.password
        if(password !== pass_confirm){
            throw new Error('Las contraseñas deben ser las mismas')
          }
        }),
    check('profileImage').custom((value, { req }) => {
          let file = req.file;
          let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
    
          if (!file) {
              throw new Error('Tenes que subir una imagen');
          } else {
              let fileExtension = path.extname(file.originalname);
          if (!acceptedExtensions.includes(fileExtension)) {
              throw new Error(`El formato de la imagen no es valido, subir ${acceptedExtensions.join(', ')}`);
          }
      };
          return true;}),
    
]
  module.exports = validations;