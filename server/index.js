const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Schema } = mongoose;
const app = express();
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
const CourseSchema = new Schema(
  {
    imageUrl: { type: String, require: true },
    name: { type: String, require: true },
    title: { type: Number, require: true },
    author: { type: String, require: true },
  },
);
app.use(cors());
app.use(bodyParser.json());

const port = 8080;
const DB_URL =
  "mongodb+srv://22yanvar:22yanvar@cluster0.egmznhn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const CourseModel = mongoose.model("Course", CourseSchema);
app.get("/api/courses", async (req, res) => {
  try {
    const courses = await CourseModel.find({});

    if (courses.length > 0) {
      res.status(200).send({ message: "success", data: courses });
    } else {
      res.status(204).send({
        message: "data bosdur",
        data: null,
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});


app.delete("/api/courses/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCourse = await CourseModel.findByIdAndDelete(id);

    res.status(200).send({
      message: "silindi",
      deletedCourse: deletedCourse,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post("/api/courses", async (req, res) => {
  try {
    const newCourse = new CourseModel({ ...req.body });
    await newCourse.save();

    res.status(201).send({ message: "muvefeqiyetle yaradildi", data: newCourse });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});


app.get("/api/courses/id", async (req, res) => {
  const { id } = req.params;
  try {
    const Course = await CourseModel.findById(id);

    if (course) {
      res.status(200).send({
        message: "suces",
        data: course,
      });
    } else {
      res.status(404).send({ message: "melumat yoxdur" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
mongoose.connect(DB_URL).then(() => {
  app.listen(port, () => {
    console.log(`Link:  http://localhost:${port}`);
  });
  console.log("Baglandi ");
});
