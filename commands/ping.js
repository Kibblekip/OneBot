module.exports = {
	name: 'ping',
	desc: 'Checks the bot ping.',
	execute(message, args) {
			message.channel.send('[Pinging...]')
				.then((sent) => {
					sent.edit(`[My ping is (${sent.createdTimestamp - message.createdTimestamp}ms)]`);
					console.log(`${message.author.tag} (${message.author.id}) just checked my ping!`);
				});
	}
};