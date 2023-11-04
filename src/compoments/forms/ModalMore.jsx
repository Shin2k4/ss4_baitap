import React from 'react'
import './modal.scss'
export default function ModalMore({ handleMore, setFormMore, user }) {
  return (
      <div className='formDo'>
          <form onSubmit={(event) => {
              event.preventDefault()
              console.log(typeof event.target.status.value);
              handleMore(user.id,
                  {
                      title: event.target.title.value,
                      time: event.target.time.value,
                      status: event.target.status.value ? "hoàn thành" : "chưa hoàn thành",
                  }
              )
          }} className='form_content'>
              <div className='btn_turn-off'>
                  <button onClick={() => {
                      setFormMore(false)
                  }} className='btn-form_close btn btn-danger '>X</button>
              </div>

              <div className="mb-3">
                  <label for="title" class="form-label">Title</label>
                  <input type="text" id='title' className="form-control" name='title' />
              </div>
              <div className="mb-3">
                  <label for="time" class="form-label">Time</label>
                  <input type="date" className="form-control" id='time' name='time' />
              </div>
              <div className="mb-3">
                  <label for="status" class="form-label">Status</label>
                  <div className='radio_form'>
                      <span>hoàn thành</span>
                      <input type="radio" name='status'  />
                  </div>
              </div>
              <div>
                  <button type="submit" className="btn btn-primary btn-submit_form">Submit</button>
              </div>
          </form>
    </div>
  )
}
