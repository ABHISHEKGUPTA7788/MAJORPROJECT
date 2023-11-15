import jwt from 'jsonwebtoken'


export const generateCookie = (user,res,statuscode=200,message) =>{
    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET)
    console.log(token) 
     
    res.status(statuscode).cookie('token',token,{
        httpOnly:true,
        maxAge:10*60*1000,
    }).json({
     success:true,
     message:message
    })
 
}