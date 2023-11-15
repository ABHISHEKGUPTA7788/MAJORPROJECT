import {Blog} from '../Models/blogs.js'


export const createBlog = async(req,res)=>{
   
    const {title,description,imgURL} = req.body
    
    await Blog.create({
        title,
        description,
        imgURL,
        user:req.user
    })
    res.status(200).json({
        success:true,
        message:"blog addded successfully !!!"
    })
}
export const myBlog = async (req,res)=>{
    const userid  = req.user._id

    const blogs = await Blog.find({user:userid})

    res.json({
        success:true,
        blogs,
        userid
    })
}
export const updateBlog = async(req,res)=>{
    const {title,description,imgURL} = req.body

    const id = req.params.id

    const blog = await Blog.findById(id)
     
    if(!blog) return res.json({
        success:false,
        message:"Blog does't exists"
    })
    
    blog.title = title,
    blog.description = description,
    blog.imgURL=imgURL

    blog.save()

    res.json({
        success:true,
        blog,
        message:"updating blog"
    })
}
export const deleteBlog = async(req,res)=>{
    const id = req.params.id

    const blog = await Blog.findById(id)
     
    if(!blog) return res.status(404).json({
        success:false,
        message:"Invalid blog"
    })

    await blog.deleteOne()
    res.json({
        success:true,
        message:"Blog Deleted !!!"
    })
}