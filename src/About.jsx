import {Link} from 'react-router-dom'
import about from './About.module.css'
function About (){
    return (
        <div className={about.root}>
          <nav className={about.nav}>
            <img src='src/assets/logo.jpg' alt="" className={about.logo}/>
            <div className={about.links}>
                <Link to='/'>Almanac</Link>
                <Link to='/about'>About</Link>
            </div>
            </nav>
             <main>
                <header>About Avinya</header>
                 <section>
                 The project is named as avinya ,which means innovation and technology, 
                 This website helps a person to get the information about plants and helps to grow the nature well. Exploring and appreciating the exciting world of plants is our mission. 
                </section>
            </main>
            <footer className={about.footer}>
                 Made with Love and <a href="https://react.dev/">React</a>
            </footer>
        </div>
      )
}
export default About
