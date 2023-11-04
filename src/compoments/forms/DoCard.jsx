import React, { useState } from 'react'
import ModalDelete from './ModalDelete'
import ModalMore from './ModalMore'

export default function DoCard({ user, handleDelete, handleMore , index}) {
  const [formMore,setFormMore] = useState(false)
  const [formDelete, setFormDelete] = useState(false)
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{user.title}</td>
      <td>{user.time}</td>
      <td>{user.status ? "hoàn thành" : "chưa hoàn thành"}</td>
      <td><button onClick={() => { 
        setFormMore(true)
      }}>More</button>
        {
          formMore && <ModalMore handleMore={handleMore} setFormMore={setFormMore} user={user}/>
        }
      </td>
      
      <td><button onClick={() => { handleDelete(user.id)
      }}>Delete</button>
        {
          formDelete && <ModalDelete handleDelete={handleDelete()} />
        }</td> 
    </tr>
  )
}
