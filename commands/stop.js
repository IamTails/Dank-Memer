exports.run = async function (client, msg) {

	if (!msg.member.voiceChannel) 
		return msg.channel.send('You\'re not even in a voice channel <:waitwhat:320387072290455554>')
	
	if (client.voiceConnections.get(msg.guild.id)) {
		client.voiceConnections.get(msg.guild.id).channel.leave()
		msg.react('😢')
	} else {
		return msg.channel.send('I\'m not even in a voice channel <:waitwhat:320387072290455554>')
	}
}