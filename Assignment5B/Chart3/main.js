window.onload = function(){
    //Get data for the TV Show "Breaking Bad"
    fetch('https://breakingbadapi.com/api/episodes')
        .then(function(response){
            return response.json();
        })
        .then(function(json){

            let walter = Object.values(walterMentioned(json));
            let jesse = Object.values(jesseMentioned(json));
            let skyler = Object.values(skylerMentioned(json));
            let walterJr = Object.values(walterJrMentioned(json));
            let hank = Object.values(hankMentioned(json));


            var chart = c3.generate({
                data: {
                    x: 'x',
                //    xFormat: 'x', // 'xFormat' can be used as custom format of 'x'
                    columns: [
                        ['x', '1', '2', '3', '4', '5'],
                        ['Walter', walter[0],walter[1],walter[2],walter[3],walter[4]]
                    ]
                }
            });
            
            setTimeout(function () {
                chart.load({
                    columns: [
                        ['Jesse', jesse[0],jesse[1],jesse[2],jesse[3],jesse[4]]
                    ]
                });
            }, 2000);

            setTimeout(function () {
                chart.load({
                    columns: [
                        ['Skyler', skyler[0],skyler[1],skyler[2],skyler[3],skyler[4]]
                    ]
                });
            }, 5000);

            setTimeout(function () {
                chart.load({
                    columns: [
                        ['WalterJr', walterJr[0],walterJr[1],walterJr[2],walterJr[3],walterJr[4]]
                    ]
                });
            }, 8000);

            setTimeout(function () {
                chart.load({
                    columns: [
                        ['Hank', hank[0],hank[1],hank[2],hank[3],hank[4]]
                    ]
                });
            }, 11000);



        })//end fetch



        const walterMentioned = function(json){
            let tallyBySeason = json
            .filter(function(x){return x.characters.includes("Walter White")})
            .map(x => [x.season])
            .reduce((tally, season) => {tally[parseInt(season)] = (tally[parseInt(season)] || 0) + 1;
            return tally;}, {}) 
            return tallyBySeason;
        }

        const jesseMentioned = function(json){
            let tallyBySeason = json
            .filter(function(x){return x.characters.includes("Jesse Pinkman")})
            .map(x => [x.season])
            .reduce((tally, season) => {tally[parseInt(season)] = (tally[parseInt(season)] || 0) + 1;
            return tally;}, {}) 
            return tallyBySeason;
        }

        const skylerMentioned = function(json){
            let tallyBySeason = json
            .filter(function(x){return x.characters.includes("Skyler White")})
            .map(x => [x.season])
            .reduce((tally, season) => {tally[parseInt(season)] = (tally[parseInt(season)] || 0) + 1;
            return tally;}, {}) 
            return tallyBySeason;
        }

        const walterJrMentioned = function(json){
            let tallyBySeason = json
            .filter(function(x){return x.characters.includes("Walter White Jr.")})
            .map(x => [x.season])
            .reduce((tally, season) => {tally[parseInt(season)] = (tally[parseInt(season)] || 0) + 1;
            return tally;}, {}) 
            return tallyBySeason;
        }

        const hankMentioned = function(json){
            let tallyBySeason = json
            .filter(function(x){return x.characters.includes("Hank Schrader")})
            .map(x => [x.season])
            .reduce((tally, season) => {tally[parseInt(season)] = (tally[parseInt(season)] || 0) + 1;
            return tally;}, {}) 
            return tallyBySeason;
        }


      
    };