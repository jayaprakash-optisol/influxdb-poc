import Joi, { ObjectSchema } from 'joi';
import Logging from '../library/Logging';
import { Request, Response, NextFunction } from 'express';

export interface IUser {
  username: string;
  password: string;
}

export const ValidateSchema = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      Logging.error(error);
      return res.status(422).json({ error });
    }
  };
};

export const Schemas = {
  user: {
    register: Joi.object<IUser>({
      username: Joi.string().required(),
      password: Joi.string().required(),
    }),
  },
};
