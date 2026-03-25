
import Image from "next/image"
import projectsIcon from './../icons/projects-icon.png'
import studentIcon from './../icons/academia.png'
import softSkillsIcon from './../icons/soft-skills-icon.png'

export default function Home() {
  return(
    <div className="wrapper">
      <div className="navbar-wrapper">
        <div className="navbar">
          <h1 className="font-large color-dark font-thin">Mert Aygun</h1>
          <p className="font-medium color-dark font-thin">2026</p>
        </div>
      </div>

      {/* Projects */}
      <div className="section-wrapper">
        <div className="section">
          <div className="heading">
            <h1 className="font-title color-dark font-thin">Projects</h1>
            <Image className="icon" alt="Projects Icon" height={50} width={50} src={projectsIcon} />
          </div>
          <div className="section-items">
            <div className="section-item">
              <p className="font-small color-dark font-thin">Coming Soon...</p>
            </div>
            <div className="section-item">
              <p className="font-small color-dark font-thin">Coming Soon...</p>
            </div>
            <div className="section-item">
              <p className="font-small color-dark font-thin">Coming Soon...</p>
            </div>
          </div>
        </div>
        
      </div>

      {/* Academia */}
      <div className="section-wrapper">
        <div className="section">
          <div className="heading">
            <h1 className="font-title color-dark font-thin">Academia</h1>
            <Image className="icon" alt="Projects Icon" height={50} width={50} src={studentIcon} />
          </div>
          <div className="section-items">
            <div className="section-item">
              <p className="font-medium color-dark font-thin">Manchester Metropolitan University</p>
              <p className="font-small color-dark font-thin">In Progress...</p>
            </div>
            <div className="section-item">
              <p className="font-medium color-dark font-thin">Wyke College</p>
              <div className="combine">
                <p className="font-small color-dark font-thin">Information Technology Extended Diploma</p>
                <div className="badge">
                  <p className="font-small color-light font-heavy">D*D*D*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      {/* Soft Skills */}
      <div className="section-wrapper">
        <div className="section">
          <div className="heading">
            <h1 className="font-title color-dark font-thin">Soft Skills</h1>
            <Image className="icon" alt="Projects Icon" height={50} width={50} src={softSkillsIcon} />
          </div>
          <div className="section-items">
            <div className="section-item">
              <p className="font-medium color-dark font-thin"></p>
              <p className="font-small color-dark font-thin">Coming Soon...</p>
            </div>
            <div className="section-item">
              <p className="font-small color-dark font-thin">Coming Soon...</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}