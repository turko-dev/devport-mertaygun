"use client"
import {useState, useEffect} from 'react'
import Footer from ".././components/ui/footer"
import Image from 'next/image';
import homeIcon from '../components/icons/home-icon.png'
import projectIcon from '../components/icons/projects-icon.png'
import academiaIcon from '../components/icons/academia-icon.png'
import skillsIcon from '../components/icons/soft-skills-icon.png'
import * as motion from "motion/react-client"
import drivestruct from '../imgs/drivestruct_img.png'
import mmu from '../imgs/mmu.png'
import wyke from '../imgs/wyke.jpeg'
import work from '../imgs/work.png'
import github from '../imgs/github.png'
import linkedin from '../imgs/li_logo.png'
import { useParams } from 'next/navigation';
import placeholder from '../imgs/projects-placeholder.png'
import plds from '../imgs/plds_img.png'
import mertaygun from '../imgs/mertaygun_img.png'


export default function Home() {
    const params = useParams<{ nav: "1" | "2" | "3" | "4" }>()
    const [auth, setAuth] = useState<boolean | null>(null);
    const href = async (url: string, blank: boolean) => {
        //redirect(url, type)
        if(blank) {
            window.open(url, "_blank")
        }
        else {
            window.location.href = url
        }
    }
    useEffect(()=> {
      if(params.nav == "1" || params.nav == "2" || params.nav == "3" || params.nav == "4") {
        setAuth(true);
      }
      else {
        href("/", false)
      }
    }, [])
    const [selectedFilter, setSelectedFilter] = useState<string>("All"); 
    const [activeNavigation] = useState<number>(Number(params.nav));
  
   
  return auth &&  (
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
                    className={`navbar-item ${activeNavigation == 1 ? 'navbar-item-active': ''}`} onClick={()=> href("/1", false)}>
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
                    className={`navbar-item ${activeNavigation == 2 ? 'navbar-item-active': ''}`} onClick={()=> href("/2", false)}>
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
                    className={`navbar-item ${activeNavigation == 3 ? 'navbar-item-active': ''}`} onClick={()=> href("/3", false)}>
                        <Image className="navbar-icon" height={20} width={20} alt="Icon" src={academiaIcon} />
                        <p className="font font-nav color-fg">Personal</p>
                    </motion.div>
                    <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{
                      delay:0.8,
                      duration:0.8,
                      type: "spring"
                    }}
                    className={`navbar-item ${activeNavigation == 4 ? 'navbar-item-active': ''}`} onClick={()=> href("/4", false)}>
                        <Image className="navbar-icon" height={20} width={20} alt="Icon" src={skillsIcon} />
                        <p className="font font-nav color-fg">Skills</p>
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
                
                className="font font-regular font-slim"><span className="color-primary">Website under </span><span className="color-primary-active">development</span></motion.p>

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
            <p onClick={()=>href("/2", false)} className="button font font-regular font-bg">View Projects</p>
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
              <div className="featured-projects-col" onClick={()=> {href("https://drivestruct.com/", true)}}>
                <div className="featured-projects-image" style={{backgroundImage: `url(${drivestruct.src})`}}></div>
                <div className="featured-projects-text">
                  <div className="baseline-combine">
                    <h1 className="font font-medium font-fg">DriveStruct</h1>
                    <div className="badge purple">
                      <p className="font font-small color-bg font-slim">Pioneer</p>

                    </div>
                  </div>
                  <p className="font font-regular font-fg font-slim">DriveStruct helps learner drivers find their ideal instructor - connecting learners and instructors on a feature-rich platform.</p>
                </div>
              </div>
              <div className="featured-projects-col" onClick={()=> {href("https://prolearndrivingschool.com/", true)}}>
                <div className="featured-projects-image" style={{backgroundImage: `url(${plds.src})`}}></div>
                <div className="featured-projects-text">
                  <div className="baseline-combine">
                    <h1 className="font font-medium font-fg">Pro Learn Driving School</h1>
                    <div className="badge orange">
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
            <p className="font font-regular font-slim color-fg">I'm available to contact through email through <span className="underline color-primary">info@mertaygun.co.uk</span> or you can choose to find my work in other social channels such as LinkedIn and GitHub.</p>
          </div>
          <div className="inner">
            <div className="featured-projects-row">
              <div className="featured-projects-col" onClick={()=> href("https://linkedin.com/in/mert-aygun", true)}>
                <div className="featured-projects-text">
                  <div className="baseline-combine">
                    <h1 className="font font-medium font-fg">LinkedIn</h1>
                      <Image className="img-border-square" src={linkedin} alt="GitHub Logo" height={40} />

                  </div>
                  <p className="font font-regular font-fg font-slim">View my LinkedIn profile here.</p>
                </div>
              </div>
              <div className="featured-projects-col" onClick={()=> href("https://github.com/turko-dev", true)}>
                   <div className="featured-projects-text">
                      <div className="baseline-combine">
                      <h1 className="font font-medium font-fg">GitHub</h1>
                      <Image className="img-border-square"  src={github} alt="GitHub Logo" height={40} />

                      </div>
                      <p className="font font-regular font-fg font-slim">View my GitHub profile here.</p>
                    </div> 
              </div>
            </div>
          </div>
        </div>


      </motion.div>

      {/* Projects */}
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{
        delay:0.6,
        duration:0.8,
        type: "tween"
      }} className="page" style={{display: activeNavigation == 2 ? "flex" : "none"}}>
        <div className="projects-select">
          <h1 className="font font-medium color-fg font-slim">Filter Projects</h1>
          <p className="font font-small color-fg">Applied Filter:</p>
          <p className="font font-regular color-primary font-slim">{selectedFilter}</p>


          <div className="projects-select-inner">
            <p onClick={()=> setSelectedFilter("All")} className={`font font-regular ${selectedFilter == "All" ? 'projects-selected' : ''} color-fg font-slim`}>All</p>
            <p onClick={()=> setSelectedFilter("Next.js")} className={`font font-regular ${selectedFilter == "Next.js" ? 'projects-selected' : ''} color-fg font-slim`}>Next.js</p>
            <p onClick={()=> setSelectedFilter("Website")} className={`font font-regular ${selectedFilter == "Website" ? 'projects-selected' : ''} color-fg font-slim`}>Website</p>
            <p onClick={()=> setSelectedFilter("Python")} className={`font font-regular ${selectedFilter == "Python" ? 'projects-selected' : ''} color-fg font-slim`}>Python</p>
            <p onClick={()=> setSelectedFilter("C++")} className={`font font-regular ${selectedFilter == "C++" ? 'projects-selected' : ''} color-fg font-slim`}>C++</p>
            <p onClick={()=> setSelectedFilter("JSX")} className={`font font-regular ${selectedFilter == "JSX" ? 'projects-selected' : ''} color-fg font-slim`}>JSX</p>
            <p onClick={()=> setSelectedFilter("TypeScript")} className={`font font-regular ${selectedFilter == "TypeScript" ? 'projects-selected' : ''} color-fg font-slim`}>TypeScript</p>

            <p onClick={()=> setSelectedFilter("Supabase.js")} className={`font font-regular ${selectedFilter == "Supabase.js" ? 'projects-selected' : ''} color-fg font-slim`}>Supabase.js</p>
            <p onClick={()=> setSelectedFilter("JavaScript")} className={`font font-regular ${selectedFilter == "JavaScript" ? 'projects-selected' : ''} color-fg font-slim`}>JavaScript</p>
            <p onClick={()=> setSelectedFilter("React.js")} className={`font font-regular ${selectedFilter == "React.js" ? 'projects-selected' : ''} color-fg font-slim`}>React.js</p>
            <p onClick={()=> setSelectedFilter("Software")} className={`font font-regular ${selectedFilter == "Software" ? 'projects-selected' : ''} color-fg font-slim`}>Software</p>
            <p onClick={()=> setSelectedFilter("HTML")} className={`font font-regular ${selectedFilter == "HTML" ? 'projects-selected' : ''} color-fg font-slim`}>HTML</p>
            <p onClick={()=> setSelectedFilter("CSS")} className={`font font-regular ${selectedFilter == "CSS" ? 'projects-selected' : ''} color-fg font-slim`}>CSS</p>
          </div>
        </div>
        
        <div className="vertical-combine">
        <p className="font font-large font-slim">My Projects</p>
        <p className="font font-regular font-slim">A complete list of my work including website development, software, and side projects.</p>
        </div>
        <div className="projects-gallery">
          <div className="projects-gallery-row">
            <div className="projects-gallery-col" onClick={()=> {href("https://drivestruct.com/", true)}}>
              <div className="projects-gallery-text"> 
                <h1 className="font font-medium color-fg">DriveStruct</h1>
                <p className="font font-regular color-fg font-slim">DriveStruct helps learner drivers find their ideal instructor - connecting learners and instructors on a feature-rich platform.</p>
                <p className="font font-small color-fg">Built on Next.js and Supabase.js with TypeScript</p>

              </div>

              <div className="projects-gallery-image" style={{backgroundImage: `url(${drivestruct.src})`}}></div>

            </div>
            
          </div>
          <div className="projects-gallery-row">
             <div className="projects-gallery-col" onClick={()=> {href("https://prolearndrivingschool.com/", true)}}> 
              <div className="projects-gallery-text"> 
                <h1 className="font font-medium color-fg">Pro Learn Driving School</h1>
                <p className="font font-regular color-fg font-slim">A driving school based in Manchester & Stockport helping to create confident and responsible drivers.</p>
                <p className="font font-small color-fg">Built on Next.js and Supabase.js with TypeScript</p>

              
              </div>

              <div className="projects-gallery-image" style={{backgroundImage: `url(${plds.src})`}}></div>

            </div>
          </div>
          <div className="projects-gallery-row">
             <div className="projects-gallery-col" onClick={()=> {href("https://mertaygun.co.uk/", true)}}>
              <div className="projects-gallery-text"> 
                <h1 className="font font-medium color-fg">mertaygun.co.uk</h1>
                <p className="font font-regular color-fg font-slim">A developer portfolio I built to show off my best projects and a way for people to reach me via social channels or email.</p>
                <p className="font font-small color-fg">Built on Next.js with TypeScript</p>
              </div>
              <div className="projects-gallery-image" style={{backgroundImage: `url(${mertaygun.src})`}}></div>
            </div>
          </div>
        </div>
        
      </motion.div>

      {/* Academia */}
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{
        delay:0.6,
        duration:0.8,
        type: "tween" }} className="page" style={{display: activeNavigation == 3 ? "flex" : "none"}}>
        <div className="vertical-combine">
        <p className="font font-large font-slim">Academia</p>
        <p className="font font-regular font-slim">View my academic participations.</p>
        </div>
        <div className="academia">
          {/**Middle**/}
          <div className="academia-item">
            <div className="academia-start">
              <h1 className="font font-regular color-bg">MMU</h1>
              <div className="vertical-combine">
                <p className="font font-small color-bg font-slim">Manchester Metropolitan University</p>
                <p className="font font-small color-bg font-slim">BSc Computer Science</p>
              </div>
            </div>
            <div className="academia-middle-shortest">
              <div className="line"></div>
              <p className="font font-small color-whitesmoke font-slim">2023 2026</p>
              <div className="line"></div>
            </div>
            <div className="academia-end">
              <p className="font font-small color-fg font-slim">I studied Computer Science for 3 years at Manchester Metropolitan University and hold a Bachelor of Science degree.</p>

            </div>
          </div>
          {/**Middle**/}
          <div className="academia-item">
            <div className="academia-start">
              <h1 className="font font-regular color-bg">Wyke College</h1>
              <div className="vertical-combine">
                <p className="font font-small color-bg font-slim">Wyke 6th Form College</p>
                <p className="font font-small color-bg font-slim">Extended Diploma Information Technology</p>
              </div>

            </div>
            <div className="academia-middle-shorter">
              <div className="line"></div>
              <p className="font font-small color-whitesmoke font-slim">2021 2023</p>
              <div className="line"></div>
            </div>
            <div className="academia-end">
              <p className="font font-small color-fg font-slim">During secondary education, I also studied at Wyke College in Kingston Upon Hull and hold an extended diploma in Information Technology equivalent to 3 A-Levels.</p>
            </div>
          </div>
        </div>

        <div className="vertical-combine">
        <p className="font font-large font-slim">Certifications</p>
        <p className="font font-regular font-slim">View my certifications.</p>
        </div>

        <div className="academia">
          {/**Middle**/}
          {/**Middle**/}
          <div className="academia-item">
            <div className="academia-start">
              <h1 className="font font-regular color-bg">GDPR Compliance: Essential Training</h1>
              <div className="vertical-combine">
                <p className="font font-small color-bg font-slim">By Mandy Huth</p>
                <p className="font font-small color-bg font-slim">LinkedIn Learning</p>
              </div>
            </div>
            <div className="academia-middle-shorter">
              <div className="line"></div>
              <p className="font font-small color-whitesmoke font-slim">2025</p>
              <div className="line"></div>
            </div>
            <div className="academia-end">
              <p className="font font-small color-fg font-slim">The GDPR Compliance: Essential Training course covers legal compliance regarding data and details the general data protection regulation. The course consists of 33 videos and approximately 1 hour and 24 minutes of learning content. View my certification <a href="https://www.linkedin.com/learning/certificates/e92866f6078c262625cd1df699dc77ed4df21dc6cc79a469c876349c4e523da2?trk=share_certificate" target="_blank" className="underline color-primary">here</a>.</p>
            </div>
          </div>
          <div className="academia-item">
            <div className="academia-start">
              <h1 className="font font-regular color-bg">Learning the JavaScript Language</h1>
              <div className="vertical-combine">
                <p className="font font-small color-bg font-slim">By Joe Chellman</p>
                <p className="font font-small color-bg font-slim">LinkedIn Learning</p>
              </div>
            </div>
            <div className="academia-middle-shortest">
              <div className="line"></div>
              <p className="font font-small color-whitesmoke font-slim">2025</p>
              <div className="line"></div>
            </div>
            <div className="academia-end">
              <p className="font font-small color-fg font-slim">This certification covers key areas in the JavaScript programming language. The course contains 52 videos and approximately 4 hours and 7 minutes of learning content. View my certificate <a className="underline color-primary" target="_blank" href="https://www.linkedin.com/learning/certificates/149292d4cbb73d30315e36a5c1dcb6806bd550144083c7ce8067eea455b3b24d?trk=share_certificate">here</a>.</p>

            </div>
          </div>
        </div>


      </motion.div>

      {/* Soft Skills */}
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{
        delay:0.6,
        duration:0.8,
        type: "tween" }}
      className="page" style={{display: activeNavigation == 4 ? "flex" : "none"}}>
        <p className="font font-small font-slim">softskills</p>
        <p className="font font-regular font-slim">softskills</p>
        <p className="font font-medium font-slim">softskills</p>
        <p className="font font-large font-slim">softskills</p>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  )
}