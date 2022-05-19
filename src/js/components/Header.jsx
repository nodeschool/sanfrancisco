import Logo from "../../images/nodeschool-sf-hexagon.svg";

const Header = ({ event }) => {
  const {
    dayOfTheWeek,
    date,
    time,
    address,
    addressUrlSafe,
    mentorsUrl,
    ticketsUrl,
  } = event;

  return (
    <header id="header" className="header">
      <a className="nodeschool-sf-love" href="https://nodeschool.io/oakland">
        <strong className="strong--alt">We ❤️ NodeSchool Oakland!</strong>
      </a>

      <div className="header__content section__content">
        <div className="header__identification">
          <img
            id="logo"
            className="header__logo"
            alt="NodeSchool SF Logo"
            src={Logo}
          />
          <div className="header__logo-text">
            <div className="header__logo-text__nodeschool">NodeSchool</div>
            <div className="header__logo-text__sf">San Francisco</div>
          </div>
          <nav className="header__social-links">
            <a href="https://twitter.com/nodeschoolsf">
              <i className="fab fa-twitter" />
            </a>{" "}
            <a href="https://github.com/nodeschool/sanfrancisco">
              <i className="fab fa-github" />
            </a>{" "}
            <a href="https://youtube.com/NodeSchoolSF">
              <i className="fab fa-youtube" />
            </a>{" "}
            <a href="https://discord.gg/2NS3MSxZa8">
              <i className="fab fa-discord" />
            </a>{" "}
            <a href="https://meetup.com/sfnodeschool/">
              <i className="fab fa-meetup" />
            </a>
          </nav>
        </div>

        <div className="header__introduction">
          <h1 className="header__introduction__heading">
            We Help You Learn JavaScript
          </h1>
          <p className="header__introduction__body">
            <strong>NodeSchool SF</strong> is a monthly meetup dedicated to
            helping people learn JavaScript. We help people of all skill
            levels–from beginners to experts–discover what is possible with
            JavaScript. Bring yourself, your computer, and the desire to learn
            to our next event!
          </p>
        </div>

        <div className="next-event">
          <div className="next-event__description">
            <h2 className="next-event__heading">Our Next Event is on {date}</h2>
            <ul className="next-event__info">
              <li className="next-event__info__item">
                <strong className="strong--alt">When?</strong> {dayOfTheWeek},{" "}
                {date} from {time}
              </li>
              <li className="next-event__info__item">
                <strong className="strong--alt">Where?</strong> {address} -{" "}
                <span>
                  [
                  <a href={`http://maps.google.com/?q=${addressUrlSafe}`}>
                    map
                  </a>
                  ]
                </span>
              </li>
              <li className="next-event__info__item">
                <strong className="strong--alt">What?</strong> Learning,
                mentoring, JS bffs, and pizza 🍕
              </li>
            </ul>
          </div>
          <nav className="next-event__links">
            <a
              className="next-event__links__learner next-event__links__link button"
              href={ticketsUrl}
            >
              Sign up as a Learner{" "}
            </a>
            <a
              className="next-event__links__mentor next-event__links__link button"
              href={mentorsUrl}
            >
              Sign up as a Mentor
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
