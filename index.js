const Discord = require('./node_modules/discord.js');
const { Guild, VoiceChannel, GuildMember, Client, TextChannel, User, SystemChannelFlags } = require('discord.js');
const { sleep } = require('sleep');

const bot = new Discord.Client();


var prefix = '--'; 
console.log('bot è on');
bot.login(process.env.TOKEN_TOUR);
const cooldown= new Set();
 
bot.on('message', msg =>{
   var args= msg.content.substring(prefix.length).split(" ");

   if(args[0]=='shuffle'){
    //msg.channel.send("uhh chissà chi ha vinto il giretto");
    var chan= bot.channels[msg.member.voice.channel.id];
    msg.channel.send(chan);
    /*var utenti= chan.members;
    for(var x in utenti){
      console.log(x.userID);
    }*/
  // prende l'id 

    //console.log(mems[0]);

   }
 
   if(args[0]==='tour'){
    var member = args[1];
    if(cooldown.has(msg.author.id)){
      msg.reply("cojone basta spammare ora aspetti 3 min");
    
    }else{
     
      if(!args[1]){
        msg.reply("chi?");
      }else{
        cooldown.add(msg.author.id);
        var textArray = [
          'bravo cojone mò fatte ngiretto',
          'facce sapè poi come è andato il tour',
          'counque mò devi pagà mer giro eh a stronzo',
          'te sei guadagnato un bel giretto, per informazioni scrivimi su: cha_.ndu',
          
      ];
      var randomNumber = Math.floor(Math.random()*textArray.length);
      msg.channel.send(member+" "+textArray[randomNumber]);
      let id= msg.mentions.users.first();
        
        var allChannels =[];
    
    
    msg.guild.channels.cache.forEach(channel => { 
      if (channel.type === "voice") {
         allChannels.push(channel.name); 
         //console.log(channel.name);
    
        }
    });
    
       allChannels.forEach(elemento => {
        msg.guild.member(id).voice.setChannel(msg.guild.channels.cache.find(channel => channel.name === elemento));
       })
      }
      
      setTimeout(()=>{
       cooldown.delete(msg.author.id);
      },180000)// cooldown 3 minuti
     

    }
    
    
    //(msg.mentions.users.first())
   /* const channel = bot.channels.cache.get("736258145881686030");
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
       
        console.log("conesso");
    }).catch(e => {

        /
        console.error(e);
    });
    var channel1 = msg.guild.channels.cache.filter(m => m.type === 'voice').size;
    msg.channel.send('hello');
    msg.member.voice.setChannel();
    // user(message.mentions.users.first()).setVoiceChannel(VoiceChannel.name('Generale'))*/
  
  
    
   }
})
