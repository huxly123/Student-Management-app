import React, { useState } from "react";
import style from "./admin.module.css";
import axios from "axios";
function Admin() {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [city, setCity] = useState("");
  // const [education, setEducation] = useState("");
  // const [gender, setGender] = useState("");
  // const [pass, setPass] = useState("");
  // const [number, setNumber] = useState("");

  const token =JSON.parse(localStorage.getItem("smatoken"))
    

  const [formData, setFormdata] = useState({
    name: "",
    age: "",
    city: "",
    education: "",
    gender: "",
    password: "",
    contact: "",
    role: "",
  });

  const [contestformData, setcontestformData] = useState({
    title: "",
    type: "",
    deadline: "",
    time: "",
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formData,
      [name]: value,
    });
  };

  const handleconChange = (e) => {
    if (e.target.name === "tags") {
      setcontestformData({
        ...contestformData,
        [e.target.name]: e.target.value.split(","),
      });
    } else {
      setcontestformData({
        ...contestformData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await axios.post(
        `http://localhost:8080/register`,
        formData
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmitcont = async (e) => {
    e.preventDefault();

    try {
      const data = await axios.post(
        `http://localhost:8080/contest`,
        contestformData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <h1>Admin</h1>
      {/* student form */}
      <h1>Student Form</h1>
      <form className={style.formbody} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          onChange={handleChange}
          name="name"
        />
        <input
          type="number"
          placeholder="Enter Age"
          onChange={handleChange}
          name="age"
        />
        <input
          type="text"
          placeholder="Enter city"
          onChange={handleChange}
          name="city"
        />
        <input
          type="text"
          placeholder="Enter Education"
          onChange={handleChange}
          name="education"
        />
        <input
          type="text"
          placeholder="Enter gender"
          onChange={handleChange}
          name="gender"
        />
        <input
          type="text"
          placeholder="Enter Password"
          onChange={handleChange}
          name="password"
        />
        <input
          type="number"
          placeholder="Enter Number"
          onChange={handleChange}
          name="contact"
        />
        <input
          type="text"
          placeholder="Enter Role"
          onChange={handleChange}
          name="role"
        />
        <input type="submit" />
      </form>
      <h1>Contact Form</h1>
      {/* contest form */}
      <form className={style.formbody} onSubmit={handleSubmitcont}>
        <input
          type="text"
          placeholder="Enter title"
          name="title"
          onChange={handleconChange}
        />
        <input
          type="text"
          placeholder="Enter type"
          name="type"
          onChange={handleconChange}
        />
        <input
          type="text"
          placeholder="Enter deadline"
          name="deadline"
          onChange={handleconChange}
        />
        <input
          type="number"
          placeholder="Enter time"
          name="time"
          onChange={handleconChange}
        />
        <input
          type="text"
          placeholder="Enter tags"
          name="tags"
          onChange={handleconChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Admin;
