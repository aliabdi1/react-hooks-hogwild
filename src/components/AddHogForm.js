import React, { useState } from 'react';

function AddHogForm({ addNewHog }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    greased: false,
    weight: "",
    highestMedal: "",
    image: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewHog(formData);
    setFormData({
      name: "",
      specialty: "",
      greased: false,
      weight: "",
      highestMedal: "",
      image: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="specialty" value={formData.specialty} onChange={handleChange} placeholder="Specialty" required />
      <input type="checkbox" name="greased" checked={formData.greased} onChange={handleChange} /> Greased
      <input type="number" name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight" required />
      <input type="text" name="highestMedal" value={formData.highestMedal} onChange={handleChange} placeholder="Highest Medal" required />
      <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default AddHogForm;
