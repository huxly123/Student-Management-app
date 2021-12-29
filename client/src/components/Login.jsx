import React, { useState } from 'react'
import style from "./admin.module.css"
import axios from "axios"

function Login() {
    const [formData, setFormData] = useState({
        contact: "",
        password:""
    })

    const handleChange = (e) => {
        const {name,value}=e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data:{token} } = await axios.post(
          "http://localhost:8080/login",
          formData
        );

        
        localStorage.setItem("smatoken",JSON.stringify(token))
    }

    return (
        <div>
            <h1>Login</h1>
        <form onSubmit={handleSubmit} className={style.formbody}>
          <input
            type="number"
            placeholder="Enter number"
                    onChange={handleChange}
                    name='contact'
          />
          <input
            type="text"
            placeholder="Enter password"
                    onChange={handleChange}
                    name='password'
          />
          <input type="submit" />
        </form>
      </div>
    );
}

export default Login
