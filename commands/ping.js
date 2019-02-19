module.exports = {
	name: 'ping',
	desc: 'Checks the ping.',
	execute(message, args) {
			message.channel.send('Pinging...')
				.then((sent) => {
					sent.edit(`My ping is (${sent.createdTimestamp - message.createdTimestamp}ms)`);
				});
	}
};