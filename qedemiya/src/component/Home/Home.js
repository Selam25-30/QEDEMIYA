import React from "react";
// import { Tilt } from 'react-tilt';
import './Home.css'
import cover1 from './cover1.png'


const Product = () => { 
    return (     
        <div className="grow shadow-5 pa4 ma2 center">
            <div><img src={cover1} alt='smile'></img> </div>
        </div>
    );
}

export default Product;