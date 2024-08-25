const Blog = require("../model/blogModel");
exports.getBlogs=(req,res,next)=>{
        Blog.find()
        .then((blogs)=>{
            //console.log(blogs)
            res.json({
                blogs
            })
        }).catch(err=>console.log(err));
    //     res.json([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    //   ])
}

exports.postBlog = (req,res,next)=>{
        const title  = req.body.title;
        const body  = req.body.body;
        const author  = req.body.author;
        console.log(title,body,author);
        const blog = new Blog({
            title : title,
            body : body,
            author: author
        })
        blog.save()
        .then(result=>{
            console.log("Blog uploaded");
            res.status(201).json({ message: 'Blog created successfully' });
        })
        .catch(err=>console.log(err));
        
}
exports.getBlog = (req,res,next)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then(blog=>{
        res.json({
            blog
        })
    })
    .catch(err=>console.log(err));
}

exports.deleteBlog = (req,res,next)=>{
    console.log("delete route triggered");
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then(result=>{
        console.log("blog deleted")
        res.status(201).json({ message: 'Blog deleted successfully' });
    })
    .catch(err=>console.log(err))
}