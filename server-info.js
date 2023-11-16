// fetch("https://api.minetools.eu/ping/YourServerIP/Port") and without this two things do not edit anything or you may messup the code

fetch("https://api.minetools.eu/ping/fr-free-2.cortexnodes.com/30503").then((discord1)=>{
    console.log(discord1.status);
    return discord1.json();

}).then((discord)=>{

    let playerdata= discord.players.online;

    document.getElementById("players").innerHTML= playerdata;
})

//made by dkytgaming https://github.com/dkytgaming
