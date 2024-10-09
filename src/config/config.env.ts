import dotenv from "dotenv";
import Joi from "joi";

// Load environment variables from .env file
dotenv.config();

const envVarsSchema = Joi.object({
  APP_URL: Joi.string().required(),
  NODE_ENV: Joi.string().required(),
  NODE_VERSION: Joi.string().default("18.17.1"),
  PORT: Joi.number().default(5000),
  DATABASE_URL: Joi.string().required(),
})
  .unknown()
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const config = {
  appUrl: envVars.APP_URL,
  nodeEnv: envVars.NODE_ENV,
  nodeVersion: envVars.NODE_VERSION,
  port: envVars.PORT,
  databaseUrl: envVars.DATABASE_URL,
};
