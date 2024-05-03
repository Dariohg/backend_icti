import jwt from 'jsonwebtoken';

const secretJWT = process.env.JWT_SECRET || 'secret';

const verifyJWT = (req, res, next) => {
    try {
        console.log(req.get('Authorization'));

        const token = req.get('Authorization').split(' ')[1];
        
        jwt.verify(token, secretJWT, (err, decode) => {
            if (err) {
                return res.status(401).json({
                    message: "error al validar token",
                    error: err.message
                });
            }

            req.user = decode.user;
            next();
        });
    } catch (error) {
        return res.status(401).json({
            message: "error al validar token",
            error: error.message
        });
    }
}

module.exports = { verifyJWT, generateToken };