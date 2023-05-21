import React, { useEffect, useState } from 'react';

export default function EditUserForm(props) {
  const [user, setUser] = useState(props.currentRow);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentRow);
  }, [props.currentRow]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user.name || !user.email) return;
    props.updateUser(user.id, user);
  };

  const handleCancel = () => {
    props.setedit(false);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='row g-3'>
        <div className='col'>
          <input
            type='text'
            className='form-control'
            name='name'
            onChange={handleInputChange}
            value={user.name}
            placeholder='User Name'
            aria-label='User Name'
          />
        </div>
        <div className='col'>
          <input
            type='email'
            className='form-control'
            name='email'
            onChange={handleInputChange}
            value={user.email}
            placeholder='Email'
            aria-label='Email'
          />
        </div>
        <div className='d-grid gap-3 col-2 mx-auto' style={{width:'100%'}}>
          <button className='btn btn-primary btn-sm' type='submit'>
            Update
          </button>
          <button
            className='btn btn-secondary btn-sm'
            type='button'
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
