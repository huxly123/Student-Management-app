function authorize() {
    return (req, res, next) => {
        let allow = false
     
        if (req.user.role=="admin") {
          allow=true  
        }
        if (!allow) return res.status(400).send("you are not allowed");

        return next();
    }
}

module.exports =authorize