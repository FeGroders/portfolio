// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.
'discord' - my discord server.`;
};

export const resume = async (args: string[]): Promise<string> => {
  if (config.resume_url != '') {
    window.open(`${config.resume_url}`);
    return 'Opening resume...';
  } else {
    return 'Under development...';
  }
};

// Donate
// export const donate = async (args: string[]): Promise<string> => {
//   return `thank you for your interest. 
// here are the ways you can support my work:
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
// `;
// };

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

// export const duckduckgo = async (args: string[]): Promise<string> => {
//   window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
//   return `Searching duckduckgo for ${args.join(' ')}...`;
// };

// export const bing = async (args: string[]): Promise<string> => {
//   window.open(`https://bing.com/search?q=${args.join(' ')}`);
//   return `Wow, really? You are using bing for ${args.join(' ')}?`;
// };

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// export const vi = async (args: string[]): Promise<string> => {
//   return `woah, you still use 'vi'? just try 'vim'.`;
// };

// export const vim = async (args: string[]): Promise<string> => {
//   return `'vim' is so outdated. how about 'nvim'?`;
// };

// export const nvim = async (args: string[]): Promise<string> => {
//   return `'nvim'? too fancy. why not 'emacs'?`;
// };

// export const emacs = async (args?: string[]): Promise<string> => {
//   return `you know what? just use vscode.`;
// };

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  ███████╗███████╗ ██████╗ ██████╗  ██████╗ ██████╗ ███████╗██████╗ ███████╗
  ██╔════╝██╔════╝██╔════╝ ██╔══██╗██╔═══██╗██╔══██╗██╔════╝██╔══██╗██╔════╝
  █████╗  █████╗  ██║  ███╗██████╔╝██║   ██║██║  ██║█████╗  ██████╔╝███████╗
  ██╔══╝  ██╔══╝  ██║   ██║██╔══██╗██║   ██║██║  ██║██╔══╝  ██╔══██╗╚════██║
  ██║     ███████╗╚██████╔╝██║  ██║╚██████╔╝██████╔╝███████╗██║  ██║███████║
  ╚═╝     ╚══════╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝
                                                                            
                                                            
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};

// Setup
export const setup = (args?: string[]): string => {
  return `
  PC
  Galax GTX 1060 6GB OC
  Intel Core i5-6400 2.7GHz
  RAM 16GB
  HD 1TB
  SSD Crucial BX500 240GB
  Windows 10

  LAPTOP - Acer Swift 3 SF314-59-56FS
  Intel Core i5-1135G7
  SSD 512GB
  RAM 8GB
  Ubuntu 20.04

  EQUIPMENTS
  Chair - DT3sports Elise
  Keyboard - Multilaser Warrior Kane TC235
  Mouse - DeathAdder Chroma
  Mousepad - Redragon Aquarius
  Headset - Razer Kraken Essential
  Iphone 8 64gb
  AirPods 2nd Gen

  TOOLS
  VS Code
  Figma
  Netbeans
  Android Studio
  
  THEME
  Dracula Theme
`;
};