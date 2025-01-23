import React from 'react';
import img1 from '../Assets/img1.png.jpg';
import img2 from '../Assets/img2.png.jpg';
import '../index.css';

const Body = () => {
    return (
        <div>
            
            
            <div className="main-container">
                <div className="box left">
                     <img src={img2} alt="Image 2" />
                    <p>Latest Trendy Styles for Men</p>
                </div>
                <div className="box right">
                    <img src={img1} alt="Image 1" />
                    <p>Elegant & Stylish Women's Collection</p>
                </div>
            </div>

            
        </div>
    );
};

export default Body;