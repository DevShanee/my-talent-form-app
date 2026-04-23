import "./TalentForm.css";
import React, { useState } from "react";

const TalentForm = () => {
    const [formData, setFormData] = useState({
        name:"",
        age:"",
        email:"",
        talent:""
    });

const handleChange = (e) => {
    const{name, value } = e.target;
    setFormData({
        ...formData,
        [name]:value,
    })
}

}