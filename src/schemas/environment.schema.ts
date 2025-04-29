import * as Joi from 'joi';

export const EnvironmentSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'staging')
    .required(),
  BASE_URL: Joi.string().uri().required(),
  PORT: Joi.number().integer().min(0).required(),
  CACHE_TTL: Joi.number().integer().min(0).required(),
  POSTGRES_HOST: Joi.string().hostname().required(),
  POSTGRES_PORT: Joi.number().integer().min(0).required(),
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_DB: Joi.string().required(),
  REDIS_HOST: Joi.string().hostname().required(),
  REDIS_PORT: Joi.number().integer().min(0).required(),
  REDIS_USERNAME: Joi.string().required(),
  REDIS_PASSWORD: Joi.string().required(),
  REDIS_TLS: Joi.boolean().required(),
  EMAIL_HOST: Joi.string().hostname().required(),
  EMAIL_PORT: Joi.number().integer().min(0).required(),
  EMAIL_IGNORE_TLS: Joi.boolean().required(),
  EMAIL_SECURE: Joi.boolean().required(),
  EMAIL_USERNAME: Joi.string().required(),
  EMAIL_PASSWORD: Joi.string().required(),
  EMAIL_DEFAULT_FROM: Joi.string().email().required(),
  EMAIL_DEFAULT_REPLY_TO: Joi.string().email().required(),
});
