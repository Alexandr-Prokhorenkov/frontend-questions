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
};

export const CardInfo: FC<CardInfoProps> = ({
  number,
  title,
  longAnswer,
  codeExample,
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
            __html: longAnswer,
          }}
        />
      </div>
      {codeExample && (
        <SyntaxHighlighter
          language="html"
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
