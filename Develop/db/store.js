var util = require("util")
var fs = require("fs")
const { notStrictEqual } = require("assert")
var asyncReadFile = util.promisify(fs.readFile)
var asyncWriteFile = util.promisify(fs.writeFile)

class Store{
    read(){
        return asyncReadFile("db/db.json", "utf8")
    }
    write(note){
        return asyncWriteFile("db/db.json", JSON.stringify(note))
    }
    getNotes(){
        return this.read().then((notes) => {
        var parseNotes = []
        if (notes.length > 0){
            parseNotes = [].concat(JSON.parse(notes))
        }
        return parseNotes
    })
    }
}

module.exports = new Store()