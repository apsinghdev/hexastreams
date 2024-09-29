import express from "express";
import z from "zod";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import JWT_SECRET from "../config.js";
import jwt from "jsonwebtoken";

const userRouter = express.Router();

const userData = z.object({
    username: z.string().email(),
    password: z.string().min(1),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
});

// create signup functionality

const signup = async (req, res) => {
    const result = userData.safeParse(req.body);
    if (!result.success) {
        return res.status(411).json("Incorrect inputs! Try again.");
    }

    const { username, password, firstName, lastName } = req.body;

    // check if a user already exists in the database

    const data = await User.findOne({ username: username });

    if (data) {
        return res.status(409).json({ error: "user already exists. please signin" })
    }

    // hash the password

    const hashedPassword = await bcryptjs.hash(password, 10);

    // now store the data with hashed password in the database.
    // first create a new instance of model

    const newUser = new User({
        username: username,
        password: hashedPassword,
        firstName: firstName,
        lastName: lastName,
    });


    // save the data in db

    try {
        const user = await newUser.save();
        const userId = user._id;
        const token = jwt.sign({ userId }, JWT_SECRET);

        return res
            .status(201)
            .json({ message: "user created successfully", token: token, userId: userId });
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

// create signin functionality

// create zod object for input validation

const signinBody = z.object({
    username: z.string().email(),
    password: z.string(),
});

const signin = async (req, res) => {
    const result = signinBody.safeParse(req.body);

    if (!result.success) {
        return res.status(411).json({ message: "incorrect inputs" });
    }

    const { username, password } = req.body;
    const user = await User.findOne({ username: username });

    if (user) {
        const userPassword = user.password;
        const passwordFound = await bcryptjs.compare(password, userPassword);

        if (!passwordFound) {
            return res.status(401).json("wrong credentials");
        }
        const token = jwt.sign({ userId: user._id }, JWT_SECRET);
        return res.status(200).json({ token: token, userId: user._id });
    } else {
        return res.status(401).json("user not found");
    }
};

// define the routes

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);

export default userRouter;