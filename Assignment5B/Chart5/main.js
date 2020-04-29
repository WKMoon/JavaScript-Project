window.onload = function(){
    //Get data for the TV Show "Breaking Bad"
    fetch('https://breakingbadapi.com/api/episodes')
        .then(function(response){
            return response.json();
        })
        .then(function(json){

            console.log(year2008Episodes(json));
            console.log(year2009Episodes(json));
            console.log(year2010Episodes(json));
            console.log(year2011Episodes(json));
            console.log(year2012Episodes(json));
            console.log(year2013Episodes(json));



        var chart = document.getElementById("chart");
        chart = c3.generate({
            data: {
                columns: [
                    ['EpisodesByEachYear', year2008Episodes(json), year2009Episodes(json), year2010Episodes(json), year2011Episodes(json), year2012Episodes(json), year2013Episodes(json)]
                ],
                types: {
                    EpisodesByEachYear: 'area-spline'
                }
            }
        });
        
            
        })


        const year2008Episodes = function(json){
            return json
            .filter(x => x.air_date.includes("2008"))
            .map(y => [y.episode]).length
            ;
        }

        const year2009Episodes = function(json){
            return json
            .filter(x => x.air_date.includes("2009"))
            .map(y => [y.episode]).length
            ;
        }

        const year2010Episodes = function(json){
            return json
            .filter(x => x.air_date.includes("2010"))
            .map(y => [y.episode]).length
            ;
        }

        const year2011Episodes = function(json){
            return json
            .filter(x => x.air_date.includes("2011"))
            .map(y => [y.episode]).length
            ;
        }

        const year2012Episodes = function(json){
            return json
            .filter(x => x.air_date.includes("2012"))
            .map(y => [y.episode]).length
            ;
        }

        const year2013Episodes = function(json){
            return json
            .filter(x => x.air_date.includes("2013"))
            .map(y => [y.episode]).length
            ;
        }



};            