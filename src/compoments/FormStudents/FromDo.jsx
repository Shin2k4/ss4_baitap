import React, { useState } from 'react'
import ModalMore from './ModalMore'

export default function FromDo({ userList, index, handelMore }) {
    const [moreStudent, setMoreStudent] = useState(false)
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{userList.code}</td>
            <td>{userList.name}</td>
            <td>{userList.sex ? "nam" :"nữ"}</td>
            <td>{userList.age}</td>
            <td>
                <button onClick={() => {
                    handelMore(
                        setMoreStudent(true)
                    )
                }}>Sửa</button>
                {
                    moreStudent && <ModalMore handelMore={handelMore} userList={userList} />
                }
                <button>Xoá</button>
            </td>
        </tr>
    )
}
