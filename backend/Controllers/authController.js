const userModel = require('../Models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const createError = require('../Utills/appError');

const SECRET_KEY = process.env.JWT_TOKEN;

// CREATE A TOKEN
const createToken = (id) => {
    return jwt.sign({ id }, SECRET_KEY, { expiresIn: "3d" });
}

// SIGN UP-REGISTER
exports.signup = async (req, res, next) => {
    try {
        const existingUser = await userModel.findOne({ email: req.body.email });

        if (existingUser) {
            return next(createError("User already exists!", 400));
        }

        const hashPassword = await bcrypt.hash(req.body.password, 12);

        const newUser = await userModel.create({
            ...req.body,
            password: hashPassword,
        });

        const token = createToken(newUser._id);

        res.status(200).json({
            status: "Success",
            message: "User registered successfully",
            token,
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            },
        });
    } catch (error) {
        next(error);
    }
};


// LOGIN
exports.signin = async(req,res,next)=>{
    try{
        const { email, password } = req.body;
        
        const user = await userModel.findOne({email});

        if (!user) return next(new createError("user not found!", 404));

        const isPassword = await bcrypt.compare(password, user.password);
    
        if (!isPassword) {
            return next(new createError("Incorrect email or password! ", 401));
        }
        
        const token = createToken({ _id: user._id });
        
        res.status(200).json({
            status: "success",
            message: "Login successfully",
            token,
            user: {
              id: user._id,
              name: user.name,
              email: user.email,
            },
        });
    } catch (error) {
        next(error);
    }
};
