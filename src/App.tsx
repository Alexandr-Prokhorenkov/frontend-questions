import "./App.css";
import { CardInfo } from "./components/CardInfo/CardInfo";
import { TYPESCRIPT_QUESTIONS } from "./shared/constants";

function App() {
  return (
    <div className="container">
      {TYPESCRIPT_QUESTIONS.map((cardItem) => (
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
