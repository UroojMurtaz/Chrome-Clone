import React, { useState } from "react";
import QuesData from "../../Data/quesData";
import Question from "../../Components/Questions";

const Index: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<any | null>(null);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Dynamic Questionnaire
        </h1>
        {QuesData.map((question) => (
          <Question
            key={question.id}
            question={question}
            onSelect={setSelectedQuestion}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
