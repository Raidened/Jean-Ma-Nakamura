const Discord = require("discord.js")
const client = new Discord.Client() 
const token_file = require("./token_file.json") 
const ref_jeanma = [ 
    "Chuis pas Président, Tu peux manger HALAL",
    "T'as un peu chaud ? J'aère, Ta vision d'la France ? J'adère !",
    "N'est-ce-Pas", 
    "Jean-Ma Nakamura",
    "Marine préfère poupou à papa",
    "Wallah mais je déconne !",
    "C'est pas comme ça qu'on fait les choses !",
    "Thermostat 4 baby tu crames SAH !",
    "Oh Djadjeanne !",
    "Y'a pas moyen, Djadjeanne !",
    "Y'a de la place, Y'a de la place, Y'a de la place, Pour ta ..., Pour ta ..., Pour ta ...",
    "Train première place pour ..., et une escale a ...",
    "il est tombé du mirador",
    "Jeanne au secours",
    "Sarkozy, c'est son saltimbanque de père",
    "Je vais te faire courir moi tu vas voir, rouquin...",
    "LCI c'est mes ennemies",
    "J'te renvoie dans ton PI",
    "Yallah famille no mali",
    "J'emploie souvent la negation",
    "Ce n'est qu'un point de détail !",
    "Vous faites des procès pour me salir !",
    "Tu sors des citations de leur contexte"
    ]
client.on('ready', () => {
    console.log("Amogusus")
});

client.on("message", (msg) => {
    if(msg.channel.type === 'dm') return ;
    if(msg.author.id === '862023408329555968') return ;
    const ref_choisie = ref_jeanma[Math.floor(Math.random() * ref_jeanma.length - 1)]
    const rdm_walla = Math.floor(Math.random() * 20)
    if(rdm_walla === 4){
        msg.channel.send(ref_choisie);
    }
})




client.login(token_file.Token)

