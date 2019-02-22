module.exports = {
    name: 'user',
    desc: 'Shows information of a user.',
    execute(message, args) {

        function UFM(mention) {
            const matches = mention.match(/^<@!?(\d+)>$/);
            if (matches) {
                return message.guild.members.get(matches[1]).user;
            }
            else {return null;}
        }

        function RFM(mention) {
            const matches = mention.match(/^<@!?(\d+)>$/);
            if (matches) {
                return message.guild.roles.get(matches[1]).user;
            }
            else {return null;}
        }

        const user = UFM(args[1]);
        const role = RFM(args[1]);

        if (user.prefix) {
            return message.reply('Please mention a user to see their info!')
        }

        const createTime = user.createdAt;
        const joinTime = message.member.joinedAt;
        
        let Csec = createTime.getSeconds().toString().length === 1 ? '0' + createTime.getSeconds() : createTime.getSeconds();
        let Cmin = createTime.getMinutes().toString().length === 1 ? '0' + createTime.getMinutes() : createTime.getMinutes();
        let Chour = createTime.getHours().toString().length === 1 ? '0' + createTime.getHours() : createTime.getHours();

        let Jsec = joinTime.getSeconds().toString().length === 1 ? '0' + joinTime.getSeconds() : joinTime.getSeconds();
        let Jmin = joinTime.getMinutes().toString().length === 1 ? '0' + joinTime.getMinutes() : joinTime.getMinutes();
        let Jhour = joinTime.getHours().toString().length === 1 ? '0' + joinTime.getHours() : joinTime.getHours();

        const embed = new Discord.RichEmbed()

        if (guild.member(UFM)) {
            embed
            .setTitle(`${UFM.username} [${UFM.user.id}]`)
            .setColor(0xFFDC56)
            .setThumbnail(UFM.avatarURL)
            .addField('[Account created at...]', createTime.toDateString() + ', ' + Chour + ':' + Cmin + ':' + Csec + ', GMT')
            .addField('[Joined server at...]', joinTime.toDateString() + ', ' + Jhour + ':' + Jmin + ':' + Jsec + ', GMT')
            .addField(`[${UFM.username} has the following roles...]`, role.roles.map(r => r.name).join)
            }
    }
}