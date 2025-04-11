const uri = "https://sholiday.faboul.se/dagar/v2.1/2025/04/11"
const fetchHolidays = document.getElementById("fetchHolidays")



fetch (uri)
    .then(function(response) {return response.json()})
    .then(function(dates) {
        console.log(dates)

        dates.dagar.map(function(date) {
            console.log(date)
            let card = document.createElement("div")
            card.setAttribute("class","card")

            let veckodag = document.createElement("p")
            veckodag.setAttribute("class", "veckodag")
            veckodag.innerHTML = date.veckodag

            

            
            card.appendChild(veckodag) 
            fetchHolidays.appendChild(card)
          
         
         
                 
            
            

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
    