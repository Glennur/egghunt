let counter = 1;


const questions = [
    {
      id: 1,
      place: [58.67399, 17.07306],
      barn: { fråga: "Vad blir 8 + 9?", svar: "17" },
      vuxen: { fråga: "Vad blir 81 * 19?", svar: "1539" }
    },
    {
      id: 2,
      place: [58.673993, 17.07306755],
      barn: { fråga: "Vad heter Pippi Långstrumps apa?", svar: "Herr Nilsson" },
      vuxen: { fråga: "Vad heter författaren till Pippi?", svar: "Astrid Lindgren" }
    }
  ];


  function getQuestion(counter, age) {
    const questionobj = questions.find(q => q.id === counter);
    if (!questionobj) return;
  
    const frågaText = questionobj[age].fråga;
  
    document.getElementById("question").innerHTML = frågaText;
  
    //const utterance = new SpeechSynthesisUtterance(frågaText);
    //utterance.lang = 'sv-SE';
    //speechSynthesis.speak(utterance);
  }

  
// När du vill visa en fråga:
getQuestion(1, "barn");
