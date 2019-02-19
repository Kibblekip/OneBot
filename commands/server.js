module.exports = {
    name: 'server',
    desc: 'Shows server information.',
    execute(message, args) {
        const gld = message.guild;
        let roleCount = gld.roles.size;
        let channelCount = gld.channels.size;
        let memberCount = gld.memberCount;
        const embed = new Discord.RichEmbed()
            .setTitle(gld.name)
            .setColor(0xCD59FF)
            .setThumbnail(gld.iconURL)
            .addField('Server ID', gld.id)
            .addField('Server Owner', `${gld.owner.user.tag} (${gld.owner.user.id})` )
            .addField('Number of Members', gld.memberCount)
            .addField('Number of Channels (& Categories)', channelCount)
            .addField('Number of Roles', roleCount)
        message.channel.send(embed);
    }
}