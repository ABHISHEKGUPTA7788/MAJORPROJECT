import express from 'express'
import {userRegister,UserLogin,logout,getMyProfile} from '../controllers/user.js'
 import { isAuthenticated } from '../middlewares/auth.js';



const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        sucess:"true",
        message:"we are at home roue"
    })
}) 

router.post('/register',userRegister)
router.post('/login',UserLogin)
router.get('/logout', logout)
router.get('/profile',getMyProfile)

export default router;