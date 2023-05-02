import content from "../content";
import Question from "./Question";

const Questions = () => {
  return (
    <section className="questions-container">
      {content.map((item) => {
        return <Question key={item.id} {...item} />;
      })}
    </section>
  );
};

export default Questions;
