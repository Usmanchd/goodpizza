import React from 'react';

const About = () => {
  return (
    <React.Fragment>
      <section className="pb_section" id="section-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5">
              <div className="row">
                <div className="col">
                  <p>
                    <img
                      src="assets/images/restaurant/800x975/img_1.jpg"
                      alt="Instant"
                      className="img-fluid"
                    />
                  </p>
                </div>
                <div className="col">
                  <p>
                    <img
                      src="assets/images/restaurant/800x975/img_2.jpg"
                      alt="Instant"
                      className="img-fluid"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 pl-lg-5 pl-lg-0">
              <h2 className="mb-4 text-uppercase pb_letter-spacing-2">
                The Restaurant
              </h2>
              <p>"HERE GOES ABOUT!!"</p>

              <p></p>
              <p>
                <a
                  href="#section-menu"
                  className="smoothscroll text-danger text-uppercase"
                >
                  See our menu <i className="ion-arrow-down-c"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="pb_md_py_cover text-center cover-bg-black cover-bg-opacity-4"
        style={{
          backgroundImage: 'url(assets/images/restaurant/1900x1200/img_1.jpg)'
        }}
        id="section-home"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-9  order-md-1">
              <h2 className="heading mb-3">Delicious &amp; Nutritious</h2>
              <p className="sub-heading">"subheading"</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb_section cover-bg-cyan cover-bg-opacity-3">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-10 text-center">
              <h2 className="mb-4 text-uppercase pb_letter-spacing-2">
                What People Says...
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <div className="media d-block text-center testimonial_v1 pb_quote_v1">
                <div className="media-body">
                  <div className="quote pb_text-black">&ldquo;</div>
                  <blockquote className="mb-5 pb_font-20">
                    Good Things about shop..
                  </blockquote>
                  <img
                    className="d-flex text-center mx-auto mb-3 rounded-circle"
                    src="assets/images/persons/person_1.jpg"
                    alt="Generic placeholder"
                  />
                  <h3 className="heading">Usman Chaudhary</h3>
                  <p className="subheading">@usman</p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="media d-block text-center testimonial_v1 pb_quote_v1">
                <div className="media-body">
                  <div className="quote pb_text-black">&ldquo;</div>
                  <blockquote className="mb-5 pb_font-20">
                    Good Things about shop..
                  </blockquote>
                  <img
                    className="d-flex text-center mx-auto mb-3 rounded-circle"
                    src="assets/images/persons/person_5.jpg"
                    alt="Generic placeholder"
                  />
                  <h3 className="heading">Usman Chaudhary</h3>
                  <p className="subheading">@usman</p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="media d-block text-center testimonial_v1 pb_quote_v1">
                <div className="media-body">
                  <div className="quote pb_text-black">&ldquo;</div>
                  <blockquote className="mb-5 pb_font-20">
                    Good Things about shop..
                  </blockquote>
                  <img
                    className="d-flex text-center mx-auto mb-3 rounded-circle"
                    src="assets/images/persons/person_2.jpg"
                    alt="Generic placeholder"
                  />
                  <h3 className="heading">Usman Chaudhary</h3>
                  <p className="subheading">@usman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END section --> */}
      <section
        className="pb_md_py_cover text-center cover-bg-black cover-bg-opacity-4"
        style={{
          backgroundImage: 'url(assets/images/restaurant/1900x1200/img_1.jpg)'
        }}
        id="section-home"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-9  order-md-1">
              <h2 className="heading mb-3">Good Food, Good Taste</h2>
              <p className="sub-heading">"subheading"</p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
