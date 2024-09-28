const validate = (schema) => async (req, res, next) => {
    try {
        const parsedBody = await schema.parseAsync(req.body);
        req.body = parsedBody;
        next();
    } catch (err) {

        const status = 400;
        const message = "Fill the details properly";
        const extraDetails = err.errors ? err.errors[0].message : err.message;
       console.log(extraDetails);
        const error = {
            status,
            message,
            extraDetails,
        };
        next(error);
    }
};

export default validate;
