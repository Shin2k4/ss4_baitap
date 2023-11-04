import React, { useState } from 'react'
import DoCard from './DoCard'
import FormDo from './FormDo'
export default function DoList({users}) {
  const [userList, setUserList]= useState(users)
  function handelAdd(newUser) {
    setUserList([...userList,newUser])
  }
  const [formAdd, setFormAdd] = useState(false)
  function handleDelete(ID) {
    setUserList(userList.filter((user) => {
      return (user.id != ID)
    }))
  }
  function handleMore(ID, dataUser) {
    setUserList(userList.map((user) => {
      if (user.id == ID){
        return (dataUser)
      }
    return user
    }))
  }
  return (
    <div>
          <button onClick={()=>{
            setFormAdd(true)
          }}>Add</button>
          {
            formAdd && <FormDo handelAdd={handelAdd} setFormAdd={setFormAdd}/>
          }
          <table className="table">
              <thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Title</th>
                      <th scope="col">Time</th>
                      <th scope="col">Status</th>
                  </tr>
              </thead>
              <tbody>
                  {
                    userList.map((user , index) => {
                      return <DoCard user={user} index={index} handleDelete={handleDelete} handleMore={handleMore}/>
                    })
                  }

              </tbody>
          </table>
    </div>
  )
}
