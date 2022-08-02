import React from 'react'
import './Intro.css'
import resumeUrl from './DamianReiterResume2022.pdf'

function Intro() {
  return (
    <div>
      <div className="head">
        <span className="intro" style={{ width: '50%', float: 'left', }}><b>Hey, I'm Damian</b></span>
        <span className="links" style={{ width: '50%', float: 'right', textAlign: 'right' }}><a href="https://github.com/dmreiter" target="_blank">[github]</a> <a href="https://www.linkedin.com/in/damianreiter/" target="_blank">[linkedin]</a> <a href={resumeUrl} target="_blank">[resume]</a></span>
      </div>
      <hr/>
      <div className="desc">
        <p>
          I am a Software Engineering Student @ UWaterloo (class of 2023).
        </p>

	<p>
	I'll be working as an intern at <span className='glow-blue'>Snowflake</span> this Fall, on the <span className='glow-white'>Database Query Engine</span> team.
	</p>

        <p>
          I have completed <span className='glow-white'>7 internships</span> at companies like <span className='glow-green'>Shopify</span>, <span className='glow-yellow'>Splunk</span>, <span className='glow-blue'>BitGo</span>, among others, in roles ranging from Software Engineering to Data Science and Blockchain Engineering.
        </p>

        <p>Some things I've done at those internships include:</p>
        <ul className='list'>
          <li>Developing support for the <span className='glow-pink'><a href='https://lightning.network/lightning-network-summary.pdf' target="_blank">Lightning Network protocol</a></span> at <span className='glow-blue'>BitGo</span>, allowing customers to make Bitcoin transactions with {'>'}99% reduced fees and processing times</li>
          <li>Researching, designing, and developing a <span className='glow-pink'><a href='https://docs.splunk.com/Documentation/ES/7.0.1/BehavioralAnalytics/Risklevelandscores' target="_blank">new risk scoring system</a></span> at <span className='glow-yellow'>Splunk</span></li>
          <li>Supporting multiple product and data teams at <span className='glow-green'>Shopify</span> by performing data analysis, creating data models, and providing data-driven recommendations</li>
          <li>Contributing to <span className='glow-green'>Shopify's</span> internal all-in-one org-wide productivity/context sharing app, <span className='glow-pink'><a href='https://vimeo.com/456735890' target="_blank">the Vault</a></span></li>
        </ul>

        <p>
          In my free time I like to climb rocks, volley balls, and compete in video game tournaments. 
        </p>

        <p>
          I am also a multiple-time national collegiate esports champion, and international semi-finalist at a <span className='glow-pink'><a href='https://www.redbull.com/ca-en/event-series/campus-clutch' target='_blank'>RedBull-hosted global esports tournament</a></span> held in Spain involving over 25,000 students from 50+ countries.
        </p>

      </div>
    </div>
  )
}

export default Intro
