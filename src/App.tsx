import "./App.css";
import { CardInfo } from "./components/CardInfo/CardInfo";
import { JAVASCRIPT_QUESTIONS } from "./shared/constants";

function App() {
  return (
    <div className="container">
      {JAVASCRIPT_QUESTIONS.map((cardItem) => (
        <CardInfo 
          key={cardItem.number}
          number={cardItem.number}
          title={cardItem.title}
          longAnswer={cardItem.longAnswer}
          codeExample={cardItem.codeExample}
          language={cardItem.language}
        />
      ))}
    </div>
  );
}

export default App;
