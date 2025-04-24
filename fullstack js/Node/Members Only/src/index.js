
const db = require('./db.js')
const psql = db.db
const express = require('express')
const session = require('express-session')
const bcrypt = require('bcrypt')
const app = express()


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(session({secret: '£0Qk?cl41oVQ'}))
db.generateTables()


async function registerUser(usr, pass){
    const cryptedPassword = await bcrypt.hash(pass, 10)
    const registerQuery = `INSERT INTO users(username, password) VALUES ('${usr}', '${cryptedPassword}')`
    psql.query(registerQuery)
    return registerQuery
}


function updateSessionUserMember(){

}

async function getUser(usr, pass) {
    const loginQuery = `SELECT * FROM users WHERE username='${usr}'`
    const userObj = await psql.query(loginQuery).then(result=>{return result.rows[0]})
    const logged = await bcrypt.compare(pass,userObj.password)
    if(logged){
        return userObj
    }
    return undefined
}

app.get('/', async(req, res)=>{
    const postsQuery = 'SELECT msg, username FROM posts JOIN users ON posts.author = users.id'
    const postsObj = await psql.query(postsQuery).then(r=>{return r.rows})
    res.render('index', {user: req.session.userSession, posts: postsObj})
})


app.get('/logout', (req,res)=>{
    if(req.session.userSession != undefined){
        delete req.session.userSession
    }
    res.redirect('/')
})

app.get('/login', (req, res)=>{
    res.render('loginpage')
})


app.post('/login', async(req, res)=>{
    const userLogin = {username: req.body.login_user, password: req.body.login_password}
    const sessionSucess = await getUser(userLogin.username, userLogin.password)
    req.session.userSession = sessionSucess
    res.redirect('/')
})



app.get('/register', (req, res)=>{
    res.render('registerpage')
})

app.post('/register', async(req,res)=>{
    const newUser = {user: req.body.register_username, password: req.body.register_password, confirm_password: req.body.register_confirm_password}
    if(newUser.confirm_password != newUser.password)res.redirect('/')
    registerUser(newUser.user, newUser.password)
    res.redirect('/')
})



app.post('/msg', (req, res)=>{
    if(req.session.userSession != undefined){
        const postQuery = `INSERT INTO posts(msg, author) VALUES ('${req.body.message_post}',${req.session.userSession.id})`
        psql.query(postQuery)
    }
    res.redirect('/')
})


app.get('/upgrade', (req, res)=>{
    if(req.session.userSession != undefined){
        res.render('upgrade')
    } else {
        res.redirect('/')
    }
})

app.post('/upgrade', (req, res)=>{
    if(req.session.userSession != undefined){
        const passCodeSubmited = req.body.passcode_member
        const passCode = 'free your mind'
        if(passCode == passCodeSubmited){
            psql.query(`UPDATE users SET member = true WHERE id=${req.session.userSession.id}`)
            req.session.userSession.member = true
        }
    }
    res.redirect('/')
})

app.listen(8000)