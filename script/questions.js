let counter = 1;
let age = localStorage.getItem("age");

function setAge(value) {
    localStorage.setItem ("age", value)
    console.log(age)
  }

const questions = [
    {
      id: 1,
      place: [58.67399, 17.07306],
      barn: { fråga: "Vad blir 8 + 9?", svar: "17" },
      vuxen: { fråga: "Vad blir 81 * 19?", svar: "1539" },
      feedback: "Första frågan löst! Vi fortsätter vår färd mot målet"
    },
    {
      id: 2,
      place: [58.674456, 17.072136],
      barn: { fråga: "Vad heter Pippi Långstrumps apa?", svar: "Herr Nilsson" },
      vuxen: { fråga: "Vad heter författaren till Pippi?", svar: "Astrid Lindgren" },
      feedback: ""
    }
  ];


  function getQuestion(counter, age) {
    const questionobj = questions.find(q => q.id === counter);
    if (!questionobj) return;
  
    const frågaText = questionobj[age].fråga;
  
    document.getElementById("question").innerHTML = frågaText;  
  }


  function checkAnswer() {
    const userInput = document.getElementById("answer-input").value.trim();
    const currentQuestion = questions.find(q => q.id === counter);
    const correctAnswer = currentQuestion[age].svar;
    const feedb = currentQuestion.feedback;
  
    if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
      document.getElementById("feedback").innerText = "✅ Rätt svar! " + feedb;
      
      counter++;
      getQuestion(counter, age);
    } else {
      document.getElementById("feedback").innerText = "❌ Fel svar, försök igen!";
    }
  }

  
// När du vill visa en fråga:
getQuestion(counter, age);


