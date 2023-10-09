import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="my-3">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
            <div className="mb-3">
              <label htmlFor="example" className='form-label'>Fullname</label>
        <input type="text" className="form-control" id="email" placeholder="Enter Fullname" name="Fullname"/>
      </div>
      <div className="mb-3">
      <label htmlFor="example" className='form-label'>Phone Number</label>
        <input type="password" className="form-control" placeholder="Enter your phone number" name="pswd"/>
      </div>
      <div className="mb-3">
      <label htmlFor="example" className='form-label'>Email Address </label>
        <input type="password" className="form-control" placeholder="Enter your Email Address" name="pswd"/>
      </div>
      <div className="mb-3">
      <label htmlFor="example" className='form-label'>Email Address </label>
        <textarea type="textarea" className="form-control" placeholder="Enter your Email Address" rows={3} name="pswd"></textarea>
      </div>
    <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
