import React from 'react';
import "./footer.css"

const Footer = () => {
    return ( 
   
     
  <footer className="footer py-4 text-light">
    <div className="container-fluid">
      <p className="text-center">ما را در شبکه های اجتماعی دنبال کنید و از جدیدترین اخبار مطلع شوید</p>
      <div className="row col-md-12 my-1">
        <div className="footer-link col-md-4">
          <h5>دسترسی سریع
          </h5>
          <div><p><i className="fa fa-angle-left ml-1"></i> ارتباط با ما</p></div>
          <div><p><i className="fa fa-angle-left ml-1"></i>درباره فروشگاه</p></div>
          <div><p><i className="fa fa-angle-left ml-1"></i>ارسال سریع کالا</p></div>
          <div><p><i className="fa fa-angle-left ml-1"></i>سوالات متداول</p></div>
        </div>
        <div className="col-md-4 my-1">
          <p> <span className="myfooter-icon ml-1"> <i className="fa fa-phone footer-icon"></i></span> <span
              className="font-weight-bold">شماره تماس</span>
          <div className="footer-line"></div>
          </p>
          <p>021-88888888</p>


          <p> <span className="myfooter-icon ml-1"> <i className="fa fa-envelope footer-icon"></i></span> <span
              className="font-weight-bold"> پست الکترونیکی</span>
          <div className="footer-line"></div>
          </p>
          <p> info.shop@gmail.com</p>
          <address>
            <p>
              <span className="myfooter-icon ml-1"> <i className="fa fa-map-marker-alt footer-icon"></i></span>
              <span className="font-weight-bold">آدرس</span>
            <div className="footer-line"></div>
            تهران، خیابان سهروردی

            </p>
          </address>
        </div>

        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <img src="/images/banilogo.svg" alt="logo" className="footer-img img-fluid"/>
        </div>
      </div>
    </div>
  </footer>

            
     
     );
}
 
export default Footer;