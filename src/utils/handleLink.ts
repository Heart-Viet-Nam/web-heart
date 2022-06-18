export const getYoutubeId = (link: string) => {
  const mainDomain = 'https://www.youtube.com/watch?v=';
  const shortDomain = 'https://youtu.be/';

  if (link.includes(mainDomain) === true) {
    const youtubeId = link.split('v=')[1];
    return youtubeId;
  }

  if (link.includes(shortDomain) === true) {
    const youtubeId = link.split('be/')[1];
    return youtubeId;
  }

  throw new Error('Invalid Link');
};
