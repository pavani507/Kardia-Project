const mongoose = require("mongoose");
const express = require("express");

const app = express();
const morgan = require("morgan");
const { urlencoded, json } = require("body-parser");

const newSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true
  },
  body: {
    type: String,
    minlength: 10
  }
});

const Note = mongoose.model("node", newSchema);

app.use(morgan("dev"));
app.use(urlencoded({ extended: true }));
app.use(json());

app.get("/note", async (req, res) => {
  const notes = await Note.find({})
    .exec()
    .lean()
    .exec();
  res.status(200).json(notes);
});

app.post("/note", async (req, res) => {
  const noteTobeCreated = req.body;
  const note = await Note.create(noteTobeCreated);
  res.status(201).json(note.toJSON());
});
const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/whatver");
};

connect()
  .then(() =>
    app.listen(5000, () => {
      console.log("server on http://localhost/5000");
    })
  )
  .catch(e => console.error(e));

const student = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      unique: true
    },
    faveFoods: [{ type: String }],
    info: {
      school: {
        type: String
      },
      shoeSize: {
        type: Number
      }
    },

    school: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "school"
    }
  },
  { timestamps: true }
);

const school = new mongoose.Schema({
  district: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "district"
  },
  name: {
    type: String,
    unique: false
  },
  openSince: Number,
  students: Number,
  isGreat: Boolean,
  staff: [{ type: String }]
});

school.index(
  {
    district: 1,
    name: 1
  },
  { unique: true }
);

school.post("save", function(doc, next) {
  setTimeout(() => {
    console.log("before save", doc);
    next();
  }, 300);
});

school.virtual("staffCount").get(function() {
  console.log("in virtual");
  return this.staff.length;
});
const School = mongoose.model("school", school);
const Student = mongoose.model("student", student);
