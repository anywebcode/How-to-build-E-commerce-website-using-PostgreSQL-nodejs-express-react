/* ***********HomeScreen.js Code  **********/


import React from 'react'
import { Link } from 'react-router-dom';
import '../ScreenCss/HomeScreen.css';
export default function HomeScreen() {
    return (
        <div>
            <div className='header'>
            <div className='container'>
            <div className='navbar'>
                <div>
                    <img className='logo' src="/images/logo1.png" alt=''/>
                </div>
                <nav>
                    <ul className='main-nav'>
                        <li><Link>Products</Link> </li>
                        <li><Link>About</Link> </li>
                        <li><Link>Contact</Link> </li>
                        <li><Link>Cart</Link></li>
                        <li><Link>Login</Link> </li>      
                    </ul>
                </nav>

            </div>
            <div className='row'>
                <div className='col-1'>
                    <h1>Style is a way to say who <br/> you are without having to speak</h1>
                    <p>Hard work beats talent when talent doesn't work hard</p>
                    <Link to='' className='btn' >Explore Now &#8594;</Link>
                </div>
                <div className='col-1'>
                    <img src='/images/fashion.png' alt=''/>
                </div>
            </div>
            </div>
            </div>
            <div className='small-categ'>
                <p>Note:All image Use on this website only for education </p>
                <h2 className='title'>Featured Products</h2>
                <div className='row'>
                    <div className='col-3'>
                        <img src='/images/suit.png' alt=''/>
                        <h4>Suit</h4>
                        <div className='rating'>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <p>$70</p>
                    </div>
                    <div className='col-3'>
                        <img src='/images/pant.png' alt=''/>
                        <h4>Pant</h4>
                        <div className='rating'>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <p>$50</p>
                    </div>
                    <div className='col-3'>
                        <img src='/images/Smart Watch.png' alt=''/>
                        <h4>Smart Watch</h4>
                        <div className='rating'>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <p>$20</p>
                    </div>
                    <div className='col-3'>
                        <img src='/images/camera.png' alt=''/>
                        <h4>Shocks</h4>
                        <div className='rating'>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <p>$70</p>
                    </div>
                </div>
                <h2 className='title'>Latest Products</h2>
                    <div className='row'>
                <div className='col-3'>
                        <img src='/images/shirt.png' alt=''/>
                        <h4>Slime Shirt</h4>
                        <div className='rating'>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <p>$70</p>
                    </div>
                    <div className='col-3'>
                        <img src='/images/shoe.png' alt=''/>
                        <h4>Shoe</h4>
                        <div className='rating'>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <p>$70</p>
                    </div>
                    <div className='col-3'>
                        <img src='/images/bag.png' alt=''/>
                        <h4>Hp Bags</h4>
                        <div className='rating'>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <p>$70</p>
                    </div>
                    </div>
            </div>
            <div className='deal'>
            <div className='small-categ'>
                <div className='row'>
                    <div className='col-1'>
                        <img src='/images/smartBand.png' alt='' className='offer-img'/>
                    </div>
                    <div className ='col-1'>
                        <p>Exclusively Available on E-commerce</p>
                        <h1>Smart Band</h1>
                        <small>
                        Samsung Galaxy Fit2 Smart Band (1.1" AMOLED Display, 5 ATM Water Resistance, 90+ Workout Support,Sleep Score, 75 Watch Faces, Notification and Quick Replies).</small>
                        <Link to='' className='btn'>Buy Now &#8594; </Link>
                    </div>
                </div>
            </div>
            </div>
            <div className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='footer-col-2'>
                            <img src='/images/logo1.png' alt=''/>
                            <p></p>
                        </div>
                        <div className='footer-col-3'>
                         <h3>UseFul Link</h3>  
                         <ul>
                             <li>Coupons</li>
                             <li>Return Policy</li>
                             <li>Blog Post</li>
                             <li>Join Affiliate</li>
                            </ul> 
                        </div>
                        <div className='footer-col-4'>
                         <h3>UseFul Link</h3>  
                         <ul>
                             <li>Facebook</li>
                             <li>Instagram</li>
                             <li>Blog Post</li>
                             <li>Youtube</li>
                            </ul> 
                        </div>
                    </div>
                    <p className='copyright'>&#169; Copyright 2021 - Anywebcode</p>
                </div>
            </div>

        </div>
    )
}
