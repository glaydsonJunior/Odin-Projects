
const express = require('express')

const app = express()

const messages = []

function generateMessage(txt, user){
    const formatDate = new Date();
    return {text: txt, user:user, date: formatDate.toLocaleDateString()}
}

function addMessage(form){
    messages.push(generateMessage(form.text, form.user))
}

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index', {messages: messages})
});

app.post('/new', (req, res)=>{
    addMessage(req.body)
    res.redirect('/')
});


app.listen(4000, ()=>{
    console.log("SERVER STARTING...")
})