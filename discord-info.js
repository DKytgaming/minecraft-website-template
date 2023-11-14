// "https://discordapp.com/api/guilds/1152879821349724160/embed.json" is my server widget go into server settings and then go to widget and copy json api and you will get this link https://discord.com/api/guilds/1152879821349724160/widget.json and change /widget.json to /embed.json

fetch("https://discordapp.com/api/guilds/1152879821349724160/embed.json").then((discord1)=>{
    console.log(discord1.status);
    return discord1.json();

}).then((discord)=>{

    let discordapp= discord['presence_count'];

    document.getElementById("disc").innerHTML= discordapp;

})


//made by dkytgaming https://github.com/dkytgaming