//serrver ko start krna
//database se connect krna

require("dotenv").config()
const connectToDb = require("./src/config/database")
const app = require("./src/app")



//connecting to mongodb
connectToDb()




app.listen(3000,()=>{
    console.log("server is running on port 3000")
})