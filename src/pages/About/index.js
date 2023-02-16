import React from 'react'
import styles from './styles/about.modules.css'
import './styles/about.modules.css'
import backg from './assets/leaves.png'
import { padding } from '@mui/system'

const About = () => {
  const data = {
    "bgImage" : {
      image: backg,
      content: ['lorem']
    }
  }
  return (
    <div className={styles.main} style={
        {
          height: '100vh',
          fontFamily: 'Lexend Exa, sans-serif',
          backgroundImage: `url(${backg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundBlendMode: 'color-burn'
          
          // height: '100%'
        }
      }>
        <div className={styles.flexMainContainer} style={{
         display: 'flex',
         flexDirection: 'row-reverse',
         justifyContent: 'center',
         alignItems: 'center',
        }}>
          <aboutCircle className={styles.flexAbout}>
            <h2>About</h2>
            <p style={{padding: '3rem'}}>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
          </aboutCircle>
          <div className={styles.flexInnerContainer} style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '2rem'
          }}>
            <circleRight className={styles.right}><h2>100k+</h2></circleRight>
            <circleLeft className={styles.left}><h2>150+</h2></circleLeft>
            <circleRight className={styles.right}><h2>500+</h2></circleRight>
          </div>
        </div>
      </div>
  )
}

export default About
