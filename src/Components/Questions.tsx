import React, { useState } from "react";
interface QuestionProps {
  question: {
    questionNo: string;
    id: number;
    text: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    subQuestions?: any[];
    answer?: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelect: (question: any) => void;
}

const Question: React.FC<QuestionProps> = ({ question, onSelect }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleSelect = () => {
    onSelect(question);
    setExpanded(!expanded);
  };

  return (
    <div className="border rounded shadow-md p-4 mb-4 ">
      <div
        onClick={handleSelect}
        className="cursor-pointer flex items-center justify-between text-lg font-semibold mb-2"
      >
        <span>
          {question.questionNo} : {question.text}
        </span>
        <span
          className={`transform transition-transform ${
            expanded ? "rotate-90" : "rotate-0"
          }`}
        >
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
            <div className="mt-2 text-gray-800">
              <span className="text-green-500 mr-1 font-bold">
               Answer :
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
