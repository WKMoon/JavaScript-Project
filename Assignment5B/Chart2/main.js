window.onload = function(){
    //Get data for the TV Show "Breaking Bad"
    fetch('https://breakingbadapi.com/api/episodes')
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            
     
        console.log('--------------------------------');
        console.log(`Tally of episodes by season:`);
        console.log(getEpisodeTallyBySeason(json));

        let tallyArr = Object.values(getEpisodeTallyBySeason(json));

    
            var chart = document.getElementById("chart");
                chart = c3.generate({
                data: {
                    columns: [
                        ['Episode Count', tallyArr[0],tallyArr[1],tallyArr[2],tallyArr[3], tallyArr[4]]
                    ],
                    type: 'bar'
                },
                bar: {

                    width: 100
                }
            });
        })
    
    
    

        const getEpisodeTallyBySeason = function(json) {
            let tallyBySeason = json
            .filter(function(x){return x.characters.includes("Walter White")})
            .map(x => [x.season])
            .reduce((tally, season) => {tally[parseInt(season)] = (tally[parseInt(season)] || 0) + 1;
            return tally;}, {}) 
            return tallyBySeason;
        };




    
    };


    