import express from 'express'
//@ts-ignore
import {UserService} from './db.js'
import session from 'express-session'
import Multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const disk = Multer.diskStorage({
    destination: "uploads/",
    limit: {
        fileSize: 25000000
    },
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        cb(null, file.originalname)
      }
})

const upload = Multer({ storage: disk })


const app = express()
const userService = new UserService()
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(session({secret: '£0Qk?cl41oVQ'}))

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/login', (req, res)=>{
    res.render('login')
})

app.post('/login', async(req, res)=>{
    const acc = await userService.getUser(req.body.login_user_email, req.body.login_user_password)
    if(acc != null){
        req.session.userSession = acc
        res.redirect('/home')
    } else {
        res.redirect('/')
    }
})

app.get('/register', (req, res)=>{
    res.render('register')
})

app.post('/register', (req, res)=>{
    if(validateNewUser(req.body)){
        userService.registerUser(req.body.register_email, req.body.register_username, req.body.register_password)
    }
    res.redirect('/')
})

app.get('/logout', (req, res)=>{
    delete req.session.userSession
    res.redirect('/')
})



app.get('/home', async(req, res)=>{
    if(req.session.userSession != undefined){
        const f = await userService.getFolders(req.session.userSession["email"])
        res.render('home', {folders: f})
    } else {
        res.redirect('/login')
    }
})

app.post('/home', (req, res)=>{
    delete req.session.actualFolder
    userService.addFolder(req.body.new_folder_name, req.session.userSession["email"])
    res.redirect('/home')
})

app.get('/folder', async(req,res)=>{
    if(req.session.userSession == undefined){
        res.redirect('/login')
    } else {
        const acFile = await userService.getFiles(req.session.userSession["email"], req.query.f)
        req.session.actualFolder = (acFile!=null)?{name:req.query.f, id: acFile.id}:undefined
        res.render("folder", {files:acFile.file, acFolder: acFile.folder_name})
    }
})

app.post('/folder', upload.single('file_upload'), async(req, res)=>{
    if(req.session.actualFolder != undefined && req.session.userSession != undefined){
        userService.addFile(req.session.userSession["email"], req.session.actualFolder.name, req.file.filename)
    }
    res.redirect((req.session.actualFolder!=undefined)?`/folder?f=${req.session.actualFolder.name}`:'/home')
})



app.get('/download', (req, res)=>{
    const filename = req.query.file;
    const filePath = path.join(__dirname,'..','uploads', filename);
    res.download(filePath, (err)=>{
        console.log(err)
    })
})

app.post('/delete/folder', (req, res)=>{
    userService.deleteFolder(req.session.actualFolder.id)
    res.redirect('/home')
})

app.post('/update/folder', (req, res)=>{
    userService.renameFolder(req.session.actualFolder.id, req.body.new_name_folder)
    res.redirect('/home')
})

app.listen(8000)


function validateNewUser(ob){
    if(ob.register_email == undefined || ob.register_password == undefined || ob.register_username == undefined)return false
    if(ob.register_email.length > 512)return false
    if(ob.register_username.length > 64)return false
    if(ob.register_password.length > 512)return false
    return true
}