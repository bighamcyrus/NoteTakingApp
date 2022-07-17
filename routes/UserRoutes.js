const userRoutes = require('express').Router();
const fs = require('fs')// write file system
const { v4: uuidv4 } = require('uuid'); // unique id creation tool was installed with "npm i uuid"
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed' thi is the syntax to use the unique id 

// code below is saying userRoutes.get takes you to /notes and request information from db and put it on the notes page 
userRoutes.get('/notes', (req, res)=> {

    const db = JSON.parse(fs.readFileSync("db/db.json"))
    res.json(db);
});

// take the form data from the server and create a new object named newNote.Parse takes the object info and turns to a string. push that to the db, then fswrite file puts that new object into the db and shows it 
userRoutes.post('/notes', (req, res) => {
    const newNote = 
    {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    const db = JSON.parse(fs.readFileSync("db/db.json"))
    db.push(newNote)
    fs.writeFileSync("db/db.json", JSON.stringify(db))
// always have to respond back so that browser knows your done. 
res.json(db);

});

module.exports = userRoutes;