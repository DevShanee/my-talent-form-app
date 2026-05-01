import "./TalentForm.css";
import React, { useState } from "react";

const TalentForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        Talent: "" 
    });

    // Added loading state to disable button during request
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.Talent || formData.Talent === "disabled") {
            alert("Please select a talent before Submitting!");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("https://talentformapi.onrender.com/api/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Success:", result);
                alert("Form submitted successfully!");
                
                // Clear form only on success
                setFormData({
                    name: "",
                    age: "",
                    email: "",
                    Talent: ""
                });
            } else {
                throw new Error("Failed to submit form");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error connecting to the server.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <div className="form-card">
                <h1> Talent Form for PUPBC</h1>
                <p> Fill out the details below if you're interested</p> 
                <form onSubmit={handleSubmit}>

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

                    <button 
                        type="submit" 
                        className="Submit-btn" 
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TalentForm;