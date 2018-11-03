exports.verifyLogin = async (req, res, next) => {

}

/**
 * Express middleware
 * Restricts requests from propagating if no valid JWT is found
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.authMiddleWare = async (req, res, next) => {
    next();
}
