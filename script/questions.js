let counter = 1;
let age = localStorage.getItem("age");


function setAge(value) {
    localStorage.setItem("age", value)
    console.log(age)
}

function currentQuestLocation() {
    const question = questions.find(q => q.id === counter)

    const [lat, long] = question.place;
    localStorage.setItem("questlat", lat),
        localStorage.setItem("questlong", long)
    console.log(lat + "," + long)
    drawMarker(lat, long);
}




function getQuestion() {
    const questionobj = questions.find(q => q.id === counter);
    if (!questionobj) return;
    console.log("questionobj:", questionobj);


    const fråga = questionobj[age].fråga;
    const bildURL = questionobj.bildURL;

    document.getElementById("question").innerHTML = fråga;
    document.getElementById("question-img").src = "images/" + bildURL;
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

        setTimeout(() => {
            counter++;
            document.getElementById("question-container").style.display = "none";
            //document.getElementById("question-container").innerHTML = "";
            currentQuestLocation();
        }, 1000);



    } else {
        document.getElementById("feedback").innerText = "❌ Fel svar, försök igen!";
    }
}


// När du vill visa en fråga:
//getQuestion(counter, age);
const questions = [

    {
        bildURL: "paintegg.jpg",
        id: 1,
        place: [58.673540, 17.074206],
        barn: { fråga: "Vad brukar man måla till påsk?", svar: "Ägg" },
        vuxen: { fråga: "Vilken religiös högtid firas samtidigt som påsken?", svar: "Påsk" },
        feedback: "Jakten på påskharen är igång. Se kartan vart nästa ledtråd är",
    },
    {
        id: 2,
        bildURL: "easterbunny.jpg",
        place: [58.673352, 17.073273],
        barn: { fråga: "Vilket djur kommer med ägg till påsk enligt sagan?", svar: "Påskharen" },
        vuxen: { fråga: "I vilket land sägs påskharen ha sitt ursprung?", svar: "Tyskland" },
        feedback: "Du hittar lite godispapper på marken och tänker att här har påskharen varit. Fortsätt"
    },
    {
        id: 3,
        bildURL: "langfredag.jpg",
        place: [58.673978, 17.073074],
        barn: { fråga: "Vad kallas fredagen före påskhelgen?", svar: "Långfredag" },
        vuxen: { fråga: "Vad minns man under långfredagen?", svar: "Jesus korsfästelse" },
        feedback: "Spåren leder vidare... var kan haren ha skuttat nu?"
    },
    {
        id: 4,
        bildURL: "paskkarring.jpg",
        place: [58.674597, 17.073282],
        barn: { fråga: "Vad brukar barn klä ut sig till på påsken?", svar: "Påskkärring" },
        vuxen: { fråga: "Vad symboliserar fjädrarna i påskriset?", svar: "Livets återkomst" },
        feedback: "Något glittrar till i solen – ett färgglatt fjäder från harens hatt?"
    },
    {
        id: 5,
        bildURL: "chicken2.jpg",
        place: [58.674699, 17.075097],
        barn: { fråga: "Vilken färg är vanlig på påskägg?", svar: "Gul" },
        vuxen: { fråga: "Vilken färg symboliserar påsk i kyrkan?", svar: "Vit" },
        feedback: "Du hör ett fnissande... påskharen kan inte vara långt borta!"
    },
    {
        id: 6,
        bildURL: "paskagg.jpg",
        place: [58.674170, 17.076355],
        barn: { fråga: "Vad brukar man lägga i påskägg?", svar: "Godis" },
        vuxen: { fråga: "Vad kallas traditionen att ge barn godis i påskägg?", svar: "Äggjakt" },
        feedback: "Någon har tappat en morot – kan det vara harens mellanmål?"
    },
    {
        id: 7,
        bildURL: "easterlilly.jpg",
        place: [58.673582, 17.079377],
        barn: { fråga: "Vilken blomma är vanlig till påsk och är gul?", svar: "Påsklilja" },
        vuxen: { fråga: "Vilken blomma kallas ibland för narciss?", svar: "Påsklilja" },
        feedback: "Du känner doften av choklad i luften. Följ näsan!"
    },
    {
        id: 8,
        bildURL: "chicken.jpg",
        place: [58.674751, 17.080026],
        barn: { fråga: "Vad heter kycklingens mamma?", svar: "Höna" },
        vuxen: { fråga: "Vad symboliserar ägget i kristen påsktradition?", svar: "Livets början" },
        feedback: "En fjäder svävar förbi i vinden. Påskharen har varit i farten!"
    },
    {
        id: 9,
        bildURL: "jesus.jpg",
        place: [58.674572, 17.076346],
        barn: { fråga: "Vad heter söndagen då påsken börjar?", svar: "Påskdagen" },
        vuxen: { fråga: "Vad firar kristna på påskdagen?", svar: "Jesu uppståndelse" },
        feedback: "Ett kort meddelande skrivet med tassavtryck: 'Snart är du där!'"
    },
    {
        id: 10,
        bildURL: "blakulla.jpg",
        place: [58.673686, 17.074157],
        barn: { fråga: "Vad åker påskkärringarna till?", svar: "Blåkulla" },
        vuxen: { fråga: "Vad ansågs Blåkulla vara enligt folktron?", svar: "Djävulens festplats" },
        feedback: "Du är framme vid målet! Leta i lådcykeln"
    }


];

