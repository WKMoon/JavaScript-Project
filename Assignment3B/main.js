//Choose an array method to implement for each of the incomplete functions.
//FOR/WHILE LOOPS OF ANY KIND ARE FORBIDDEN! You must use the available array functions to accomplish your goal.

//Remember, you can chain together array function calls to attain your goals.
// Ex: array.filter().map()

//Get data for the TV Show "Friends"
fetch('http://api.tvmaze.com/shows/431?embed[]=episodes&embed[]=cast')
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        
 
        //DO NOT MODIFY THE CODE IN HERE...check the console for your functions' output

        //1 - Create a function called getGuntherCount() which returns the total number of episodes 
        // where the character Gunther is mentioned in the episode summary.
        console.log('--------------------------------');
        console.log(`Gunther Count: ${getGuntherCount(json)}`);

        //2 - Create a function called getTotalRuntimeMinutes() that totals all runtime minutes for all episodes
        console.log('--------------------------------');
        console.log(`Total Runtime Minutes: ${getTotalRuntimeMinutes(json)}`);

        //3 - Create a function called getDateRangeEpisodeCount() that returns the number of episodes that aired in the year 2000
        console.log('--------------------------------');
        console.log(`Total episodes airing in year 2000: ${getTotalEpisodesInYear(json, "2000")}`);

        //4 - Create a function called getFemaleCastMembers() that returns an array of the names of the female cast members.
        console.log('--------------------------------');
        console.log(`Female Cast Members:`);
        console.log(getFemaleCastMembers(json));

        //5 - Create a function called getEpisodeTitles() which returns a list of episode
        //    where the argument string is found in the episode summary.
        console.log('--------------------------------');
        console.log(`Episodes that mention Ursula:`);
        console.log(getEpisodeTitles(json, 'Ursula'));

        //6 - Create a function called getCastMembersOver55() which returns a list of cast members
        //    who are currently older than 55 years of age.
        console.log('--------------------------------');
        console.log(`Cast Members over 55:`);
        console.log(getCastMembersOver55(json));

        //7 - Create a function called getTotalRuntimeMinutesExcludingSeasonSix that gets the total 
        //    runtime minutes for all episodes excluding episodes in season 6
        console.log('--------------------------------');
        console.log(`Total runtime in minutes excluding Season 6: ${getTotalRuntimeMinutesExcludingSeasonSix(json)}`);
    
        //8 - Create a function called getFirstFourSeasons that gets the episodes for the first four seasons 
        //    but only return an array of JSON objects containing the season number and episode name
        console.log('--------------------------------');
        console.log(`Episode JSON for first four seasons:`)
        console.log(getFirstFourSeasons(json));

        //9 - Create a function called getEpisodeTallyBySeason that returns an object containing the season name and the total episodes as key:value pairs for each season
        console.log('--------------------------------');
        console.log(`Tally of episodes by season:`);
        console.log(getEpisodeTallyBySeason(json));

        //10 - Create a funtion called capitalizeTheFriends that transforms the episode JSON data by capitalizing the words Joey, Chandler, Monica, Rachel, Phoebe, and Ross in both 
        //the name and summary of the episodes.
        console.log('--------------------------------');
        console.log('Capitalized Friends');
        console.log(capitalizeTheFriends(json));

        
    })

// COMPLETE THE FOLLOWING FUNCTIONS BY IMPLEMENTING MAP, REDUCE, OR FILTER 
// (or a combination) ON THE PROVIDED JSON DATA

// Define the required ten functions below this line...


//1st function
const getGuntherCount = function(json){
    return json._embedded.episodes
    .filter(function(name){return name.summary.includes("Gunther")}).length;
}//end getGuntherCount

//2nd function
const getTotalRuntimeMinutes = function(json){
    return json._embedded.episodes
    .map(function(run){return run.runtime})
    .reduce((a,b) => a+b,0);
}//end getTotalRuntimeMinutes

//3rd function
const getTotalEpisodesInYear = function(json,time){
    return json._embedded.episodes
    .filter(function(year){return year.airdate.includes(time)}).length;
}//getTotalEpisodesInYear

//4th function
const getFemaleCastMembers = function(json){
    return json._embedded.cast
    .filter(function(sex){return sex.person.gender.includes("Female")})
    .map(function(female){return female.person.name});
}//getFemaleCastMembers

//5th function
const getEpisodeTitles = function(json,name){
    return json._embedded.episodes
    .filter(function(sum){return sum.summary.includes(name)})
    .map(function(epiName){return epiName.name})
}//end getEpisodeTitles

//6th function
const getCastMembersOver55 = function(json){
    var today = new Date();
    var year = today.getFullYear();
    return json._embedded.cast
        .filter(function(age){
        let castAge = parseInt(age.person.birthday); 
        let gap = year - castAge; 
        return gap > 55})
    .map(function(castName){return castName.person.name});
}//getCastMembersOver55

//7th function
const getTotalRuntimeMinutesExcludingSeasonSix = function(json){
    return json._embedded.episodes
    .filter(function(exclude){return exclude.season !== 6})
    .map(function(mapping){return mapping.runtime})
    .reduce((a,b) => a+b,0);
}//getTotalRuntimeMinutesExcludingSeasonSix

//8th function
const getFirstFourSeasons = function(json){
    return json._embedded.episodes
    .filter(function(four){return four.season === 1 || four.season === 2 || four.season === 3 || four.season === 4})
    .map(function(numEpi){return [numEpi.season, numEpi.name]});
}//getFirstFourSeasons

//9th function
//source for 9th
//https://medium.freecodecamp.org/reduce-f47a7da511a9
const getEpisodeTallyBySeason = function(json) {
    let tallyBySeason = json._embedded.episodes.map(x => [x.season]).reduce((tally, season) => {
        tally[season] = (tally[season] || 0) + 1;
        return tally;
    }, {}) 
    return tallyBySeason;
};//getEpisodeTallyBySeason

//10th function
//source for 10th
//https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings
const capitalizeTheFriends = function(json){
    return json._embedded.episodes
    .map(function(cap){
        var mapObj = {"Joey":"JOEY","Chandler":"CHANDLER", "Monica":"MONICA", "Rachel":"RACHEL", "Phoebe":"PHOEBE", "Ross":"ROSS"};

        cap.name = cap.name.replace(/Joey|Chandler|Monica|Rachel|Phoebe|Ross/gi, function(matched){
            return mapObj[matched];
          });
          
        cap.summary = cap.summary.replace(/Joey|Chandler|Monica|Rachel|Phoebe|Ross/gi, function(matched){
            return mapObj[matched];
        });

        return [cap.name,cap.summary];
    });
    
}//capitalizeTheFriends
// // Joey, Chandler, Monica, Rachel, Phoebe, Ross
//JOEY, CHANDLER, MONICA, RACHEL, PHOEBE, ROSS




