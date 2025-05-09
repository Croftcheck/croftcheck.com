import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <button
        className="close-button"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ><span className="util-visually-hidden">Close</span></button>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Introduction</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            I graduated from Miami University's University Honors Program with a double-major in English and Psychology for undergrad,
            and then graduated from the University of Dayton with my Masters of Business Administration. I am a storyteller at heart.
            I became an English major because of the way that it ties stories to life. If it has been experienced, chances are it has been written about.
            Stories are how we connect to other people. We tell each other stories about what happened, how it made us feel, why we acted the way we did.
            Project Management is listening to stories, adapting plans accordingly, and retelling those stories where needed.
            There is no part of life that is not, at its core, storytelling.
          </p>
          <p>
            Storytelling is an art. A story should strike the audience, grab them and not let go. It is a means of connecting with people, recognizing who they are,
            what they want, and how you can help each other. What is business, if not interacting with people? A storyteller is someone able to interact at any
            level--from the executive to the cleaning crew to the end-user. It's a matter of knowing and understanding the audience, of connecting with them and
            having a dialogue. With that skill, a project manager doesn't need the technical knowledge, because they understand the people they're working with and
            what the SMEs are saying. A good project manager can track and guide and lead a project from start to finish, navigating through the inevitable issues and
            risks with a level head, a solid team, and a mitigation plan--because they can communicate effectively. For the project manager, it isn't about them;
            it's about the project, the end result, the team, and the end-users. The stakeholders are the audience, and the project manager needs to tell them
            the project's story.
          </p>
          <p>
            A story is not static, and a storyteller cannot be either. I taught myself to use Microsoft Project well enough that I was sought out to train others in
            the Institute on how to use it. Not all projects are the traditional waterfall style, and so I became a Professional Scrum Master I as well. I then followed up the PSM certification by obtaining my PMP.
            There are always new methods of finding and presenting information to find and adapt. Technology is evolving, and so too are our stories.
            Let me help you bring your story to life.
          </p>
          <p>
          I am a storyteller.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p className="image-caption">Dayton, Ohio via <a href="https://unsplash.com/@bowmanmc">M. Bowman</a></p>
          <p>
          I'm currently a project manager with approximately 10 years of PM experience, 8 of which have been with the Federal Government. I am formally trained in both waterfall and Agile styles, focusing on achieving customer goals with multifunctional teams. I am also a Project Management Professional (PMP), Professional Scrum Master (PSM I), and have an MBA. <a href="mailto:Andrew.croftcheck@gmail.com?Subject=From%20your%20website">Send me a message</a> if you'd like to know more.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            I'm Andrew Croftcheck, a Project Manager. I live in Dayton, OH with my two cats.
            In my spare time I enjoy playing video games and board games, reading, playing tabletop RPGs, and have recently taken up baking.
            I did my undergrad at Miami, double-majoring in English and Psychology, and then picked up an MBA from the University of Dayton later on.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/croftcheck/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/andrewcroftcheck/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:Andrew.croftcheck@gmail.com?Subject=From%20your%20website"
                className="icon fa-envelope-o"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
