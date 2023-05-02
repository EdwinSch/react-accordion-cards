import content from "../content";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { useState } from "react";

const Questions = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="questions-container">
      {content.map((item) => {
        const { id, heading, info } = item;
        return (
          <article key={id} className="single-question">
            <div className="heading-wrapper">
              <h2 onClick={() => setShowInfo(!showInfo)}>{heading}</h2>
              <button
                className="chevron"
                onClick={() => setShowInfo(!showInfo)}
              >
                {showInfo ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {showInfo && <p className="info">{info}</p>}
          </article>
        );
      })}
    </section>
  );
};

export default Questions;
