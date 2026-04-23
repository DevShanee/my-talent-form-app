import "./TalentForm.css";
import React, { useState } from "react";

const TalentForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        Talent: "" 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.Talent || formData.Talent === "disabled") {
            alert("Please select a talent before Submitting!");
            return;
        }

        console.log("Form Data Submitted:", formData);

        setFormData({
            name: "",
            age: "",
            email: "",
            Talent: ""
        });
    };

    return (
        <div className="form-container">
            <div className="form-card">
                <h1> Talent Form for PUPBC</h1>
                <p> Fill out the details below if you're interested</p> 
                <form onSubmit={handleSubmit}>

                    {/* Name Input Field */}
                    <div className="form-field">
                        <label htmlFor="name"> Name </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Age Input Field */}
                    <div className="form-field">
                        <label htmlFor="age"> Age </label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            placeholder="Enter your Age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email Input Field */}
                    <div className="form-field">
                        <label htmlFor="email"> Email </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Talent Input Field */}
                    <div className="form-field"> 
                        <label htmlFor="Talent"> Talent </label>
                        <select
                            id="Talent"
                            name="Talent" 
                            value={formData.Talent}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select your Talent</option>
                            <option value="Singing">Singing</option>
                            <option value="Dancing">Dancing</option>
                            <option value="Acting">Acting</option>
                        </select>
                    </div>

                    <button type="submit" className="Submit-btn">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TalentForm;