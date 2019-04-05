import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import ico from '../../assets/images/projects/eth-logo-sm.png'
import letsWatchThis from '../../assets/images/projects/lets-watch-this.png'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={letsWatchThis}
            colour="rgb(246, 185, 176)"
            title="Lets Watch This"
            link="https://github.com/FioFiyo/discord_bot"
            timeperiod="2018"
            subtitle=" Bot built using Ruby and Discord's API. Helps setup a list of movies added by users, to later vote and decide on a movie to watch."
          />
          <ExperienceUnit
            logo={ico}
            colour="#FFFFFF"
            title="ICO - Ethereum"
            link="https://gist.github.com/FioFiyo/7890bbe0b390af5d8530e2f4d9412f5b"
            timeperiod="2018"
            subtitle="Trying out solidity and creating a contract using ERC20 guide/Crowdfunding example"
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
