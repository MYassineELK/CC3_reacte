import React from 'react'
import "./Contact.css"
export default function Contact() {
  return (
    <div>
   <div className="form-container">
  <form className="form">
    <div className="form-group">
      <label htmlFor="email">Company Email</label>
      <input required name="email" id="email" type="text" />
    </div>
    <div className="form-group">
      <label htmlFor="textarea">How Can We Help You?</label>
      <textarea required cols={50} rows={10} id="textarea" name="textarea" defaultValue={"          "} />
    </div>
    <button type="submit" className="form-submit-btn">Submit</button>
  </form>
</div>

    </div>
  )
}

