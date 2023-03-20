import Joi from "joi-browser";

function validateProperty({ name, value }, schema) {
  const obj = { [name]: value };
  const tempschema = { [name]: schema[name] };
  const { error } = Joi.validate(obj, tempschema);
  return error ? error.details[0].message : null;
}

function validate(data, schema) {
  const options = { abortEarly: false };
  const { error } = Joi.validate(data, schema, options);
  if (!error) return null;

  const errors = {};
  for (let item of error.details) errors[item.path[0]] = item.message;
  return errors;
}

export { validate, validateProperty };
