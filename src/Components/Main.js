import React from "react";
import Video from "./Video";

const Main = () => {
  return (
    <>
      <div className="home2-page">
        {/* <video className="body-overlay" muted autoplay loop>
          <video src="assets/images/video2.mp4" type="video/mp4">
          <source src={video} type="video/mp4" />
        </video> */}

        <Video />

        <div className="page-loader">
          <div className="bounceball"></div>
        </div>

        <span className="icon-menu">
          <span className="bar"></span>
          <span className="bar"></span>
        </span>

        {/* <div className="global-color">
          <span className="setting-toggle">
            <i className="las la-cog"></i>
          </span>
          <div className="inner">
            <div className="overlay"></div>
            <div className="global-color-option">
              <span className="close-settings">
                <i className="las la-times"></i>
              </span>
              <h2>Configuration</h2>
              <div className="global-color-option-inner">
                <p>Colors</p>
                <div className="color-boxed">
                  <a href="#" className="clr-active" onclick="color1();"></a>
                  <a href="#" onclick="color2();"></a>
                  <a href="#" onclick="color3();"></a>
                  <a href="#" onclick="color4();"></a>
                  <a href="#" onclick="color5();"></a>
                  <a href="#" onclick="color6();"></a>
                  <a href="#" onclick="color7();"></a>
                  <a href="#" onclick="color8();"></a>
                </div>

                <p>THREE DIMENSIONAL SHAPES</p>
                <ul className="themes">
                  <li>
                    <a href="home1.html">Earth Lines Sphere</a>
                  </li>
                  <li className="active">
                    <a href="home2.html">3D Abstract Ball</a>
                  </li>
                  <li>
                    <a href="home3.html">Water Waves</a>
                  </li>
                  <li>
                    <a href="home4.html">Liquids Wavy</a>
                  </li>
                  <li>
                    <a href="home6.html">Solid Color</a>
                  </li>
                  <li>
                    <a href="home5.html">Simple Strings</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}

        <div className="responsive-sidebar-menu">
          <div className="overlay"></div>
          <div className="sidebar-menu-inner">
            <div className="menu-wrap">
              <p>Menu</p>
              <ul className="menu scroll-nav-responsive d-flex">
                <li>
                  <a className="scroll-to" href="#home">
                    <i className="las la-home"></i> <span>Home</span>
                  </a>
                </li>
                <li>
                  <a className="scroll-to" href="#about">
                    <i className="lar la-user"></i> <span>About</span>
                  </a>
                </li>
                <li>
                  <a className="scroll-to" href="#resume">
                    <i className="las la-briefcase"></i> <span>Resume</span>
                  </a>
                </li>
                <li>
                  <a className="scroll-to" href="#services">
                    <i className="las la-stream"></i> <span>Services</span>
                  </a>
                </li>
                <li>
                  <a className="scroll-to" href="#skills">
                    <i className="las la-shapes"></i> <span>Skills</span>
                  </a>
                </li>
                <li>
                  <a className="scroll-to" href="#portfolio">
                    <i className="las la-grip-vertical"></i>{" "}
                    <span>Portfolios</span>
                  </a>
                </li>
                {/* <li>
                  <a className="scroll-to" href="#testimonial">
                    <i className="lar la-comment"></i> <span>Testimonial</span>
                  </a>
                </li> */}
                <li>
                  <a className="scroll-to" href="#contact">
                    <i className="las la-envelope"></i> <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="sidebar-social">
              <p>Social</p>
              <ul className="social-links d-flex align-items-center">
                <li>
                  <a href="https://www.linkedin.com/in/saichandanvanam/">
                    <i className="lab la-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Johnny19code/">
                    <i className="lab la-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/saichandan_19">
                    <i className="lab la-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ul className="menu scroll-nav d-flex">
          <li>
            <a className="scroll-to" href="#home">
              <span>Home</span> <i className="las la-home"></i>
            </a>
          </li>
          <li>
            <a className="scroll-to" href="#about">
              <span>About</span> <i className="lar la-user"></i>
            </a>
          </li>
          <li>
            <a className="scroll-to" href="#resume">
              <span>Resume</span> <i className="las la-briefcase"></i>
            </a>
          </li>
          <li>
            <a href="#services">
              <span>Services</span> <i className="las la-stream"></i>
            </a>
          </li>
          <li>
            <a className="scroll-to" href="#skills">
              <span>Skills</span> <i className="las la-shapes"></i>
            </a>
          </li>
          <li>
            <a className="scroll-to" href="#portfolio">
              <span>Portfolios</span> <i className="las la-grip-vertical"></i>
            </a>
          </li>
          {/* <li>
            <a className="scroll-to" href="#testimonial">
              <span>Testimonial</span> <i className="lar la-comment"></i>
            </a>
          </li> */}
          <li>
            <a className="scroll-to" href="#contact">
              <span>Contact</span> <i className="las la-envelope"></i>
            </a>
          </li>
        </ul>

        <div className="left-sidebar">
          <div className="sidebar-header d-flex align-items-center justify-content-between">
            <img src="assets/images/logo.png" alt="Logo" />
            <span className="designation">Web Designer </span>
          </div>
          <img className="me" src="assets/images/me.png" alt="Me" />
          <h5 className="email">saichandanvanam@gmail.com</h5>
          <h2 className="address">Hyderabad</h2>
          <p className="copyright">
            &copy; 2023 Sai Chandan. All Rights Reserved
          </p>
          <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
            <li>
              <a href="https://www.linkedin.com/in/saichandanvanam/">
                <i className="lab la-linkedin"></i>
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/saichandan_19">
                <i className="lab la-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Johnny19code/">
                <i className="lab la-github"></i>
              </a>
            </li>
          </ul>
          <a href="https://wa.me/919502531670" className="theme-btn">
            <i className="las la-envelope"></i> Hire Me!
          </a>
        </div>

        <main className="drake-main">
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <div className="left-sidebar">
                <div className="sidebar-header d-flex align-items-center justify-content-between">
                  <img src="assets/images/logo.png" alt="Logo" />
                  <span className="designation">Web Designer</span>
                </div>
                <img className="me" src="assets/images/me.png" alt="Me" />
                <h5 className="email" style={{ textAlign: "center" }}>
                  saichandanvanam@gmail.com
                </h5>
                <h2 className="address">Hyderabad</h2>
                <p className="copyright">
                  &copy; 2023 Sai Chandan. All Rights Reserved
                </p>
                <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
                  <li>
                    <a href="https://www.linkedin.com/in/saichandanvanam/">
                      <i className="lab la-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/saichandan_19">
                      <i className="lab la-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Johnny19code/">
                      <i className="lab la-github"></i>
                    </a>
                  </li>
                </ul>
                <a href="https://wa.me/919502531670" className="theme-btn">
                  <i className="las la-envelope"></i> Hire Me!
                </a>
              </div>

              <section
                className="hero-section page-section scroll-to-page"
                id="home"
              >
                <div className="custom-container">
                  <div className="hero-content content-width">
                    <div className="section-header">
                      <h4
                        className="subtitle scroll-animation"
                        data-animation="fade_from_bottom"
                      >
                        <i className="las la-home"></i> Introduce
                      </h4>
                      <h1
                        className="scroll-animation"
                        data-animation="fade_from_bottom"
                      >
                        Say Hi from <span>Sai Chandan</span>, Web Designer and
                        Developer
                      </h1>
                    </div>
                    <p
                      className="scroll-animation"
                      data-animation="fade_from_bottom"
                    >
                      I design and code beautifully simple things and i love
                      what i do. Just simple like that!
                    </p>
                    <a
                      href="#skills"
                      className="go-to-project-btn scroll-to scroll-animation"
                      data-animation="rotate_up"
                    >
                      <img src="assets/images/round-text.png" alt="" />
                      <i className="las la-arrow-down"></i>
                    </a>

                    <div className="facts d-flex">
                      <div
                        className="left scroll-animation"
                        data-animation="fade_from_left"
                      >
                        <h1>1.7</h1>
                        <p>
                          Years of <br />
                          Experience
                        </p>
                      </div>
                      <div
                        className="right scroll-animation"
                        data-animation="fade_from_right"
                      >
                        <h1>30+</h1>
                        <p>
                          projects
                          <br /> completed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                className="about-area page-section scroll-to-page"
                id="about"
              >
                <div className="custom-container">
                  <div className="about-content content-width">
                    <div className="section-header">
                      <h4
                        className="subtitle scroll-animation"
                        data-animation="fade_from_bottom"
                      >
                        <i className="lar la-user"></i> About
                      </h4>
                      <h1
                        className="scroll-animation"
                        data-animation="fade_from_bottom"
                      >
                        Every great design begin with
                        <br />
                        an even <span>better story</span>
                      </h1>
                    </div>
                    <p
                      className="scroll-animation"
                      data-animation="fade_from_bottom"
                    >
                      Since beginning my journey as a freelance designer nearly
                      1 years ago, I've done remote work for agencies, consulted
                      for startups, and collaborated with talented people to
                      create digital products for both business and consumer
                      use. I'm quietly confident, naturally curious, and
                      perpetually working on improving my chopsone design
                      problem at a time.
                    </p>
                  </div>
                </div>
              </section>

              <section
                className="resume-area page-section scroll-to-page"
                id="resume"
              >
                <div className="custom-container">
                  <div className="resume-content content-width">
                    <div className="section-header">
                      <h4
                        className="subtitle scroll-animation"
                        data-animation="fade_from_bottom"
                      >
                        <i className="las la-briefcase"></i> Resume
                      </h4>
                      <h1
                        className="scroll-animation"
                        data-animation="fade_from_bottom"
                      >
                        Education & <span>Experience</span>
                      </h1>
                    </div>

                    <div className="resume-timeline">
                      <div
                        className="item scroll-animation"
                        data-animation="fade_from_right"
                      >
                        <span className="date">2023 - Present</span>
                        <h2>Web Desinger & Team Leader</h2>
                        <p>Sieve Softech India Pvt Ltd.</p>
                      </div>
                      <div
                        className="item scroll-animation"
                        data-animation="fade_from_right"
                      >
                        <span className="date">2022 - 2023</span>
                        <h2>Web Desinger</h2>
                        <p>AskMeGuru Technologies </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                className="services-area page-section scroll-to-page"
                id="services"
              >
                <div className="custom-container">
                  <div className="services-content content-width">
                    <div className="section-header">
                      <h4
                        className="subtitle scroll-animation"
                        data-animation="fade_from_bottom"
                      >
                        <i className="las la-stream"></i> Services
                      </h4>
                      <h1
                        className="scroll-animation"
                        data-animation="fade_from_bottom"
                      >
                        My <span>Specializations</span>
                      </h1>
                    </div>

                    <div className="services-items">
                      <div
                        className="service-item scroll-animation"
                        data-animation="fade_from_bottom"
                      >
                        <i className="las la-bezier-curve"></i>
                        <h2>Website Design</h2>
                        <p>
                          I created digital products with unique ideas use
                          cutting-edge technology and design principles.
                        </p>
                        <span className="projects">20 Projects</span>
                      </div>
                      <div
                        className="service-item scroll-animation"
                        data-animation="fade_from_bottom"
                      >
                        <i className="las la-code"></i>
                        <h2>Development</h2>
                        <p>
                          I build website go live with Frontend or WordPress
                        </p>
                        <span className="projects">10 Projects</span>
                      </div>
                      <div
                        className="service-item scroll-animation"
                        data-animation="fade_from_bottom"
                      >
                        <i className="las la-bezier-curve"></i>
                        <h2>SEO/Marketing</h2>
                        <p>
                          Increase the traffic for your website with SEO
                          optimized
                        </p>
                        <span className="projects">18 Projects</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                className="skills-area page-section scroll-to-page"
                id="skills"
              >
                <div className="custom-container">
                  <div className="skills-content content-width">
                    <div className="section-header">
                      <h4
                        className="subtitle scroll-animation"
                        data-animation="fade_from_bottom"
                      >
                        <i className="las la-shapes"></i> my skills
                      </h4>
                      <h1
                        className="scroll-animation"
                        data-animation="fade_from_bottom"
                      >
                        My <span>Advantages</span>
                      </h1>
                    </div>

                    <div className="row skills text-center">
                      <div
                        className="col-md-3 scroll-animation"
                        data-animation="fade_from_left"
                      >
                        <div className="skill">
                          <div className="skill-inner">
                            <img src="assets/images/html.png" alt="Figma" />
                            <h1 className="percent">80%</h1>
                          </div>
                          <p className="name">HTML</p>
                        </div>
                      </div>
                      <div
                        className="col-md-3 scroll-animation"
                        data-animation="fade_from_left"
                      >
                        <div className="skill">
                          <div className="skill-inner">
                            <img src="assets/images/css.png" alt="Figma" />
                            <h1 className="percent">75%</h1>
                          </div>
                          <p className="name">CSS</p>
                        </div>
                      </div>
                      <div
                        className="col-md-3 scroll-animation"
                        data-animation="fade_from_left"
                      >
                        <div className="skill">
                          <div className="skill-inner">
                            <img src="assets/images/js.png" alt="Figma" />
                            <h1 className="percent">70%</h1>
                          </div>
                          <p className="name">Java Script </p>
                        </div>
                      </div>

                      <div
                        className="col-md-3 scroll-animation"
                        data-animation="fade_from_right"
                      >
                        <div className="skill">
                          <div className="skill-inner">
                            <img src="assets/images/react.png" alt="React" />
                            <h1 className="percent">60%</h1>
                          </div>
                          <p className="name">React</p>
                        </div>
                      </div>
                      <div
                        className="col-md-3 scroll-animation"
                        data-animation="fade_from_left"
                      >
                        <div className="skill">
                          <div className="skill-inner">
                            <img
                              src="assets/images/wordpress.png"
                              alt="WordPress"
                            />
                            <h1 className="percent">78%</h1>
                          </div>
                          <p className="name">WordPress</p>
                        </div>
                      </div>
                      <div
                        className="col-md-3 scroll-animation"
                        data-animation="fade_from_left"
                      >
                        <div className="skill">
                          <div className="skill-inner">
                            <img
                              src="assets/images/bootstrap.png"
                              alt="WordPress"
                            />
                            <h1 className="percent">86%</h1>
                          </div>
                          <p className="name">Bootstrap</p>
                        </div>
                      </div>
                      <div
                        className="col-md-3 scroll-animation"
                        data-animation="fade_from_bottom"
                      >
                        <div className="skill">
                          <div className="skill-inner">
                            <img
                              src="assets/images/chatgpt.png"
                              alt="Laravel/PHP"
                            />
                            <h1 className="percent">70%</h1>
                          </div>
                          <p className="name">Prompt Engineering </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                className="contact-area page-section scroll-content"
                id="contact"
              >
                <div className="custom-container">
                  <div className="contact-content content-width">
                    <div className="section-header">
                      <h4
                        className="subtitle scroll-animation"
                        data-animation="fade_from_bottom"
                      >
                        <i className="las la-dollar-sign"></i> contact
                      </h4>
                      <h1
                        className="scroll-animation"
                        data-animation="fade_from_bottom"
                      >
                        Let's Work <span>Together!</span>
                      </h1>
                    </div>
                    <h3
                      className="scroll-animation"
                      data-animation="fade_from_bottom"
                    >
                      hello@drake.design
                    </h3>
                    <p id="required-msg">
                      * Marked fields are required to fill.
                    </p>

                    <form
                      className="contact-form scroll-animation"
                      data-animation="fade_from_bottom"
                      method="POST"
                      action="https://wpriverthemes.com/HTML/drake/mailer.php"
                    >
                      {/* <div
                        className="alert alert-success messenger-box-contact__msg"
                        // style="display: none"
                        role="alert"
                      >
                        Your message was sent successfully.
                      </div> */}
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-group">
                            <label for="full-name">
                              full Name <sup>*</sup>
                            </label>
                            <input
                              type="text"
                              name="full-name"
                              id="full-name"
                              placeholder="Your Full Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-group">
                            <label for="email">
                              Email <sup>*</sup>
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Your email adress"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-group">
                            <label for="phone-number">
                              phone <span>(optional)</span>
                            </label>
                            <input
                              type="text"
                              name="phone-number"
                              id="phone-number"
                              placeholder="Your number phone"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-group">
                            <label for="subject">
                              subject <sup>*</sup>
                            </label>
                            <select name="subject" id="subject">
                              <option value="">Select a subject</option>
                              <option value="subject1">Subject 1</option>
                              <option value="subject2">Subject 2</option>
                              <option value="subject3">Subject 3</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input-group">
                            <label for="budget">
                              your budget <span>(optional)</span>
                            </label>
                            <input
                              type="number"
                              name="budget"
                              id="budget"
                              placeholder="A range budget for your project"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input-group">
                            <label for="message">message</label>
                            <textarea
                              name="message"
                              id="message"
                              placeholder="Wrire your message here ..."
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input-group upload-attachment">
                            <div>
                              <label for="upload-attachment">
                                <i className="las la-cloud-upload-alt"></i> add
                                an attachment
                                <input
                                  type="file"
                                  name="file"
                                  id="upload-attachment"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input-group submit-btn-wrap">
                            <button
                              className="theme-btn"
                              name="submit"
                              type="submit"
                              id="submit-form"
                            >
                              send message
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Main;
