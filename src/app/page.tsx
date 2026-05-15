"use client"
import {useState, useEffect} from 'react'
import Footer from "./components/ui/footer"
import Image from 'next/image';
import homeIcon from './components/icons/home-icon.png'
import projectIcon from './components/icons/projects-icon.png'
import academiaIcon from './components/icons/academia-icon.png'
import skillsIcon from './components/icons/soft-skills-icon.png'
import * as motion from "motion/react-client"
import drivestruct from './imgs/drivestruct_img.png'
import mmu from './imgs/mmu.png'
import wyke from './imgs/wyke.jpeg'
import work from './imgs/work.png'
import github from './imgs/github.png'
import linkedin from './imgs/li_logo.png'

import placeholder from './imgs/projects-placeholder.png'
import plds from './imgs/plds_img.png'
import { redirect } from 'next/navigation';

export default function Home() {

  const href = async (url: string) => {
    //redirect(url, type)
  }


  const [activeNavigation, setActiveNavigation] = useState<1 | 2 | 3 | 4>(1);
  useEffect(()=> {
    scrollTo(0, 0)
  }, [activeNavigation])
  return (
    <div className="page-wrapper">
      {/* Navigation */}
      <div className="navbar-wrapper">
            <div className="navbar">
                <motion.p
                initial={{opacity:0, y: -20}}
                animate={{opacity:1, y: 0}}
                transition={{
                  delay:0,
                  duration:0.8,
                  type: "spring"
                }}
                
                className="font font-regular color-fg">Mert Aygun</motion.p>
                <motion.div 
                initial={{opacity:0, y: 20}}
                animate={{opacity:1, y: 0}}
                transition={{
                  delay:0.4,
                  duration:0.8,
                  type: "spring"
                }}
                
                
                className="navbar-items">
                    <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{
                      delay:0.5,
                      duration:0.8,
                      type: "spring"
                    }}
                    className={`navbar-item ${activeNavigation == 1 ? 'navbar-item-active': ''}`} onClick={()=> setActiveNavigation(1)}>
                        <Image className="navbar-icon" height={20} width={20} alt="Icon" src={homeIcon} />
                        <p className="font font-nav color-fg">Home</p>
                    </motion.div>
                    <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{
                      delay:0.6,
                      duration:0.8,
                      type: "spring"
                    }}
                    className={`navbar-item ${activeNavigation == 2 ? 'navbar-item-active': ''}`} onClick={()=> setActiveNavigation(2)}>
                        <Image className="navbar-icon" height={20} width={20} alt="Icon" src={projectIcon} />

                        <p className="font font-nav color-fg">Projects</p>
                    </motion.div>
                    <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{
                      delay:0.7,
                      duration:0.8,
                      type: "spring"
                    }}
                    className={`navbar-item ${activeNavigation == 3 ? 'navbar-item-active': ''}`} onClick={()=> setActiveNavigation(3)}>
                        <Image className="navbar-icon" height={20} width={20} alt="Icon" src={academiaIcon} />
                        <p className="font font-nav color-fg">Academia</p>
                    </motion.div>
                    <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{
                      delay:0.8,
                      duration:0.8,
                      type: "spring"
                    }}
                    className={`navbar-item ${activeNavigation == 4 ? 'navbar-item-active': ''}`} onClick={()=> setActiveNavigation(4)}>
                        <Image className="navbar-icon" height={20} width={20} alt="Icon" src={skillsIcon} />
                        <p className="font font-nav color-fg">Soft Skills</p>
                    </motion.div>

                </motion.div>
                <motion.p 
                initial={{opacity:0, y: -20}}
                animate={{opacity:1, y:0}}
                transition={{
                  delay:0.1,
                  duration:0.8,
                  type: "spring"
                }}
                
                className="font font-regular font-slim"><span className="color-primary">20</span><span className="color-primary-active">26</span></motion.p>

            </div>
        </div>


      {/* Page Content */}


      {/* Homepage */}
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{
        delay:0.6,
        duration:0.8,
        type: "tween"
      }}
      className="page" style={{display: activeNavigation == 1 ? "flex" : "none"}}>
        <div className="homepage-hero">
          <div className="homepage-hero-content">
            <h1 className="font font-large font-slim font-fg">My Projects</h1>
            <p className="font font-regular font-slim font-fg">This portfolio features projects with real-world use, spanning a range of application development tools and technical areas, from low-level programming demonstrations to websites that solve problems in key areas.</p>
            <p onClick={()=>setActiveNavigation(2)} className="button font font-regular font-bg">View Projects</p>
          </div>
          <div className="homepage-hero-image" style={{backgroundImage: `url(${placeholder.src})`}}>

          </div>
        </div>
        <div className="featured-projects">
          <div className="vertical-combine">
            <p className="font font-large font-slim color-fg">Featured Projects</p>
            <p className="font font-regular font-slim color-fg">These are some of the projects i'm most proud of, and what i've been working on recently. Together, they may give an idea as to what products I develop and where my skill-set lies.</p>
          </div>
          <div className="inner">
            <div className="featured-projects-row">
              <div className="featured-projects-col" onClick={()=> {href("https://drivestruct.com/")}}>
                <div className="featured-projects-image" style={{backgroundImage: `url(${drivestruct.src})`}}></div>
                <div className="featured-projects-text">
                  <div className="between-combine">
                    <h1 className="font font-medium font-fg">DriveStruct</h1>
                    <div className="badge-purple">
                      <p className="font font-small color-bg font-slim">Pioneer</p>

                    </div>
                  </div>
                  <p className="font font-regular font-fg font-slim">DriveStruct helps learner drivers find their ideal instructor - connecting learners and instructors on a feature-rich platform.</p>
                </div>
              </div>
              <div className="featured-projects-col" onClick={()=> {href("https://prolearndrivingschool.com/")}}>
                <div className="featured-projects-image" style={{backgroundImage: `url(${plds.src})`}}></div>
                <div className="featured-projects-text">
                  <div className="between-combine">
                    <h1 className="font font-medium font-fg">Pro Learn Driving School</h1>
                    <div className="badge-orange">
                      <p className="font font-small color-bg font-slim">Website</p>

                    </div>
                  
                  </div>
                  <p className="font font-regular font-fg font-slim">A driving school based in Manchester & Stockport helping to create confident and responsible drivers.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="about-me">
          <div className="vertical-combine">
            <p className="font font-large font-slim color-fg">About Me</p>
            <p className="font font-regular font-slim color-fg">My name's Mert, and i'm a software developer from the UK. I'm currently working on <a className="underline" href="https://drivestruct.com/" target="_blank">drivestruct.com</a> beside building other software applications that solve real-world problems.</p>
          </div>
          <div className="inner">
            <div className="projects-row">


              <div className="projects-col">
                <div className="projects-text">
                  <Image src={mmu} alt="MMU Logo" height={40} />
                  <h1 className="font font-regular color-fg">Manchester Metropolitan University</h1>
                  <p className="font font-regular color-fg font-slim">I studied Computer Science for 3 years at Manchester Metropolitan University and currently hold a <span className="underline">Bachelor of Science</span> degree.</p>
                </div>
              </div>

              <div className="projects-col">
                <div className="projects-text">
                  <Image className="img-border" src={wyke} alt="Wyke Logo" height={40} />
                  <h1 className="font font-regular color-fg">Wyke College</h1>
                  <p className="font font-regular color-fg font-slim">During secondary education, I also studied at Wyke College in Kingston Upon Hull and hold an extended diploma in Information Technology equivalent to 3 A-Levels.</p>
                </div>
              </div>

              <div className="projects-col">
                <div className="projects-text">
                  <Image className="img-border" src={work} alt="Experience Logo" height={40} />
                  <h1 className="font font-regular color-fg">Pre-Graduate Work Experience</h1>
                  <p className="font font-regular color-fg font-slim">Prior to graduating, I juggled jobs often as a waiter, kitchen porter, service-desk, leaflet distributor, and web-development freelancer during my years at university.</p>
                </div>
              </div>


            </div>
          </div>
        </div>
        <div className="contact">
          <div className="vertical-combine">
            <p className="font font-large font-slim color-fg">Contact</p>
            <p className="font font-regular font-slim color-fg">I'm available to contact through email or you can choose to find my work in other social channels such as LinkedIn and GitHub.</p>
          </div>
          <div className="inner">
            <div className="featured-projects-row">
              <div className="featured-projects-col">
                <div className="featured-projects-text">
                  <div className="between-combine">
                    <h1 className="font font-medium font-fg">LinkedIn</h1>
                      <Image className="img-border-square" src={linkedin} alt="GitHub Logo" height={40} />

                  </div>
                  <p className="font font-regular font-fg font-slim">View my LinkedIn profile here.</p>
                </div>
              </div>
              <div className="featured-projects-col">
                   <div className="featured-projects-text">
                      <div className="between-combine">
                      <h1 className="font font-medium font-fg">GitHub</h1>
                      <Image className="img-border-square" src={github} alt="GitHub Logo" height={40} />

                      </div>
                      <p className="font font-regular font-fg font-slim">View my GitHub profile here.</p>
                    </div> 
              </div>
            </div>
          </div>
        </div>


      </motion.div>

      {/* Projects */}
      <div className="page" style={{display: activeNavigation == 2 ? "flex" : "none"}}>
        <p className="font font-small font-slim">projects</p>
        <p className="font font-regular font-slim">projects</p>
        <p className="font font-medium font-slim">projects</p>
        <p className="font font-large font-slim">projects</p>
      </div>

      {/* Academia */}
      <div className="page" style={{display: activeNavigation == 3 ? "flex" : "none"}}>
        <p className="font font-small font-slim">academia</p>
        <p className="font font-regular font-slim">academia</p>
        <p className="font font-medium font-slim">academia</p>
        <p className="font font-large font-slim">academia</p>
      </div>

      {/* Soft Skills */}
      <div className="page" style={{display: activeNavigation == 4 ? "flex" : "none"}}>
        <p className="font font-small font-slim">softskills</p>
        <p className="font font-regular font-slim">softskills</p>
        <p className="font font-medium font-slim">softskills</p>
        <p className="font font-large font-slim">softskills</p>
      </div>


      {/* Footer */}
      <Footer />
    </div>
  )
}