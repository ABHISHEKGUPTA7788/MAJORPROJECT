import express from 'express'
import {isAuthenticated}from '../middlewares/auth.js'
import {createBlog,getAllBlogs,getUserbyId,getBlogbyId,myBlog,updateBlog,deleteBlog} from '../controllers/blogs.js'

const router = express.Router();

router.post('/new',isAuthenticated,createBlog)
router.get('/myblogs',isAuthenticated,myBlog)
router.put('/:id',isAuthenticated,updateBlog)
router.delete('/:id',isAuthenticated,deleteBlog)
router.get('/allblogs',getAllBlogs)
router.get('/blog/:id',isAuthenticated,getBlogbyId)
router.get('/:id',getUserbyId)

export default router;