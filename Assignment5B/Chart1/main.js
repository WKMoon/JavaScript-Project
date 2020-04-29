window.onload = function(){
//Get data for the TV Show "Breaking Bad"
fetch('https://breakingbadapi.com/api/episodes')
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        

        console.log('--------------------------------');
        console.log(`Hector Count: ${getHectorCount(json)}`);

        console.log('--------------------------------');
        console.log(`Non Hector Count: ${getNonHectorCount(json)}`);

        // "Hector Salamanca"

        var chart = document.getElementById("chart");
            chart = c3.generate({
            data: {
                // iris data from R
                columns: [
                    ['Hector', getHectorCount(json)],
                    ['NonHector', getNonHectorCount(json)],
                ],
                type : 'pie',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            }
        });
    })



    const getHectorCount = function(json){
        return json
        .filter(function(name){return name.characters.includes("Hector Salamanca")}).length;
    }

    const getNonHectorCount = function(json){
        return json
        .filter(function(name){return !name.characters.includes("Hector Salamanca")}).length;
    }

};