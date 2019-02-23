module.exports = {
    name: 'user',
    desc: 'Shows information of a user.',
    execute: async function(message, args) {
        
        let user;
        let member;
       
        if(message.mentions.users.size)
        {
            user = message.mentions.users.first();
            member = message.guild.members.get(user.id);
        }
       
        else if(args[0])
        {
            user = await message.client.fetchUser(args[0]);
            if (!user) {
                console.log(user);
                console.log(message.client.users.size, message.client.users.has(args[0]), args)
                return message.channel.send('[This user ID is invalid!]');
            }
            member = message.guild.members.get(user.id);
        }

        else
        {
            user = message.author;
            member = message.member;
        }
       
        const createTime = user.createdAt;
       
        let Csec = createTime.getSeconds().toString().length === 1 ? '0' + createTime.getSeconds() : createTime.getSeconds();
        let Cmin = createTime.getMinutes().toString().length === 1 ? '0' + createTime.getMinutes() : createTime.getMinutes();
        let Chour = createTime.getHours().toString().length === 1 ? '0' + createTime.getHours() : createTime.getHours();
       
        const embed = new Discord.RichEmbed()
        
            .setTitle(`${user.username} [${user.id}]`)
            .setColor(0xFFDC56)
            .setThumbnail(user.avatarURL)
            .addField('[Account created at...]', createTime.toDateString() + ', ' + Chour + ':' + Cmin + ':' + Csec + ', GMT');
        
        if(member)
        {
            const joinTime = member.joinedAt;
            let Jsec = joinTime.getSeconds().toString().length === 1 ? '0' + joinTime.getSeconds() : joinTime.getSeconds();
            let Jmin = joinTime.getMinutes().toString().length === 1 ? '0' + joinTime.getMinutes() : joinTime.getMinutes();
            let Jhour = joinTime.getHours().toString().length === 1 ? '0' + joinTime.getHours() : joinTime.getHours();
            
             embed
            .addField('[Joined server at...]', joinTime.toDateString() + ', ' + Jhour + ':' + Jmin + ':' + Jsec + ', GMT')
            .addField(`[${user.username} has the following roles...]`, member.roles.map(r => r.name).join(', '));
        
        }
        
        if(user.id === '513805373803593731')
        {
            let kibID = client.users.get('179615735365107712');
            embed
            .addField('[What am I?]', 'I am a Discord bot, programmed in JavaScript and made by Kibblekip!')
        }
    
        message.channel.send(embed);
        console.log(`${message.author.tag} (${message.author.id}) just checked for ${user.tag} (${user.id})'s info!`);
    }   
}
