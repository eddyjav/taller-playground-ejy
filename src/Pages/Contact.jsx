import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='contact-container' >
    <div className="title">
          <h1>Ready to connect with me?</h1>
        </div>
      {/* <div className="contact-container">
        <h3>Let's Connect!</h3>
        <form action="#">
          <input type="text" id='fn' className='fn' name='firstname' placeholder='Fisrt name'/>
          <input type="text" id='ln' className='ln' name='firstname' placeholder='Last name'/>
          <input type="text" id='em' className='em' name='firstname' placeholder='Email address'/>
          
          <textarea name="" id="" cols="60" rows="10"></textarea>
          <button>Get in Touch</button>
        </form>
      </div>   */}
      <div className="wrapper">
      <h3>Let's Connect!</h3>
      <form action="">
      <input type="text" id='fn' className='fn' name='firstname' placeholder='Fisrt name'/>
      <input type="text" id='ln' className='ln' name='firstname' placeholder='Last name'/>
      <input type="text" id='em' className='em' name='firstname' placeholder='Email address'/>
      <textarea name="" id="" cols="60" rows="5" placeholder='Enter Text here' ></textarea>
       
        <p>
          <button>Get in Touch</button>
        </p>
      </form>
    </div>       


    </div>
        
    </>
  )
}

export default Contact