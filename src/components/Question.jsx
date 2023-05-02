import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const Question = ({ heading, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  {
    return (
      <article
        className="single-question"
        onClick={() => setShowInfo(!showInfo)}
      >
        <div className="heading-wrapper">
          <h2>{heading}</h2>
          <figure className="chevron">
            {showInfo ? <FaChevronUp /> : <FaChevronDown />}
          </figure>
        </div>
        {showInfo && <p className="info">{info}</p>}
      </article>
    );
  }
};

export default Question;
