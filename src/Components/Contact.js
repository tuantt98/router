import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
          <div>
          {/* Header */}
          <header className="masthead tin-tuc">
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-lg-12 my-auto">
                  <div className="header-content mx-auto">
                    <h1 className="mb-1 text-center">Danh sách Tin tức</h1>
                    {/*<a href="detail.html#download" class="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a> */}
                  </div>
                </div>
                <div className="col-lg-5 my-auto">
                  <div className="device-container">
                    <div className="device-mockup iphone6_plus portrait white">
                      <div className="device">
                        <div className="screen">
                          {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                          {/* <img src="https://blackrockdigital.github.io/startbootstrap-new-age/img/demo-screen-1.jpg" class="img-fluid" alt=""> */}
                        </div>
                        <div className="button">
                          {/* You can hook the "home button" to some JavaScript events or just remove it */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* End Header */}
          {/* Contact */}
          <section className="page-section" id="contact">
            <div className="container">
              {/* Contact Section Heading */}
              <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
              {/* Icon Divider */}
              <div className="divider-custom">
                <div className="divider-custom-line" />
                <div className="divider-custom-icon">
                  <i className="fas fa-star" />
                </div>
                <div className="divider-custom-line" />
              </div>
              {/* Contact Section Form */}
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                  <form name="sentMessage" id="contactForm" noValidate="novalidate">
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Name</label>
                        <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." aria-invalid="false" />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Email Address</label>
                        <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Phone Number</label>
                        <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Message</label>
                        <textarea className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <br />
                    <div id="success" />
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* End Contact */}
        </div>
        
        )
    }
}
