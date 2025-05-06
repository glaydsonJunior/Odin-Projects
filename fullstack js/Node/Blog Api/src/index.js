import e, { json } from 'express'
import { ApiService } from './db.js'
import jwt from 'jsonwebtoken'

const api = new ApiService()
const app = e()

const setJWT = (data)=>{
    return jwt.sign(JSON.stringify(data), process.env.SECRET)
}

const getJWT = (data)=>{
    return jwt.verify(data, process.env.SECRET)
}


app.use(e.json());
app.use(e.urlencoded({ extended: true }));

app.get('/blog/api/all/posts', async(req, res)=>{
    const r = await api.getAllPosts()
    res.send(r)
})

app.get('/blog/api/view/posts', async(req, res)=>{
    const r = await api.getAllPostsPublished()
    res.send(r)
})


app.post('/blog/api/add/post', (req, res)=>{
    const tokenObj = getJWT(req.headers.authorization.split(' ')[1])
    if(tokenObj.id === 1){
        api.addPost(req.body.title, req.body.pathname)
        res.send(req.body)
    } else {
        res.status(403)
        res.send({message: "Acess Denied!"})
    }
})


app.post('/blog/api/register', (req, res)=>{
    console.log(req.body)
    if((req.body.username == req.body.confirm_username) && (req.body.password == req.body.confirm_password)){
        api.registerUser(req.body.username, req.body.password)
        res.send({message: "Register completed"})
    } else {
        res.send({message: "Something seems wrong!"})
    }
})

app.get('/blog/api/login', async(req, res)=>{
    const r = await api.getUser(req.body.username, req.body.password)
    res.status((r!=null)?200:404)
    if(r!=null){
        res.cookie('sess',setJWT(r))
    }
    res.send((r!=null)?r:{message: "Not Found!"})
})


app.get('/blog/api/read/post', async(req, res)=>{
    const details = await api.getPosterDetails(req.query.name)
    
    if(details != null){
        const d = (details.date.getUTCDate() > 9)?details.date.getUTCDate():'0'+details.date.getUTCDate()
        const m = (details.date.getUTCMonth() > 9)?details.date.getUTCMonth:'0'+details.date.getUTCMonth()
        const dataFormat = d+'-'+m+'-'+details.date.getFullYear()
        details.date = dataFormat
        res.send(details)
    } else {
        res.status(404)
        res.send({message: "Not Found!"})
    }
})


app.post('/blog/api/comment/post', async(req, res)=>{
    const postID = await api.getPostIdByTitle(req.body.title)
    const tokenObj = getJWT(req.headers.authorization.split(' ')[1])
    api.createComment(postID.id, tokenObj.id, req.body.content)   
    res.send(tokenObj)
})

app.listen(8000, ()=>{
    console.log('Starting at http://localhost:8000')
})


/* 
    EDIT, DELETE POST NEED ADMIN 
*/