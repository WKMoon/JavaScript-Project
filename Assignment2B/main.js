(function () {
        //Fetch API
    fetch("https://breakingbadapi.com/api/episodes")
    // balldontlie
    .then(function(response){
        return response.json();
    })

    // var jsonKeys = Object.keys(myJson);


    .then(function(myJson){

            myJson.forEach(function(element){
                document.getElementById("demo").innerHTML += "ID: "+element.episode_id+"<br/>"
                +" Title: "+element.title+"<br/>"
                +" Season: "+element.season+"<br/>"
                +" Air_Date: "+element.air_date+"<br/>"
                +" Characters: "+element.characters+"<br/>"
                +" Episode: "+element.episode+"<br/>"
                +" Series: "+element.series+"<br/>"
                +"<br/><br/>";
            });  
        });


    //         $(document).ready(function(){

    //     $("button").click(function(){
    //         $.ajax({url: "https://www.balldontlie.io/api/v1/players", success: function(result){
    //         // $("#demo").html("test");
    //         result.forEach(function(element){
    //                     $("#demo").append("Data: "+element.data+"<br/>"
    //                     +" Data.ID: "+element.data.id+"<br/>"
    //                     +" Data.FN: "+element.data.first_name+"<br/>"
    //                     +" Data.HF: "+element.data.height_feet+"<br/>"
    //                     +" Data.HI: "+element.data.height_inches+"<br/>"
    //                     +" Data.LN: "+element.data.last_name+"<br/>"
    //                     +" Data.Position: "+element.data.position+"<br/>"
    //                     +" Data.Team: "+element.data.team+"<br/>"
    //                     +" Data.TeamID: "+element.data.team.id+"<br/>"
    //                     +" Data.TeamAbbreviation: "+element.data.team.abbreviation+"<br/>"
    //                     +" Data.TeamCity: "+element.data.team.city+"<br/>"
    //                     +" Data.TeamConference: "+element.data.team.conference+"<br/>"
    //                     +" Data.TeamDivision: "+element.data.team.division+"<br/>"
    //                     +" Data.TeamFullName: "+element.data.team.full_name+"<br/>"
    //                     +" Data.TeamName: "+element.data.team.name+"<br/>"
    //                     +" Data.WeightPounds: "+element.data.weight_pounds+"<br/>"
        
    //                     +" Meta: "+element.meta+"<br/>"
    //                     +" Meta.TotalPages: "+element.meta.total_pages+"<br/>"
    //                     +" Meta.CurrentPage: "+element.meta.current_page+"<br/>"
    //                     +" Meta.NextPage: "+element.meta.next_page+"<br/>"
    //                     +" Meta.PerPage: "+element.meta.per_page+"<br/>"
    //                     +" Meta.TotalCount: "+element.meta.total_count+"<br/>"
    //                     );
    //                 });
        
    //         }});
    //     });

    // });

})();