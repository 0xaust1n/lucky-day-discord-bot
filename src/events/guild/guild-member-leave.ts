import { ChannelType, Client, EmbedBuilder, GuildMember } from 'discord.js';
import 'dotenv/config';
// alert user when receive role
const channelId: string = process.env.ALERT_JOIN_CHANNEL || null;
const name = 'guildMemberRemove';
const once = false;
const execute = async (leaveMember: GuildMember, client: Client<boolean>) => {
  if (!!channelId) {
    const channel = client.channels.cache.get(channelId);
    if (channel.type === ChannelType.GuildText) {
      const resultEmbed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setAuthor({
          name: 'Revival Kyuubi',
          iconURL:
            'https://media.discordapp.net/attachments/1103170701634043996/1155255407766425721/image.png?width=424&height=402',
        })
        .setThumbnail(leaveMember.displayAvatarURL())
        .addFields({
          name: '--離開通知--',
          value: `${leaveMember.displayName} **離開了** :(`,
        })
        .setTimestamp();
      channel.send({ embeds: [resultEmbed] });
    }
  }
};

export { execute, name, once };
