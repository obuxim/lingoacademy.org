import React from 'react'

const Newsletter = () => {
    return (
        <>
      <div className="rs-newsletter style1 event2-bg yellow-color mb--90 sm-mb-0 sm-pb-70">
        <div className="container">
          <div className="newsletter-wrap">
            <div className="row y-middle">
              <div className="col-lg-6 col-md-12 md-mb-30">
                <div className="content-part">
                  <div className="sec-title">
                    <div className="title-icon md-mb-15">
                      <img src="assets/images/newsletter2.png" alt="images" />
                    </div>
                    <h2 className="title mb-0 white-color">Subscribe to Newsletter</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <form className="newsletter-form">
                  <input type="email" name="email" placeholder="Enter Your Email" required />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Newsletter
