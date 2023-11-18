import express from 'express'
// import {isAuthenticated}from '../middlewares/auth.js'
import {createBlog,getAllBlogs,getUserbyId,getBlogbyId,myBlog,updateBlog,deleteBlog} from '../controllers/blogs.js'

const router = express.Router();

router.post('/new',createBlog)
router.get('/myblogs',myBlog)
router.put('/:id',updateBlog)
router.delete('/:id',deleteBlog)
router.get('/allblogs',getAllBlogs)
router.get('/blog/:id',getBlogbyId)
router.get('/:id',getUserbyId)

export default router;