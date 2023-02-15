import React from 'react'
import styles from './styles/about.modules.css'

const About = () => {
  return (
    <div className={styles.main} style={
        {
          background: "rgb(19,4,34)",
          background: "linear-gradient(90deg, rgba(19,4,34,1) 0%, rgba(237,193,138,0.75) 50%, rgba(134,34,100,1) 100%)",
          height: '130vh',
          fontFamily: 'Lexend Exa, sans-serif'
        }
      }>
        <div className={styles.flexMainContainer}>
          <div className={styles.flexAbout} style={{height: '600px', width: '600px'}}>
            <h2>About</h2>
            <p style={{padding: '3rem'}}>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit amet ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet</p>
          </div>
          <div className={styles.flexInnerContainer}>
            <div className={styles.right}><h2>100k+</h2></div>
            <div className={styles.left}><h2>150+</h2></div>
            <div className={styles.right}><h2>500+</h2></div>
          </div>
        </div>
      </div>
  )
}

export default About
