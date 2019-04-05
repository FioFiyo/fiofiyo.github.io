import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h5>
          Hi, I'm <span className="bold">Fiorella Leon Gomez</span>
        </h5>

        <h3 className="bold">

          Full stack developer with Ruby roots and I'm currently exploring Node.js & React JS. When I'm not doing the former I'm most likely on Twitch or finding an API to play with <img src="https://discordemoji.com/assets/emoji/iro.png" className="emoji-desc"></img>
        </h3>

        <ExperienceSection />
        <ProjectsSection />
      </div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
