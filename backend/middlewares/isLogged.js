exports.isLogged = (req, res, next) => {
   if (!req?.logged) {
        return res.status(403).send({ message: 'Error de autenticación' });
    }
    next();
 }