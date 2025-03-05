import "./App.css";
import { CardInfo } from "./components/CardInfo/CardInfo";
import { HTML_CSS_QUESTIONS } from "./shared/constants";

function App() {
  return (
    <div className="container">
      {HTML_CSS_QUESTIONS.map((cardItem) => (
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
