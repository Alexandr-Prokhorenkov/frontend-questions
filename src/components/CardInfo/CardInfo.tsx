import { FC } from "react";
import styles from "./CardInfo.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

type CardInfoProps = {
  number: number;
  title: string;
  shortAnswer?: string;
  longAnswer: string;
  frequency?: number;
  codeExample?: string;
  language?: string
};

const fixPrepositions = (text: string) => {
  return text.replace(/\s(в|Чем|на|с|к|о|и|у|по|как|за|из|от|до|об|под|при|без|для|через|над|Не|их|Это|с|про|между)\s/g, " $1\u00A0");
};

export const CardInfo: FC<CardInfoProps> = ({
  number,
  title,
  longAnswer,
  codeExample,
  language,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          {number}. {title}
        </h2>
      </div>
      <div className={styles.textContainer}>
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{
            __html: fixPrepositions(longAnswer),
          }}
        />
      </div>
      {codeExample && (
        <SyntaxHighlighter
          language={language}
          style={dracula}
          showLineNumbers
          wrapLongLines
          customStyle={{
            padding: "16px",
            borderRadius: "8px",
            fontSize: "14px",
            backgroundColor: "#282a36",
            width: "680px",
          }}
        >
          {codeExample}
        </SyntaxHighlighter>
      )}
    </div>
  );
};
