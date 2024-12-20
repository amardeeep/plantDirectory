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
                <header>About Heading</header>
                 <section>
                     About Description
                </section>
            </main>
            <footer className={about.footer}>
                 Made with Love and <a href="https://react.dev/">React</a>
            </footer>
        </div>
      )
}
export default About
