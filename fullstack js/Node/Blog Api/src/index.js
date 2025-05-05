import e, { json } from 'express'
import { ApiService } from './db.js'

const api = new ApiService()
const app = e()

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
    api.addPost(req.body.title, req.body.pathname)
    res.send(req.body)
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
    res.send((r!=null)?r:{message: "Not Found!"})
})



app.listen(8000, ()=>{
    console.log('Starting at http://localhost:8000')
})