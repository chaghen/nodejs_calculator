import express  from 'express';

const app = express();
import 'dotenv/config'

import path, { resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//this is just to testing
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"public/index.html")); 
})


app.listen(process.env.PORT || 5000,()=>{
  
    console.log("server is nunning well");
  
  });
