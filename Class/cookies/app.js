const express=require('express')
const bodyParser=require('body-parser')
const session=require('express-session')
const cookiesParser=require('cookie-parser')

var User=require('./model/User.js')

const app=express()

app.set('port',process.env.PORT || 3000)
app.use(express.urlencoded({extended:true}))
app.use(cookiesParser())

app.use(session({
    key:"user_id",
    secret:"RandomSecretKey",
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires:600000
    },
}))

var sessionChecker=(req,res,next)=>{
    if(req.session.user && req.cookies.user_id){
        res.redirect('/dashboard')  
    }
    else{
        next()
    }
}

app.get('/',sessionChecker,(req,res)=>{
    res.redirect('/login')
})

app.route('/login').get(sessionChecker,(req,res)=>{
    res.sendFile(__dirname+'/public/login.html')
}).post(async (req,res)=>{
    var username=req.body.username,
        password=req.body.password

        try{
            var user=await User.findOne({email:username}).exec();
            if(!user){
                res.redirect('/login')
            }
            else {
                if(!user.comparePassword(password)){
                    res.redirect('/login')
                }
                else {
                    req.session.user=user
                    res.redirect('/dashboard')
                }
            }
        }
        catch(error)
        {
            console.log(error)
        }
    })

app.route('/signup').get(sessionChecker,(req,res)=>{    
    res.sendFile(__dirname+'/public/signup.html')
}).post((req,res)=>{
    var user=new User({ 
        email:req.body.email,
        password:req.body.password,
        name:req.body.name,
        })
        user.save((err,doc)=>{
            if(err) res.redirect('/signup')
            else {
                req.session.user=doc
                res.redirect('/dashboard')
            }
        })
})

app.route('/dashboard').get((req,res)=>{
    if(req.session.user && req.cookies.user_id){
        res.sendFile(__diename+'/public/dashboard.html')
    }
    else{
        res.redirect('/login')
    }
})          

app.route('/logout').get((req,res)=>{
    if(req.session.user && req.cookies.user_id){
        res.clearCookie('user_id')
        res.redirect('/')
    }
    else{
        res.redirect('/login')
    }
})

app.use(function(req,res,next){
    res.status(404).send("Sorry can't find that!")
})

app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'))
})