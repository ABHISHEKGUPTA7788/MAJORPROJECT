import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../Models/users.js'
import { generateCookie } from '../utils/features.js'


export const userRegister = async (req, res) => {
    const { name, email, password } = req.body

    let user = await User.findOne({ email })
    if (user) return res.status(404).json({
        sucess: false,
        message: "User already exists... "
    })

    const hashPassword = await bcrypt.hash(password, 10)

    user = await User.create({
        name,
        email,
        password: hashPassword
    })
    generateCookie(user, res, 201, "User register Successfully !!")
}


export const UserLogin = async (req, res) => {
    const { email, password } = req.body

    let user = await User.findOne({ email })

    if (!user) return res.status(401).json({
        success: false,
        message: "User not exists"
    })

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) return res.status(401).json({
        success: false,
        message: "Password Doesn't Match"
    })
    //    const token = jwt.sign({_id:user._id},'&*(*&(*&^*%')
    //    console.log(token)

    //    res.status(201).cookie('token',token).json({
    //     success:true,
    //     message:`Welcome ${user.name}`
    //    })
    generateCookie(user, res, 201, `Welcome ${user.name} ....`)
}



export const logout = (req, res) => {
    res.status(200).cookie("token", "", {
        expires: new Date(Date.now())
    }).json({
        success: true,
        message: "Logout Successfully !!   "
    })
}

export const getMyProfile = (req,res,next) =>{
    res.status(200).json({
        success:"verified",
        user:req.user
    })
}
