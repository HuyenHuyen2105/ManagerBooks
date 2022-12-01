const LoginService = require("../services/login.service");
const ApiError = require("../api-error");

exports.findAll = async(req, res, next) => {
    let login = [];
    try {
        const loginService = new LoginService();
        const { username } = req.query;
        if (username) {
            login = await loginService.findByName(username);
        } else {
            login = await loginService.all();
        }

    } catch (error) {
        console.log(error);
        return next(new ApiError(500, "An error occured while retrieving login"));
    }
    return res.send(login);
};


exports.create = async(req, res, next) => {
    if (!req.body?.username) {
        return next(new ApiError(400, "Name can not be empty"));
    }
    try {
        const loginService = new LoginService();
        const login = await loginService.create(req.body);
        return res.send(login);
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, "An error occurred while creating the contact")
        );
    }
};

exports.findOne = async(req, res, next) => {
    const loginService = new LoginService()
    const login = await loginService.findByName()

}