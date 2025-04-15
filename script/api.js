let todaysdate = new Date();
let d = todaysdate.getDate();
let m = todaysdate.getMonth() + 1; 
const uri = "https://sholiday.faboul.se/dagar/v2.1/"
const fetchHolidays = document.getElementById("fetchHolidays")



fetch (uri)
    .then(function(response) {return response.json()})
    .then(function(dates) {
        console.log(dates)

        dates.dagar.map(function(date) {
            console.log(date)
            let card = document.createElement("div")
            card.setAttribute("class","card")

            let datum = document.createElement("p")
            datum.setAttribute("class", "datum")
            datum.innerHTML = date.datum

            let veckodag = document.createElement("p")
            veckodag.setAttribute("class", "veckodag")
            veckodag.innerHTML = date.veckodag

            let arbetsfriDag = document.createElement("p")
            arbetsfriDag.setAttribute("class", "arbetsfriDag")
            arbetsfriDag.innerHTML = 'Arbetsfri dag: ' + date["arbetsfri dag"]

            let rödDag = document.createElement("p")
            rödDag.setAttribute("class", "rödDag")
            rödDag.innerHTML = 'Röd dag: ' + date["röd dag"]

            let vecka = document.createElement("p")
            vecka.setAttribute("class", "vecka")
            vecka.innerHTML = 'Vecka: ' + date.vecka

            let dagIvecka = document.createElement("p")
            dagIvecka.setAttribute("class", "dagIvecka")
            dagIvecka.innerHTML = 'Dag i vecka: ' + date["dag i vecka"]

            let namnsdag = document.createElement("p")
            namnsdag.setAttribute("class", "namnsdag")
            namnsdag.innerHTML = 'Namnsdag: ' + date.namnsdag.join(", ")

            let flaggdag = document.createElement("p")
            flaggdag.setAttribute("class", "flaggdag")
            flaggdag.innerHTML = 'Flaggdag: ' + date.flaggdag
            
            card.appendChild(veckodag) 
            card.appendChild(datum)
           //card.appendChild(arbetsfriDag)
            //card.appendChild(rödDag)
            //card.appendChild(vecka)
            //card.appendChild(dagIvecka)
            //card.appendChild(namnsdag)
            //card.appendChild(flaggdag)
            fetchHolidays.appendChild(card)
          
           //Kommenterat ut det vi tyckt var onödigt att visa i kortet
         
       /* {
            "cachetid": "2025-04-11 10:03:34",
            "version": "2.1",
            "uri": "/dagar/v2.1/",
            "startdatum": "2025-04-11",
            "slutdatum": "2025-04-11",
            "dagar": [
              {
                "datum": "2025-04-11",
                "veckodag": "Fredag",
                "arbetsfri dag": "Nej",
                "röd dag": "Nej",
                "vecka": "15",
                "dag i vecka": "5",
                "namnsdag": [
                  "Ulf",
                  "Ylva"
                ],
                "flaggdag": ""
              }
            ]
          }*/
        }
    
        )
    } )
    .catch(function(error) {
        console.log("Error: " + error);
    }); 
    