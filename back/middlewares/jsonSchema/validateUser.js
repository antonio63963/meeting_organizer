const Ajv = require("ajv");
const ajv = new Ajv();

const registration = (req, res, next) => {
  const schema = {
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "minLength": 1,
      },
      "email": {
        "type": "string",
        "pattern": "[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+",
      },
      "password": {
        "type": "string",
        "minLength": 3,
      },
      "country": {
        "type": "string",
        "minLength": 2,
        "maxLength": 255
      },
      "timezone": {
        "type": "string",
        "minLength": 2
      },
      "additionalProperties": false
    },
    required: ["name", "email", "password", "country", "timezone"],
    additionalProperties: false
  };
  const { email, password, name, timezone, country } = req.body;
  const forValid = { email, password, name, timezone, country };
  const validate = ajv.compile(schema);
  const valid = validate(forValid);
  console.log('===REGISTRATION VALID===', valid);
  
  if (!valid) console.log(validate.errors);
  console.log('REGISTR Schema: ----',req.body);
  if(valid) next();
};

const checklogin = (req, res, next) => {
  const schema = {
    "type": "object",
    "properties": {
      "email": {
        "type": "string",
        "pattern": "[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+",
      },
      "password": {
        "type": "string",
        "minLength": 3,
      },
        "additionalProperties": false
    },
    required: ["email", "password"],
    additionalProperties: false
  };
  const { email, password } = req.body;
  const validObj = {
    email, password
  }
  const validate = ajv.compile(schema);
  const valid = validate(validObj);
  console.log('===LOGIN VALID===', valid);
  if (!valid) console.log("VALID ERRORS: ", validate.errors);
  console.log('LOGIN Schema: ----',req.body);
  if(valid) next();
};

module.exports = {
  registration,
  checklogin
}