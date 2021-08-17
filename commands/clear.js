module.exports = {
  name: 'clear',
  description: "This is a Clear command!",
  async execute(message, args){

    if(message.member.roles.cache.has('875166239192932532')){

    
    
      if(!args[0]) return message.channel.send("Do ?clear then put a Number");
      if(isNaN(args[0])) return message.channel.send("Please enter a real Number!");

      if(args[0] > 99) return message.channel.send("You canno't delete more than 100 Messages!");
      if(args[0] < 1) return message.channel.send("You must delete atleast 1 Message!");

       await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
      });

    }else {
      message.channel.send('You cant send this command because you dont have the right Perms!');
    }
  } 
}