let counter = 1;
let age = localStorage.getItem("age");

function setAge(value) {
    localStorage.setItem("age", value)
    console.log(age)
}

function currentQuestLocation(counter) {
    const question = questions.find(q => q.id === counter)

    const [lat, long] = question.place;
    localStorage.setItem("questlat", lat),
        localStorage.setItem("questlong", long)
    drawMarker();
}

const questions = [
    /*{
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
    }*/
    {
        bildURL: "paintegg.jpg",
        id: 1,
        place: [58.67399, 17.07306],
        barn: { fråga: "Vad brukar man måla till påsk?", svar: "Ägg" },
        vuxen: { fråga: "Vilken religiös högtid firas samtidigt som påsken?", svar: "Påsk" },
        feedback: "",
    },
    {
        id: 2,
        bildURL: "easterbunny.jpg",
        place: [58.674456, 17.072136],
        barn: { fråga: "Vilket djur kommer med ägg till påsk enligt sagan?", svar: "Påskharen" },
        vuxen: { fråga: "I vilket land sägs påskharen ha sitt ursprung?", svar: "Tyskland" },
        feedback: ""
    },
    {
        id: 3,
        bildURL: "langfredag.jpg",
        place: [58.67430, 17.07380],
        barn: { fråga: "Vad kallas fredagen före påskhelgen?", svar: "Långfredag" },
        vuxen: { fråga: "Vad minns man under långfredagen?", svar: "Jesus korsfästelse" },
        feedback: ""
    },
    {
        id: 4,
        place: [58.67450, 17.07410],
        barn: { fråga: "Vad brukar barn klä ut sig till på påsken?", svar: "Påskkärring" },
        vuxen: { fråga: "Vad symboliserar fjädrarna i påskriset?", svar: "Livets återkomst" },
        feedback: "",
        bildURL: "paskkarring.jpg"
    },
    {
        id: 5,
        place: [58.67470, 17.07440],
        barn: { fråga: "Vilken färg är vanlig på påskägg?", svar: "Gul" },
        vuxen: { fråga: "Vilken färg symboliserar påsk i kyrkan?", svar: "Vit" }
    },
    {
        id: 6,
        place: [58.67490, 17.07470],
        barn: { fråga: "Vad brukar man lägga i påskägg?", svar: "Godis" },
        vuxen: { fråga: "Vad kallas traditionen att ge barn godis i påskägg?", svar: "Äggjakt" }
    },
    {
        id: 7,
        place: [58.67510, 17.07500],
        barn: { fråga: "Vilken blomma är vanlig till påsk och är gul?", svar: "Påsklilja" },
        vuxen: { fråga: "Vilken blomma kallas ibland för narciss?", svar: "Påsklilja" }
    },
    {
        id: 8,
        place: [58.67530, 17.07530],
        barn: { fråga: "Vad heter kycklingens mamma?", svar: "Höna" },
        vuxen: { fråga: "Vad symboliserar ägget i kristen påsktradition?", svar: "Livets början" }
    },
    {
        id: 9,
        place: [58.67550, 17.07560],
        barn: { fråga: "Vad heter söndagen då påsken börjar?", svar: "Påskdagen" },
        vuxen: { fråga: "Vad firar kristna på påskdagen?", svar: "Jesu uppståndelse" }
    },
    {
        id: 10,
        place: [58.67570, 17.07590],
        barn: { fråga: "Vad åker påskkärringarna till?", svar: "Blåkulla" },
        vuxen: { fråga: "Vad ansågs Blåkulla vara enligt folktron?", svar: "Djävulens festplats" }
    }


];


function getQuestion(counter, age) {
    const questionobj = questions.find(q => q.id === counter);
    if (!questionobj) return;
    console.log("questionobj:", questionobj);


    const fråga = questionobj[age].fråga;
    const bildURL = questionobj.bildURL;

    document.getElementById("question").innerHTML = fråga;
    document.getElementById("question-img").src = "../images/" + bildURL;
    document.getElementById("question-img").style.display = "block"; // om du gömmer den ibland
   
    currentQuestLocation(counter)
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


