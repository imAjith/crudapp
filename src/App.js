import { useState } from 'react';
import './App.css';
import Crud from './Component/crud';
import AddUserForm from './Forms/addUserForm';
import EditUserForm from './Forms/editUserForm';

function App() {
  const userData = [
    {
      id: 1,
      name: "John",
      email: "tugrp@example.com",
    },
    {
      id: 2,
      name: "Sarah",
      email: "ejeyd@example.com",
    },
    {
      id: 3,
      name: "Jessica",
      email: "tugrp@example.com",
    }
  ];

  const [user, setUser] = useState(userData);
  const [edit, setEdit] = useState(false);
  const [currentRow, setCurrentRow] = useState({ id: null, name: '', email: '' });

  const addUser = (newUser) => {
    newUser.id = userData.length + 1;
    setUser([...user, newUser]);
  };

  const deleteUser = (id) => {
    setUser(user.filter((data) => data.id !== id));
  };

  const editRow = (userData) => {
    setEdit(true);
    setCurrentRow({ id: userData.id, name: userData.name, email: userData.email });
  };

  const updateUser = (id, updatedUser) => {
    setEdit(false);
    setUser(user.map((data) => (data.id === id ? updatedUser : data)));
  };

  return (
    <div className='container'>
      <h1>CRUD Operations</h1>
      <div className='row'>
        <div className='col'>
          {edit ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm setedit={setEdit} currentRow={currentRow} updateUser={updateUser} />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className='col'>
          <h2>View Users</h2>
          <Crud editRow={editRow} user={user} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
