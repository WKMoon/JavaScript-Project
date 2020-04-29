window.onload = function(){
    //Get data for the TV Show "Friends"
    fetch('https://breakingbadapi.com/api/quotes')
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            console.log(breakingBadSeries(json));
            console.log(nonBreakingBadSeries(json));

            var chart = document.getElementById("chart");
            chart = c3.generate({
                data: {
                    columns: [
                        ['BreakingBad Series', breakingBadSeries(json)],
                        ['Non BreakingBad Series', nonBreakingBadSeries(json)]
                    ],
                    type : 'donut',
                    onclick: function (d, i) { console.log("onclick", d, i); },
                    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                },
                donut: {
                    title: "Series"
                }
            });

    })

        const breakingBadSeries = function(json){
            return json
                .filter( x => x.series === "Breaking Bad")
                .map(y => [y.series]).length;
        }//getCastMembersOver55


        const nonBreakingBadSeries = function(json){
            return json
                .filter( x => x.series !== "Breaking Bad")
                .map(y => [y.series]).length;
        }//getCastMembersOver55


    };