import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='br2 ba ma5 pa3 f3'>
            <div className='center hover-white pa2 ma5 color f3 br4 ba grow b w5 shadow-5  '>
                    <p> Contact Us </p>
                </div>
                <article className="br2 mv8 co w-50 mw9 shadow-1 ba center">
                    <main className="pa4 black-80">
                        <form className="">
                            <fieldset id="contact" className=" ph0  mh0">
                                {/* <legend className="f3 w10 fw5 ph0 mh0 bg-white">CONTACT US</legend> */}
                                <div className="mt3 pa2 ma3 ">
                                    <label className="db center dib gold fw6 lh-copy f4" htmlFor="user-name">Name</label>
                                    <input className="pa2 co input-reset bg-transparent hover-bg-white hover-white w-100"
                                    />
                                </div>
                                <div className="mt3 pa2 ma3">
                                    <label className="db center dib gold fw6 lh-copy f4" htmlFor="email-address">Email</label>
                                    <input className="pa2 input-reset co bg-transparent hover-bg-white  w-100"
                                    />
                                </div>
                            <div className="mt3 pa2 ma3 ">
                                <label className="form-label gold fw6 lh-copy f3" htmlFor="message"> Message</label>
                                <textarea className="pa2 ba co b input-reset  hover-bg-white h8 w-100" id="message" required />
                            </div>
                            <div className="mt3 center  pa2 ma3">
                                <input className="db hover-white b gold pv2 input-reset shadow-5 ba bg-transparent w4 grow pointer f3"
                                    // onClick={this.onSubmitSignIn}
                                    type="submit"
                                    value="Submit" />
                            </div>
                         </fieldset>
                      </form>
                    </main>
                </article>
            </div>
            
    );
}

export default Contact;