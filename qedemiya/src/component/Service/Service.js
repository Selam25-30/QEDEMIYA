import React from "react";
import { Tilt } from 'react-tilt';
import './Service.css'
import cover2 from './cover2.jpg'
const Service = () => {
   
    return (
        <div className="ba pa3 ma5">
            <div className='center hover-white ma2 color f3 br4 ba grow b w5 shadow-5  '>
                <p> OUR SERVICE </p>
            </div> 

            {/* service  1*/}

            <div className="rap ba bg-light ba pa3 ma4 br shadow-5">
            <div className="w-40 bg-white">
                <div className='ma4 ph3 br2 pv1 '>
                    <Tilt className="Tilt br4 shadow-2">
                        <div className='Tilt-inner a3'><img src={cover2} alt='smile'></img> </div>
                    </Tilt>
                </div>
                <h1 className="pa2">QEDEMIYA WEB APP</h1>
            </div>
            <div className="w-60 ma3 pa2 ba b" >
                <h2 className="b center f3 grow hover-orange ">OUR SERVICE DISCRIPTION</h2>
                <section className="pa3 ma3">
                    <div style={{ textAlign: 'left'}}>
                        <p className="b f4 grow hover-orange " style={{ textAlign: 'center'}}> QEDEMIYA Web App</p>
                        It can manage your time
                        helps to schedule your time
                        <p className="b underline" style={{ textAlign: 'center'}}>It can provide better solutions:</p>
                    </div>
                </section> 
            </div>
            </div>
             
             {/* service  2*/}

            <div className="rap bg-light ba pa3 ma4 br shadow-5">
            <div className="w-40 bg-white">
                <div className='ma4 ph3 br2 pv1 '>
                    <Tilt className="Tilt br4 shadow-2">
                        <div className='Tilt-inner a3'><img src={cover2} alt='smile'></img> </div>
                    </Tilt>
                </div>
                <h1 className="pa2">QEDEMIYA WEB APP</h1>
            </div>
            <div className="w-60 ma3 pa2 ba b" >
                <h2 className="b center f3 grow hover-orange ">OUR SERVICE DISCRIPTION</h2>
                <section className="pa3 ma3">
                    <div style={{ textAlign: 'left'}}>
                        <p className="b f4 grow hover-orange " style={{ textAlign: 'center'}}> QEDEMIYA Web App</p>
                        It can manage your time
                        helps to schedule your time
                        <p className="b underline" style={{ textAlign: 'center'}}>It can provide better solutions:</p>
                    </div>
                </section> 
            </div>
            </div>

            {/* service  3*/}

            <div className="rap bg-light ba pa3 ma4 br shadow-5">
            <div className="w-40 bg-white">
                <div className='ma4 ph3 br2 pv1 '>
                    <Tilt className="Tilt br4 shadow-2">
                        <div className='Tilt-inner a3'><img src={cover2} alt='smile'></img> </div>
                    </Tilt>
                </div>
                <h1 className="pa2">QEDEMIYA WEB APP</h1>
            </div>
            <div className="w-60 ma3 pa2 ba b" >
                <h2 className="b center f3 grow hover-orange ">OUR SERVICE DISCRIPTION</h2>
                <section className="pa3 ma3">
                    <div style={{ textAlign: 'left'}}>
                        <p className="b f4 grow hover-orange " style={{ textAlign: 'center'}}> QEDEMIYA Web App</p>
                        It can manage your time
                        helps to schedule your time
                        <p className="b underline" style={{ textAlign: 'center'}}>It can provide better solutions:</p>
                    </div>
                </section> 
            </div>
            </div>
        </div>
    );
}

export default Service;