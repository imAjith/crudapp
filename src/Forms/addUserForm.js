import React, { useState } from 'react'

export default function AddUserForm(props) {
const initialState ={
    id:null,
    name:'',
    email:'',
}
const [user,setUser] = useState(initialState)
// const [disableBtn,enabelBtn] = useState(true)

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    // if(user.name !=='' && user.email !==''){
    // enabelBtn(false)
    // }else{
    //     enabelBtn(true)
        
    // }
  };
  

  return (
    <div className='container'>
    <form onSubmit={event =>{event.preventDefault()
    if(!user.name || !user.email)return;
    props.addUser(user)
    setUser(initialState)}} className="row g-3">
    <div className="col">
      <input type="text" className="form-control" name='name' onChange={handleInputChange} value={user.name} placeholder="User Name" aria-label="User Name" />
    </div>
    <div className="col">
      <input type="mail" className="form-control" name='email' onChange={handleInputChange} value={user.email} placeholder="Email" aria-label="Email" />
    </div>
    <div  style={{justifyContent:'center', width:'100%'}} className="d-grid gap-2 col-2 mx-auto">
  <button className="btn btn-primary" style={{width:'100px'}} type="submit">Add</button>
</div>
  </form>
  </div>

    
  )
}
