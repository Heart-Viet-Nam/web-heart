import { check } from 'express-validator';
import { messageVietnamese } from '../../../utils/message';

//? CREATE DOCTOR PROFILE SCHEMA
export const doctorSchema = [
  check('campus').not().isEmpty().withMessage(messageVietnamese.ER001('Campus')),
  check('username')
    .not()
    .isEmpty()
    .withMessage(messageVietnamese.ER001('Username'))
    .bail()
    .custom((value) => {
      const maxCharacters: number = 10; //~ Notice
      const valueLength = value.length;
      if (valueLength > maxCharacters) {
        throw new Error(messageVietnamese.ER002A('Username', maxCharacters, valueLength));
      }
      return true;
    }),
  check('password').not().isEmpty().withMessage(messageVietnamese.ER001('Password'))
];

//? UPDATE DOCTOR PROFILE SCHEMA
export const updateDoctorSchema = [];
