const mongoose = require("mongoose")

// connection new db
mongoose.connect('mongodb://localhost:27017/mystorett',
    //   {useNewUrlParser : true , useUnifieldTopology :true }
)

    .then(() => console.log("connect sucessfully ......."))
    .catch((e) => console.log(e))

//  Schema
//  A Mongoose Schema defines the Structure of the Documents
//  defaults Values , Validations etc

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    Date: {
        type: Date,
        default: Date.now
    }
})

// A  Mongoose model scehma is a wrpper on the mongoose schema
//  A Mongoose Schema defines the Structure of the Documents
//  defaults Values , Validations etc ..where as  mongoose model
// provides an interface to th database for creating ,
// quering ,updating , deleting records etc

// Collection Creation
// Playlist ye capital hy class ki tarah hy
const Playlist =  new mongoose.model("Playlist", playlistSchema)


// create document or insert 
const createDocument = async () => {
    try {
        const JSPlaylist = new Playlist({
            name: "Java Script",
            ctype: "FrontEnd",
            videos: "11",
            author: "Adnan Abrar",
            active: true,
        })

        const mongodbPlaylist = new Playlist({
            name: "MonngoDb",
            ctype: "database",
            videos: "11",
            author: "Adnan Abrar",
            active: true,
        })

        const mongoosePlaylist = new Playlist({
            name: "mongoose",
            ctype: "database",
            videos: "12",
            author: "Adnan Abrar",
            active: true,
        })

        const expressPlaylist = new Playlist({
            name: "Express JS",
            ctype: "Back End",
            videos: "3",
            author: "Adnan Abrar",
            active: true,
        })

        const result = await Playlist.insertMany([JSPlaylist , mongodbPlaylist , mongoosePlaylist ,expressPlaylist]);
        console.log(result);
    }catch(err){
         console.log(err);
    }
}

// createDocument();

const getDocument = async () => {
    try {
        const result = await Playlist.find({ctype : {$in : ["database" , "Back End" ]}})
        // 1 means name show karna hy
        .select({name:1})
        // .limit(2)
        console.log(result);
    }catch(err) {
        console.log(err);
    }
  
}

getDocument();
