import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');
  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};

export const getDiscordServerInfo = async () => {
  const { data } = await axios.get('https://discord.com/api/v9/invites/Mthzm3fDg8?with_counts=true&with_expiration=true');
  return {
    info: `
    My Discord server: <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.social.discordServerInvite}" target="_blank">${data.guild.name}</a></u>
    Total Members: ${data.approximate_member_count}
    Members Actives: ${data.approximate_presence_count}
    `
  };
};

export const getPostsDevTo = async () => {
  const { data } = await axios.get(
    `https://dev.to/api/articles?username=${config.social.devToUsername}`,
  );
  return data;
};