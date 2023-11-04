import React from 'react'
import './modal.scss'
export default function FormDo({ handelAdd, setFormAdd }) {
  return (
    <div className='formDo'>
      <form onSubmit={(event) => {
        event.preventDefault()
        handelAdd(
          {
            id: Date.now() * Math.random(),
            title: event.target.title.value,
            time: event.target.time.value,
            status: false,
          }
        )
      }} className='form_content'>
        <div className='btn_turn-off'>
          <button onClick={() => {
            setFormAdd(false)
          }} className='btn-form_close btn btn-danger '>X</button>
        </div>

        <div className="mb-3  form_fields">
          <label for="title" class="form-label">Title</label>
          <input type="text" id='title' className="form-control" name='title' />
        </div>
        <div className="mb-3  form_fields">
          <label for="time" class="form-label">Time</label>
          <input type="date" className="form-control" id='time' name='time' />
        </div>
        <div>
          <button type="submit" className="btn btn-primary btn-submit_form">Submit</button>
        </div>
      </form>
    </div>
  )
}
