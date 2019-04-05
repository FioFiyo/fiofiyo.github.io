import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
            A web developer with an affinity to the skateboarding scene. I like creative stuff, playing electric guitar and soccer is part of me at least once a week.
          <div className="emoji">
            ⚽️ ♬ &nbsp;
             <img src="https://discordemoji.com/assets/emoji/WelcomeToTheInternet.png" className="comp-emoji"/> &nbsp;
             <a href="https://www.ruby-lang.org" emoji-code="Ruby"><img class="emojidex-emoji" src="https://cdn.emojidex.com/emoji/px16/Ruby.png" emoji-code="Ruby" alt="Ruby" /></a>
          </div>
        </div>
      </div>
    )
  }
}

export default About