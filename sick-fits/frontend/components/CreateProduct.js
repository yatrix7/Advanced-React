import { useState } from 'react';
import useForm from '../lib/useForm';

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'Nice Shoes',
    price: 34234,
    description: 'These are the best shoes',
  });

  return (
    <form action="">
      <label htmlFor="name">
        Name
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          id="price"
          name="price"
          type="number"
          placeholder="Price"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="description">
        Description
        <input
          id="description"
          name="description"
          type="text"
          placeholder="Description"
          value={inputs.description}
          onChange={handleChange}
        />
      </label>

      <button type="button" onClick={clearForm}>
        Clear Form
      </button>

      <button type="button" onClick={resetForm}>
        Reset Form
      </button>
    </form>
  );
}
