import {Link} from 'react-router-dom'
function About (){
    return (
        <>
          <nav>
            <div className="logo">
              <img src="" alt="" />
            </div>
            <div className="links">
              <Link to='/'>Collections</Link>
              <Link to='/about'>About</Link>
            </div>
          </nav>
          <main>
            <header>About Heading</header>
            <section>
                About Description
            </section>
          </main>
          <footer>
            Made with Love and React
          </footer>
        </>
      )
}
export default About
