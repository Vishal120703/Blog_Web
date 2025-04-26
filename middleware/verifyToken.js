const jwt = require('jsonwebtoken');

exports.verifyTokens = (req, res, next) => {
    const token = req.cookies.token; 
    if (!token) {
        return res.redirect("/user/login");
    }

    try {
        const decoded = jwt.verify(token, "vishal@120703");
        req.user = decoded; 
        console.log("sab thik hai bhai");
        next();
    } catch (error) {
        console.error(error);
        res.redirect("/user/login");
    }
}
