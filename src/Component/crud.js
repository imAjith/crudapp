import React from 'react'

export default function Crud(props) {


  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                    <th scope="col">
                    Name
                    </th>
                    <th scope="col">
                    Email
                    </th>
                    <th scope="col">
                    Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.user.length > 0 ? (props.user.map((data)=>{
                    return(
                    <tr key={data.id}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>
                        <button onClick={() =>{props.editRow(data)}} type="button" className="btn btn-outline-success me-3">Edit</button>
                        <button onClick={()=>props.deleteUser(data.id)} type="button" className='btn btn-outline-danger'>Delete</button>
                    </td>
                </tr>)})):<tr><td colSpan={3}>No user</td></tr>
}
            </tbody>
        </table>

    </div>
  )
}
