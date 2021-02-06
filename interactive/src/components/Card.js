import { useState } from "react";

const Card = ({ data, voted = false }) => {
  const [hasVoted, setHasVoted] = useState(voted);
  const [isUpvoteSelected, setIsUpvoteSelected] = useState(true);
  const [upvotes, setUpvotes] = useState(data?.upvotes);
  const [totalVotes, setTotalVotes] = useState(data?.totalvotes);
  const [downvotes, setDownvotes] = useState(totalVotes - upvotes);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasVoted(true);
    isUpvoteSelected ? setUpvotes(upvotes + 1) : setDownvotes(downvotes + 1);
    setTotalVotes(totalVotes + 1);

    const localData = JSON.parse(localStorage.getItem("jsonData"));
    localData[data.id].upvotes = upvotes;
    localData[data.id].totalvotes = totalVotes;
    localStorage.setItem("jsonData", JSON.stringify(localData));
  };
  const upvoteSize = Math.ceil((upvotes * 12) / totalVotes);

  return (
    <div className="col-12 col-md-6 p-3">
      <div className={data?.background}>
        <div className="div__card__content d-flex align-items-end p-0">
          <div className="p-0">
            <div className="row m-0">
              <div className="d-inline-block col-1 p-0">
                <p
                  className={
                    data?.background === "card__cristina"
                      ? "p__vote-container-cristina"
                      : "p__vote-container"
                  }
                >
                  <img
                    className={`icon__like-cardsName ${
                      upvotes >= 50
                        ? "vote-positive"
                        : "vote-negative icon__notlike"
                    }`}
                    alt="vote"
                    src="./icons/like.svg"
                  />
                </p>
              </div>
              <div className="card__content-text col-11 pr-5">
                <h3>{data?.name}</h3>
                <div className="card__content-text-inner">
                  <span>
                    <b>1 month ago</b> in {data?.section}{" "}
                  </span>
                  <p className="mt-2">
                    {hasVoted
                      ? "Thank you for voting!"
                      : "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero."}
                  </p>
                </div>
                {hasVoted ? (
                  <div className="pb-4">
                    <button
                      className="button__card"
                      onClick={() => setHasVoted(false)}
                    >
                      Vote again
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="pb-4">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        id={"upvote" + data?.background}
                        value="true"
                        name="isUpvote"
                        checked={isUpvoteSelected}
                        onChange={() => setIsUpvoteSelected(true)}
                      />
                      <label
                        className={`form-check-label ${
                          isUpvoteSelected ? "icon__like-selected" : ""
                        }`}
                        htmlFor={"upvote" + data?.background}
                      >
                        <img
                          className="vote-positive icon__like-cardsName"
                          alt="upvote"
                          src="./icons/like.svg"
                        />
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input d-none"
                        type="radio"
                        id={"downvote" + data?.background}
                        value="false"
                        name="isUpvote"
                        checked={!isUpvoteSelected}
                        onChange={() => setIsUpvoteSelected(false)}
                      />
                      <label
                        className={`form-check-label ${
                          !isUpvoteSelected ? "icon__like-selected" : ""
                        }`}
                        htmlFor={"downvote" + data?.background}
                      >
                        <img
                          className="vote-negative icon__notlike icon__like-cardsName"
                          alt="upvote"
                          src="./icons/like.svg"
                        />
                      </label>
                    </div>
                    <button className="button__card">Vote now</button>
                  </form>
                )}
              </div>
            </div>
            <div className="div__card__votes row m-0">
              <div
                className={`vote-positive-alpha d-flex align-items-baseline col-${upvoteSize}`}
              >
                <img
                  className="icon__like-voting mr-1"
                  alt="down vote"
                  src="./icons/like.svg"
                />
                <span className="span__votingCards">
                  {~~((upvotes / totalVotes) * 100)}
                  <span className="span__percentage">%</span>
                </span>
              </div>
              <div
                className={`col-${
                  12 - upvoteSize
                } vote-negative-alpha d-flex justify-content-end align-items-baseline`}
              >
                <span className="span__votingCards">
                  {Math.ceil((downvotes / totalVotes) * 100)}
                  <span className="span__percentage">%</span>
                </span>
                <img
                  className="icon__like-voting icon__notlike ml-1"
                  alt="vote"
                  src="./icons/like.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
