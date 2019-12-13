import React from 'react';

const Section = () => {
  return (
    <section
      className="pb_cover_v1 cover-bg-black cover-bg-opacity-4 text-center"
      style={{
        backgroundImage: 'url(assets/images/restaurant/1900x1200/1.jpg)'
      }}
      id="section-home"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-9  order-md-1">
            {/* <a
                href="https://vimeo.com/channels/staffpicks/93951774"
                className="play popup-vimeo"
              >
                <i className="ion-ios-play"></i>
              </a> */}
            <h1 className="display-1" style={{ color: 'black' }}>
              <span style={{ color: '#c4302b' }}>Good</span>Pizza
            </h1>
            <div className="sub-heading">
              <p className="mb-5">
                <b>The Taste you wish for!</b>
              </p>
            </div>
            <p>
              <a
                href="#section-menu"
                role="button"
                className="btn smoothscroll pb_outline-light rounded-0 btn-xl pb_font-13 pb_letter-spacing-2 p-3"
              >
                Order
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
