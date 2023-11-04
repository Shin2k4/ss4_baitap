import React from 'react'

export default function ModalMore({ handelMore , userList}) {
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            handelMore( userList.id,
                {
                    code: e.target.code.value,
                    name: e.target.name.value,
                    age: e.target.age.value,
                    sex: e.target.sex.value == "Nam" ? true : false, 
                }
            )
        }}>
            <h2>Thông tin sinh viên</h2>
            <div className="mb-3">
                <span className="form-label">Mã sinh viên</span>
                <input type="text" className="form-control" name='code'/>
            </div>
            <div className="mb-3">
                <span className="form-label">Tên sinh viên</span>
                <input type="text" className="form-control" name='name'/>
            </div>
            <div className="mb-3 ">
                <span className="form-label" >Tuổi</span>
                <input type="text" className="form-control" name='age'/>
            </div>
            <div className="mb-3 ">
                <span className="form-label" >Giới tính</span>
                <input type="text" className="form-control" name='sex'/>
            </div>
            <div className="mb-3 ">
                <span className="form-label" >Ngày sinh</span>
                <input type="date" className="form-control" name='date'/>
            </div>
            <div className="mb-3 ">
                <span className="form-label" >Quê quán</span>
                <input type="text" className="form-control" />
            </div>
            <div className="mb-3 ">
                <span className="form-label" >Địa chỉ</span>
                <input type="text" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
