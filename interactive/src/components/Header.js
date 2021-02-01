import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar-top navbar navbar-expand-md">
        <Link className="navbar-brand" to="/">
          Rule of Thumb.
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <img src="./icons/burgerking.svg" alt="burguer" />
          </span>
        </button>

        <div className="collapse navbar-collapse pr-4">
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/PastTrials">
                Past Trials
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/HowItWorks">
                How It Works
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">
                Log In / Sign In
              </Link>
            </li>
            <li className="nav-item">
              <img
                className="icon__search"
                src="./icons/search.svg"
                alt="search-button"
              />
            </li>
          </ul>
        </div>
      </nav>

      <div className="container container__pope">
        <div className="col-12 col-lg-6 container__pope-position">
          <div className="card__pope">
            <div className="card__pope-background"></div>
            <div className="card__pope-text">
              <span>What's your opinion on</span>
              <h3>Pope Francis?</h3>
              <p>
                He’s talking tough on clergy sexual abuse, but is he just
                another papal pervert protector? (thumbs down) or a true
                pedophile punishing pontiff? (thumbs up)
              </p>
              <p className="align-items-center">
                <img
                  className="icon__wiki"
                  src="./icons/wiki.svg"
                  alt="wikipedia-logo"
                />
                <Link to="/" className="pl-1">
                  {" "}
                  More Information{" "}
                </Link>
              </p>
              <h5>What's your verdict?</h5>
            </div>
          </div>
          <div className="row m-0 p-0 card__pope-text">
            <div className="col-6 vote-positive-alpha pt-3 pb-3 text-center">
              <img
                className="icon__like-pope"
                alt="down vote"
                src="./icons/like.svg"
              />
            </div>
            <div className="col-6 vote-negative-alpha pt-3 pb-3 text-center">
              <img
                className="icon__like-pope icon__notlike"
                alt="vote"
                src="./icons/like.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row m-0 div__pope-bottom position-relative">
        <div className="col-4 p-0 d-flex align-items-center justify-content-end">
          <div className="div__pope-closing"></div>
          <div className="div__pope-closing-text">
            <p>CLOSING IN</p>
          </div>
        </div>
        <div className="col-8 p-0 d-flex align-items-center">
          <div className="div__pope-days"></div>
          <div className="div__pope-days-text">
            <img
              className="icon__play d-inline"
              src="./icons/play2.svg"
              alt="next"
            />
            <p className="d-inline">
              <b>22</b> days
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
