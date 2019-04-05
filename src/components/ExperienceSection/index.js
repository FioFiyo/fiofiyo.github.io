import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import openrealLogo from '../../assets/images/experience/openreal-logo-medium.jpg'
import casazaLogo from '../../assets/images/experience/casaza_logo_square.png'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={openrealLogo}
            colour='#FFFFFF'
            title='OpenReal'
            link='https://github.com/codyzazulak1/openreal/commits?author=FioFiyo'
            timeperiod='2016-2017'
            subtitle='Learnt the ins and outs of front & back end development while building different features including a small CMS for realtor agents. Built on Ruby on Rails.'
          />
          <ExperienceUnit
            logo = {casazaLogo}
            colour='#FFFFFF'
            title='Casaza'
            link='https://www.casaza.com'
            timeperiod='2018-present'
            subtitle='Learning to work with PHP to build customized front and backend features for design driven e-commerce site.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
