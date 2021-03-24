import Link from 'next/link';
import Newsletter from './Newsletter';
const Footer = () => {
    return (
        <>
       <Newsletter />
        <footer id="rs-footer" className="rs-footer home9-style">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
                  <h3 className="widget-title">About</h3>
                  <div className="textwidget white-color pr-60 md-pr-15"><p>Lingo academy offers high-quality language courses designed exclusively by top-notch
linguists worldwide.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 footer-widget md-mb-50">
                  <h3 className="widget-title">Address</h3>
                  <ul className="address-widget">
                    <li>
                      <i className="flaticon-location" />
                      <div className="desc">374 William S Canning Blvd, River MA 2721, USA</div>
                    </li>
                    <li>
                      <i className="flaticon-call" />
                      <div className="desc">
                        <a href="tel:(+880)155-69569">(+880)155-69569</a>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-email" />
                      <div className="desc">
                        <a href="mailto:support@rstheme.com">support@rstheme.com</a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 pl-50 md-pl-15 footer-widget md-mb-50">
                  <h3 className="widget-title">About</h3>
                  <ul className="site-map">
                    <li><Link href="/allcourse"><a>All Courses</a></Link></li>
                    <li><Link href="/about"><a>About Us</a></Link></li>
                    <li><Link href="/contact"><a>Contact Us</a></Link></li>
                    <li><Link href="/"><a>Free Quizzes</a></Link></li>
                    <li><Link href="/resourses"><a>Free Resources</a></Link></li>
                    <li><Link href="/blog"><a>Blogs</a></Link></li>
                  </ul>
                </div>
                
                <div className="col-lg-3 col-md-12 col-sm-12 pl-50 md-pl-15 footer-widget md-mb-50">
                  <h3 className="widget-title">Useful Links</h3>
                  <ul className="site-map">
                    <li><Link href="/allcourse"><a href="#">Privacy Policy</a></Link></li>
                    <li><Link href="/allcourse"><a href="#">Terms & Condition</a></Link></li>
                    <li><Link href="/allcourse"><a href="#">Redeem Voucher </a></Link></li>
                    <li><Link href="/allcourse"><a href="#">Certificate Validate</a></Link></li>

                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">                    
              <div className="row y-middle">
                <div className="col-lg-4 md-mb-20">
                  <div className="footer-logo md-text-center">
                    <a href="index.html"><img src="assets/images/lingoacademy.png" alt="" /></a>
                  </div>
                </div>
                <div className="col-lg-4 md-mb-20">
                  <div className="copyright text-center md-text-left">
                    <p>© 2020 All Rights Reserved. Developed By </p>
                  </div>
                </div>
                <div className="col-lg-4 text-right md-text-left">
                  <ul className="footer-social">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-instagram" /></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                    <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div id="scrollUp" className="yellow-color">
          <i className="fa fa-angle-up" />
        </div>
        <div aria-hidden="true" className="modal fade search-modal" role="dialog" tabIndex={-1}>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span className="flaticon-cross" />
          </button>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="search-block clearfix">
                <form>
                  <div className="form-group">
                    <input className="form-control" placeholder="Search Here..." type="text" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}
export default Footer;