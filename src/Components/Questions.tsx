import React, { useState } from "react";
interface QuestionProps {
    question: {
      id: number;
      text: string;
      subQuestions?: any[];
      answer?: string;
    };
    onSelect: (question: any) => void;
  }
  
  const Question: React.FC<QuestionProps> = ({ question, onSelect }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleSelect = () => {
    onSelect(question);
    setExpanded(!expanded);
  };

  console.log("question", question);
  return (
    <div className="border rounded shadow-md p-4 mb-4">
      <div
        onClick={handleSelect}
        className="cursor-pointer flex items-center justify-between text-lg font-semibold mb-2"
      >
        <span>{question.id} : {question.text}</span>
        <span className={`transform transition-transform ${expanded ? "rotate-90" : "rotate-0"}`}>
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </div>
      {expanded && (
        <div className="pl-4">
          {question.subQuestions &&
            question.subQuestions.map((subQuestion) => (
              <Question
                key={subQuestion.id}
                question={subQuestion}
                onSelect={onSelect}
              />
            ))}
          {question.answer && (
            <div className="mt-2 text-gray-600">
              <span className="text-green-500 mr-1">
                <svg
                  className="w-4 h-4 inline"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              {question.answer}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Question;