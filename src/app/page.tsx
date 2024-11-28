"use client"
import * as motion from "framer-motion/client"
import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link"

export default function Home() {
  const projectList = {
    sweetmapper: "https://github.com/turko-dev/sweetmapper",
    codetagmarkup: "https://codetagmarkup.vercel.app/",
    curvitae: "/",
    turkolib: "https://github.com/turko-dev/turko-lib",
    
    certificate: "https://www.freecodecamp.org/certification/Mert_Aygun/responsive-web-design",

    insta: "https://www.instagram.com/turko.mcr/",
    linkedin: "https://www.linkedin.com/in/mert-aygun/",
    github: "https://github.com/turko-dev"
  }
  function newWindow(url: string) {
    window.open(url, "_blank");
  }
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  return (
    <div>
      <div className="nav_wrapper">
        <nav>
          <div className="nav_links">
          <h1 className="paragraph ftext">Mert Aygun</h1>

          </div>
          <div className="nav_links">
            <a href="#portfolio" className="paragraph ftext">Portfolio</a>
            <a href="#experience" className="paragraph ftext">Experience</a>
            <a href="#about" className="paragraph ftext">About</a>
            <a href="#contact" className="paragraph ftext">Contact</a>
          </div>
          <div className="nav_links">
            <h1 className="paragraph ftext"><i>2024</i></h1>

          </div>
        </nav>
      </div>
      <div className="main">
        <div className="hero">
          <div className="hero_copy">
            <motion.p 
            initial={{ y: 100, opacity:0 }}
            animate={{ y: 0, opacity:1 }}
            transition={{
              delay:0.1,
              type: "spring",
              stiffness: 260,
              damping: 50
            }}
            className="heading shadow ftext">I&apos;m <span className="title">Mert Aygun</span></motion.p>
            <motion.p 
            initial={{ y: 100, opacity:0 }}
            animate={{ y: 0, opacity:1 }}
            transition={{
              delay:0.1,
              type: "spring",
              stiffness: 260,
              damping: 40
            }}
            className="paragraph nav_box ftext"><i>Software Developer  & Disc Jockey</i></motion.p>
            <motion.a href="#contact" whileHover={{scale:1.05}}
            whileTap={{scale:0.8,}} initial={{ y: 100, opacity:0 }}
            animate={{ y: 0, opacity:1 }}
            transition={{
              type: "spring",
              duration:0.5
              
            }} className="hero_button_margin paragraph btext button1">Contact Me</motion.a>
          </div>
          <motion.div 
          whileHover={{scale:0.95}}
          whileTap={{scale:1,}} initial={{ x: 100, opacity:0 }}
          animate={{ x: 0, opacity:1 }} transition={{
            type: "spring",
            duration:0.5,

          }} className="hero_img">
            <div className="hero_img_links">
              <Link target="_blank" href="https://www.instagram.com/turko.mcr/" className="fit_width paragraph btext button2">Instagram</Link>
              <Link target="_blank" href="https://www.linkedin.com/in/mert-aygun/" className="fit_width paragraph btext button2">LinkedIn</Link>
              <Link target="_blank" href="https://github.com/turko-dev" className="fit_width paragraph btext button2">GitHub</Link>
            </div>
          </motion.div>
        </div>
        <div className="portfolio">
          <div  className="portfolio_heading">
            <motion.p initial={{ x: 100, opacity:0 }} animate={{ x: 0, opacity:1 }} transition={{type: "spring",duration:0.5,delay:0.2,}} id="portfolio" className="heading shadow ftext">Portfolio</motion.p>
          </div>
          <div ref={ref} className="portfolio_grid">
              <div>
                  <motion.div  style={{transform: isInView ? "none" : "translateY(100px)",opacity: isInView ? 1 : 0,transition: "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"}}
                    onClick={()=> {newWindow(projectList.sweetmapper)}}
                    className="portfolio_grid_item item1">
                
                      <div className="item_heading">
                        <h1 className="heading ftext">SweetMapper</h1>
                          <div className="py_bg nav_box">
                            <p className="paragraph btext">.py</p>
                          </div>
                      </div>
                      <p className="paragraph ftext">SweetMapper is a project designed to source, compile, and organize detailed marketing information about physical businesses and places using the Google Places API.</p>
                      <div className="item_heading">
                        <div className="nav_box">
                          <p className="paragraph ftext">Cold Calling & Scraping</p>
                        </div>
                      </div>
                  </motion.div>
              </div>
              <div ref={ref}>
                  <motion.div  style={{transform: isInView ? "none" : "translateY(100px)", opacity: isInView ? 1 : 0, transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.15s"}}className="portfolio_grid_item item25"
                  onClick={()=> {newWindow(projectList.turkolib)}}>
                    <div className="item_heading">
                      <h1 className="heading ftext">Turko-Lib GUI</h1>
                      <div className="py_bg nav_box">
                        <p className="paragraph btext">.py</p>
                      </div>
                    </div>
                    <p className="paragraph ftext">Turko-Lib GUI is a GUI framework that allows for GUI applications to be created in Python with features similar to web design concepts.</p>
                    <div className="item_heading">
                      <div className="nav_box">
                        <p className="paragraph ftext">GUI Framework</p>
                      </div>  
                    </div>
                </motion.div>
              </div>
            
              <div>
                <motion.div   style={{transform: isInView ? "none" : "translateY(100px)", opacity: isInView ? 1 : 0, transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"}}className="portfolio_grid_item item3"
                onClick={()=> {newWindow(projectList.curvitae)}}
                  ><div className="item_heading_baseline">
                    <h1 className="heading ftext">Curvitae</h1>
                    <div className="ts_bg nav_box">
                      <p className="paragraph btext">.ts</p>
                    </div>
                  </div>
                  <p className="paragraph ftext">(Work In Progress) Curvitae is an online CV templating and hosting platform that attempts to change the way we see CVs and job applications.</p>
                  <div className="item_heading">
                    <div className="nav_box">
                      <p className="paragraph ftext">Online Platform</p>
                    </div>  
                  </div>
                </motion.div>
              </div>

               <div>
                <motion.div  style={{transform: isInView ? "none" : "translateY(100px)",opacity: isInView ? 1 : 0,transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.05s"}}
                  onClick={()=> {window.open("/")}}
                  className="portfolio_grid_item item4">
            
                    <div className="item_heading_baseline">
                      <h1 className="heading ftext">My Portfolio</h1>
                      <div className="ts_bg nav_box">
                        <p className="paragraph btext">.ts</p>
                      </div>
                    </div>
                    <p className="align-right paragraph ftext">This portfolio was designed and implemented by myself only and it demonstrates my abilities as a Web Designer and Software Developer</p>
                    <div className="item_heading_corner">
                      <div className="nav_box">
                        <p className="paragraph ftext">Web Design & Development</p>
                      </div>  
                    </div>

                </motion.div>
              </div>

              <div>
                <motion.div  style={{transform: isInView ? "none" : "translateY(100px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.075s"}} 
                  className="portfolio_grid_item item25">
                    <div className="item_heading">
                        <h1 className="heading ftext">Tadow</h1>
                          <div className="py_bg nav_box">
                            <p className="paragraph btext">.cpp</p>
                          </div>
                      </div>
                      <p className="paragraph ftext">Tadow is a code text editor made natively for desktops such as Windows, Mac & Linux and is specifically used to develop Next.js projects.</p>
                      <div className="item_heading">
                        <div className="nav_box">
                          <p className="paragraph ftext">Text Editor</p>
                        </div>
                    </div>

                  </motion.div>
              </div>

              <div>
                <motion.div onClick={()=> {newWindow(projectList.codetagmarkup)}} style={{transform: isInView ? "none" : "translateY(100px)",
                  opacity: isInView ? 1 : 0,
                  
                  transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1"}}
                  className="portfolio_grid_item item6">
                      <div className="item_heading">
                        <h1 className="heading ftext">CodeTagMarkup</h1>
                          <div className="js_bg nav_box">
                            <p className="paragraph ftext">.js</p>
                          </div>
                      </div>
                      <p className="paragraph ftext">CodeTagMarkup is a tool that allows for code tags to be displayed within HTML itself such as for websites showcasing coding tutorials and samples.</p>
                      <div className="item_heading">
                        <div className="nav_box">
                          <p className="paragraph ftext">Markup Converter</p>
                        </div>
                      </div>

                  </motion.div>
              </div>
           

          </div>
          <div id="experience" className="experience">
          <p className="heading shadow ftext">Education & Experience</p>
            <div className="experience_info">
              <div className="experience_item">
                <div className="wyke_logo"></div>
                <div className="nav_box">
                  <p className="paragraph ftext">Wyke 6th Form College</p>
                </div>
                <div className="js_bg nav_box">
                <p className="paragraph ttext">IT Extended Diploma</p>
                </div>
                <p className="paragraph btext"><i>D*D*D*</i></p>
              </div>

              <div className="experience_item">
                <div className="mmu_logo"></div>
                <div className="nav_box">
                  <p className="paragraph ftext">Manchester Metropolitan University</p>
                </div>
                <div className="js_bg nav_box">
                <p className="paragraph ttext">BSc Computer Science</p>
                </div>
                <p className="paragraph btext"><i>Grades N/a</i></p>
              </div>
            </div>
            <div className="experiences">
              <div className="more_experiences_info">
                <div  onClick={()=> {newWindow(projectList.certificate)}} className="fcc experience_item">
                  <div className="fcc_logo"></div>
                  <div className="nav_box">
                    <a className="paragraph ftext">Responsive Web Design Certificate</a>
                  </div>
                  <div className="js_bg nav_box">
                  <p className="paragraph ftext">FreeCodeCamp</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div id="about" className="about">
          <p className="heading shadow ftext">About</p>
            <div className="about_info">
                  <div className="about_section">
                    <div className="nav_box">
                      <p className="paragraph ftext">Born in Kingston Upon Hull, UK. I had an upbringing heavily involving computer hardware and computer-related media around me.</p>
                    </div>
                  </div>
                  <div className="about_section">
                    <div className="nav_box">
                      <p className="paragraph ftext">Taught myself Java at 14 years old to a level where I could create system apps and complicated CLI applications.</p>
                    </div>
                  </div>
                  <div className="about_section">
                    <div className="nav_box">
                      <p className="paragraph ftext">Began learning Python & JavaScript at 17 and mastered the two by the age of 19.</p>
                    </div>
                  </div>
                  <div className="about_section">
                    <div className="nav_box">
                      <p className="paragraph ftext">Started a web-design agency at 18 with my friend from University and failed miserably.</p>
                    </div>
                  </div>
                  <div className="about_section">
                    <div className="nav_box">
                      <p className="paragraph ftext">Used this failure as fuel to keep thinking of ideas that could push me into the industry.</p>
                    </div>
                  </div>
                  <div className="about_section">
                    <div className="nav_box">
                      <p className="paragraph ftext">At 20, I started to develop my own Python GUI Framework as a more functional alternative to Tkinter and PyQT</p>
                    </div>
                  </div>
            </div>
            
          </div>
          <div className="skills">
          <p className="heading shadow ftext">Under The Belt</p>
            <div className="about_info">
                  <div className="about_section">
                    <div className="py_bg nav_box">
                      <p className="paragraph btext">Python</p>


                    </div>
                  </div>
                  <div className="about_section">
                    <div className="js_bg nav_box">
                      <p className="paragraph ftext">JavaScript</p>
                    </div>
                  </div>
                  <div className="about_section">
                    <div className="nav_box">
                      <p className="paragraph ftext">Java</p>
                    </div>
                  </div>
                  <div className="about_section">
                    <div className="ts_bg nav_box">
                      <p className="paragraph btext">TypeScript</p>
                    </div>
                  </div>
                  <div className="about_section">
                    <div className="nav_box">
                      <p className="paragraph ftext">C#</p>
                    </div>
                  </div>
                  <div className="about_section">
                    <div className="html_bg nav_box">
                      <p className="paragraph btext">HTML</p>
                    </div>
                  </div>
                  <div className="about_section">
                    <div className="ts_bg nav_box">
                      <p className="paragraph btext">CSS</p>
                    </div>
                  </div>
                  <div className="about_section">
                    <div className="nav_box">
                      <p className="paragraph ftext">SQL</p>
                    </div>
                  </div>
            </div>
            
          </div>
          <div id="contact" className="contact">
            <p className="heading shadow ftext">Contact</p>
            <div className="contact_form">
              <a href="mailto:turkoai@protonmail.com" className="email heading wshadow btext">Send me an email</a>
              <p className="paragraph btext">or send me a direct message through my social media.</p>

              <div className="socials">
                <motion.div 
                whileHover={{scale:0.95}}
                whileTap={{scale:1,}} initial={{ x: -50, opacity:0 }}
                animate={{ x: 0, opacity:1 }} transition={{
                  type: "spring",
      
                }}
                onClick={()=> {newWindow(projectList.insta)}} className="socials_insta"></motion.div>
                <motion.div
                whileHover={{scale:0.95}}
                whileTap={{scale:1,}} initial={{ y: -20, opacity:0 }}
                animate={{ y: 0, opacity:1 }} transition={{
                  type: "spring",
      
                }}
                onClick={()=> {newWindow(projectList.linkedin)}} className="socials_linkedin"></motion.div>
                <motion.div 
                whileHover={{scale:0.95}}
                whileTap={{scale:1,}} initial={{ x: 50, opacity:0 }}
                animate={{ x: 0, opacity:1 }} transition={{
                  type: "spring",
      
                }}
                onClick={()=> {newWindow(projectList.github)}} className="socials_github"></motion.div>

              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
    
  );
}
