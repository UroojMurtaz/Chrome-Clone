const dataSet = [
  {
    id: "Q1",
    text: "Please introduce yourself.",
    subQuestions: [
      {
        id: "1a",
        text: "Start with your background.",
        subQuestions: [
          {
            id: "i",
            text: "Would you like to add more details?",
            answer: "Thank you.",
          },
        ],
      },
      {
        id: "1b",
        text: "Start with your background.",
        subQuestions: [
          {
            id: "ii",
            text: "Would you like to add more details?",
            answer: "Thank you.",
          },
        ],
      },
      // ... other sub-questions ...
    ],
  },
  {
    id: "Q2",
    text: "Let's take a walk.",
    answer: "Thank you.",
  },
  {
    id: "Q3",
    text: "What shall I order for you?",
    subQuestions: [
      {
        id: "1a",
        text: "Start with your background.",
        subQuestions: [
          {
            id: "i",
            text: "Would you like to add more details?",
            answer: "Thank you.",
          },
        ],
      },
      {
        id: "1b",
        text: "Start with your background.",
        subQuestions: [
          {
            id: "ii",
            text: "Would you like to add more details?",
            answer: "Thank you.",
          },
        ],
      },
    ],
  },
];

export default dataSet;
