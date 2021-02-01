import { Link } from "react-router-dom";

const Rules = () => {
  return (
    <section className="row m-0 section__beCounted mt-4 mb-4 p-3">
      <div className="row m-0 col p-0">
        <div className="col-lg-2 col-md-3 p-0 d-flex row m-0 justify-content-center align-items-center text-center">
          <span className="d-block col-12 col-md-auto p-0">
            Speak out. Be heard
          </span>
          <b className="d-block col-12 col-md-auto">Be counted</b>
        </div>
        <p className="col-lg-10 col m-0 pt-1 pr-0">
          Rule of Thumb is a crowd sourced court of public opinion where anyone
          and everyone can speak out and speak freely. It’s easy: You share your
          opinion, we analyze and put the data in a public report.
        </p>
      </div>
      <div className="col-1 m-0 p-0 d-flex row m-0 justify-content-center align-items-center">
        <Link to="/#">
          <img src="./icons/close.svg" alt="close" className="icon__close" />
        </Link>
      </div>
    </section>
  );
};

export default Rules;
