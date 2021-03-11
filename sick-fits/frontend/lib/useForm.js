import { useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange({ target }) {
    let { name, type, value } = target;

    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      value[0] = target.files;
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );

    setInputs(blankState);
  }

  return { inputs, handleChange, resetForm, clearForm };
}
