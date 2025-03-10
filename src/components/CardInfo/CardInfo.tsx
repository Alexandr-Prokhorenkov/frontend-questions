import { FC, useState } from "react";
import styles from "./CardInfo.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";

type CardInfoProps = {
  number: number;
  title: string;
  shortAnswer?: string;
  longAnswer: string;
  frequency?: number;
  codeExample?: string;
  language?: string;
};

const fixPrepositions = (text: string) => {
  return text.replace(
    /\s(в|Чем|на|с|к|о|и|у|по|как|за|из|от|до|об|под|при|без|для|через|над|Не|их|Это|с|про|между)\s/g,
    " $1\u00A0"
  );
};

export const CardInfo: FC<CardInfoProps> = ({
  number,
  title,
  longAnswer,
  codeExample,
  language,
}) => {
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);

  const customStyle = {
    ...vscDarkPlus,
    'pre[class*="language-"]': {
      ...vscDarkPlus['pre[class*="language-"]'],
      padding: "1em",
      margin: "0.5em 0",
      overflow: "auto",
      borderRadius: "0.3em",
    },
  };

  const lineProps = (lineNumber: number) => {
    const isHovered = hoveredLine === lineNumber;
    return {
      style: {
        display: "block",
        cursor: "pointer",
        padding: "0 1em",
        transition: "all 0.2s ease",
        borderLeft: isHovered ? "3px solid #61dafb" : "3px solid transparent",
        backgroundColor: isHovered ? "rgba(97, 218, 251, 0.1)" : "transparent",
        boxShadow: isHovered ? "0 0 10px rgba(97, 218, 251, 0.5)" : "none",
      },
      onMouseEnter: () => setHoveredLine(lineNumber),
      onMouseLeave: () => setHoveredLine(null),
      onClick: () => console.log(`Clicked line ${lineNumber}`),
    };
  };

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
          style={customStyle}
          showLineNumbers={true}
          wrapLines={true}
          lineProps={lineProps}
        >
          {codeExample}
        </SyntaxHighlighter>
      )}
    </div>
  );
};
