import express from "express";
import { engine } from "express-handlebars";
const app = express();

let m={
    name:"vicky",
    gender:"men",
    people: [
        { firstname: "Lala" },
        { firstname: "Jatu" },
        { firstname: "Curl" },
    ],

};


app.engine('handlebars',engine());
app.set('view engine', 'handlebars');
app.set('views','./views');

app.get('/', function (req,res){
    res.render('home',{data: m});
});

app.get('/about', (req, res)=>{
    res.render('about');
})

app.listen(3000);