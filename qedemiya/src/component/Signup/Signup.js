import React from 'react';

const Signup = () => {
    return (
        <article className="br3 ba dark-gray b--black--10 mv6 w-100 w-50-m w-25-1 mw6 shadow-5 center">
            <div className='login'>
                <div>
                    <h2>Sign Up form</h2>
                </div>
                <div className='input'>
                    {/* <i className='fa-solid fa-user'></i>
                    <input type='text' className='input-mail' autoComplete='off' required></input>
                    <label for='input'>First Name</label>   */}
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">First Name</label>
                    <input type='text' className='input-mail' autoComplete='off' required></input>
                </div>
            </div>
        </article>
    );
}

export default Signup;