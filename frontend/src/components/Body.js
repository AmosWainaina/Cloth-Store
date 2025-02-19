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

            <div class="services">
            <div class="container">
                <h1 class="sub-title">Why Choose Us</h1>
                    <div class="services-list">
                        <div>
                            <i class="fa-solid fa-truck-fast"></i>
                            <h2>Shipping</h2>
                            <p>Free shipping on all orders over $50,and arrival within 3-5 business days</p>
                            
                        </div>
    
                        <div>
                            <i class="fa-solid fa-receipt"></i>
                            <h2>Availability</h2>
                            <p>Available to you 24/7,365 days a year,With new products added daily</p>
                            
                        </div>
    
                        <div>
                             <i class="fa-solid fa-medal"></i>
                            <h2>Waranty</h2>
                            <p>Extended warranty on all products,30 days money back guarantee</p>
                            
                        </div>
                    </div>
            </div>
        </div>

            

            <div class="services">
               <div class="container">
                  <h1 class="sub-title">Why Choose Us</h1>
                     <div class="services-list">
                         <div>
                            <i class="fa-solid fa-truck-fast"></i>
                            <h2>Shipping</h2>
                            <p>Free shipping on all orders over $50,and arrival within 3-5 business days</p>
                            
                         </div>
    
                        <div>
                            <i class="fa-solid fa-receipt"></i>
                            <h2>Availability</h2>
                            <p>Available to you 24/7,365 days a year,With new products added daily</p>
                            
                        </div>
    
                        <div>
                             <i class="fa-solid fa-medal"></i>
                            <h2>Waranty</h2>
                            <p>Extended warranty on all products,30 days money back guarantee</p>
                            
                        </div>
                    </div>
              </div>
          </div>

          


            
        </div>
        
        
       
    );
};

export default Body;