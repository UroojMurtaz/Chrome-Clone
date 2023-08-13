import React, { useState } from "react";
import QuesData from "../../Data/quesData";
import Question from "../../Components/Questions";
import HeaderTitle from "../../Components/HeaderTitle";

const Index: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<unknown | null>(
    null
  );
  console.log(selectedQuestion);

  return (
    <div className="bg-gradient-to-br from-blue-300 to-indigo-600 min-h-screen p-10">
      <HeaderTitle title="Questionaries FAQs" />
      <div className="container mx-auto p-8 bg-white px-10 py-8 rounded-xl w-screen shadow-md mt-5 ">
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
