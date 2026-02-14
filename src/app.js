//server ko create krna
//server ko config krna

const express = require("express")
const noteModel = require("./models/notes.model")
const app = express()



app.use(express.json());


/**
 * -POST /notes
 * req.body =>{title,description}
 */
app.post("/notes", async (req,res)=>{
    const {title,description }= req.body
    const note = await noteModel.create({
        title , description
    })

    res.status(201).json({
        message:"note created successfully",
        note
    })
})

/**
 * GET /notes
 * Fetch all the notes
 */
app.get("/notes",async(req,res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message:"notes fetch sucesfully",
        notes
    })
})

module.exports= app