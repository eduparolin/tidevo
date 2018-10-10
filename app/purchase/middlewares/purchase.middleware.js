const validateJsonSchema = require('jsonschema').validate;
const CommonError = require('../../common/services/common.error.js');
const schemaPost = {
    "type": "object",
    "properties": {
        "url": {"type": "string"},
        "tidevoId": {"type": "string"}
    },
    "required": [
        "tidevoId"
    ],
    "additionalProperties": true
};

exports.validateRequest = (req, res, next) => {
    req.body = req.body || {};
    let result = validateJsonSchema(req.body, schemaPost);
    if (result.valid) {
        next();
    } else {
        let errors = {
            description: result.errors[0].message,
            type: 'INPUT_VALIDATION',
            field: result.errors[0].argument
        };
        let err = new CommonError(400, 'INVALID_PARAMETERS', req.reqId, 'Invalid Parameters', errors);
        res.send(400, err);
    }
};