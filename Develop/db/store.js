const util = require("util");
const fs = require("fs");

const uuidv1 = require("uuid/v1");
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFile("db/db.json", "utf8")
    }
    Write(note) {
        return writeFile("db/db.json", JSON.stringify(note))
    }
    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes))
            } catch (err) { 
                parsedNotes = [] 
            }
            return parsedNotes
        })
    }

addNote(note) {
    const{title,text}=note 
    if (!title || !text) {
        throw new Error ("cannot be blank")
    }
}








}