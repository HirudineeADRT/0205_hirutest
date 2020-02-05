const s3 = require('../../../jsfile')

exports.handler = async (event) => {
    s3.listObjects()
    return {"message": "Successfully executed"};
};