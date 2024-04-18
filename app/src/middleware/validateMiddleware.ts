import { Request, Response, NextFunction } from "express";
import { ajv } from '../validators/ajvInstances';

export const validateSchema = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const validate = ajv.compile(schema);
    const valid = validate(req.body);
    if (!valid) {
      const errors = validate.errors.map((error: any) => {
        return {
          schemaPath: error.schemaPath,
          params: error.params,
          message: error.message
        };
      });
      return res.status(400).json({
        message: "Validation failed, please check your input.",
        errors: errors
      });
    }
    next();
  };
};