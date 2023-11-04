import React, { useState } from 'react'
import FormStudent from './FormStudent'
import FromDo from './FromDo'
import ModalAdd from './ModalAdd';

export default function DoList({userLists}) {
  const [userList, setUserList] = useState(userLists)
  const [addStudent,setAddStudent]=useState(false);
  function handelAdd(newUser) {
    setUserList([...userList,newUser])
  }
  function handelMore(ID, dataStudent) {
    setUserList(userList.map((student) => {
      if (student.id == ID) {
        return (dataStudent)
      }
      return student
    }))
  }
  return (
    <>
      <button onClick={()=>{
        setAddStudent(true)
      }}>Thêm sinh viên</button>
      {
        addStudent && <ModalAdd handelAdd={handelAdd}/>
      }
      <input type="text" placeholder='tìm kiếm' />
      <button>Tìm kiếm</button>
      <button>Sắp xếp</button>
      <h2>Danh sách sinh viên</h2>

      <table className="table">
        <thead>
          <FormStudent />
        </thead>
        <tbody>
          {userList.map((userLists,index)=>{
            return <FromDo userList={userLists} index={index} handelMore={handelMore}/>
          })}
        </tbody>
      </table>
    </>
  )
}
