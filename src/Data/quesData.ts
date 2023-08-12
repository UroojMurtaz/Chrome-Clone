interface SubQuestion {
    id: number;
    text: string;
    subQuestions?: SubQuestion[];
    answer?: string;
    questionNo: string;
  }
  
  interface Question {
    id: number;
    questionNo: string;
    text: string;
    subQuestions?: SubQuestion[];
    answer?: string;
  }
  
  const dataSet: Question[] = [
    {
      id: 1,
      questionNo: "Q1",
      text: "Please introduce yourself.",
      subQuestions: [
        {
          id: 2,
          questionNo: "1a",
          text: "Start with your background.",
          subQuestions: [
            {
              id: 3,
              questionNo: "i",
              text: "Would you like to add more details?",
              answer: "Thank you.",
            },
          ],
        },
        {
          id: 4,
          questionNo: "1b",
          text: "Start with your background.",
          subQuestions: [
            {
              id: 5,
              questionNo: "ii",
              text: "Would you like to add more details?",
              answer: "Thank you.",
            },
          ],
        },
        // ... other sub-questions ...
      ],
    },
    {
      id: 6,
      questionNo: "Q2",
      text: "Let's take a walk.",
      answer: "Thank you.",
    },
    {
      id: 7,
      questionNo: "Q3",
      text: "What shall I order for you?",
      subQuestions: [
        {
          id: 8,
          questionNo: "1a",
          text: "Start with your background.",
          subQuestions: [
            {
              id: 9,
              questionNo: "i",
              text: "Would you like to add more details?",
              answer: "Thank you.",
            },
          ],
        },
        {
          id: 10,
          questionNo: "1b",
          text: "Start with your background.",
          subQuestions: [
            {
              id: 11,
              questionNo: "ii",
              text: "Would you like to add more details?",
              answer: "Thank you.",
            },
          ],
        },
        // ... other sub-questions ...
      ],
    },
  ];
  
  export default dataSet;
  