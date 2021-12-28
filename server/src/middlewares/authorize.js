function authorize() {
    return (req, res, next) => {
        let allow = false
        // res.send(req.body.role);
        if (req.body.role=="admin") {
          allow=true  
        }
        if (!allow) return res.status(400).send("you are not allowed");

        return next();
    }
}

module.exports =authorize