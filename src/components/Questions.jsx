import content from "../content";

const Questions = () => {
  return (
    <section className="questions-container">
      {content.map((item) => {
        const { id, heading, info } = item;
        return (
          <article key={id} className="single-question">
            {heading}
          </article>
        );
      })}
    </section>
  );
};

export default Questions;
