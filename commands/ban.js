module.exports = {
  name: 'ban',
  description: "This command Bans a member!",
  execute(message, args){

    if(message.member.roles.cache.has('875166239192932532')){

      const target = message.mentions.users.first();
      if(target){
          const memberTarget = message.guild.members.cache.get(target.id);
          memberTarget.kick();
          message.channel.send("User has been Banned");
      }else{
          message.channel.send(`You coudn't Ban that member!`);
      }

    }else {
      message.channel.send('You cant send this command because you dont have the right Perms!');
    }
  }
}