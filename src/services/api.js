const sites = {
  prefix: [
    'alchemy',
    'roomz',
    'shoppy',
    'VR',
    'tummy',
    'palz',
    'cpde',
    'pix',
    'werk',
    'thumbsup',
    'eco',
    'poster',
    'skunkworks',
    'safetyviolations',
    'match',
    'edgynews',
    'docs',
    'rater',
    'smart',
    'vidz',
    'search'
  ],

  suffix: [
    'liberty',
    'games',
    'plastic',
    'tinder',
    'impossible',
    'edible',
    'organic',
    'fluffy',
    'slow',
    'music',
    'safe',
    'pro',
    'obama',
    'heatlh',
    'color',
    'usa',
    'game',
    'jeeves',
    'open',
    'snowcrash',
    'furbery',
    'spy'
  ]
};

const pitchParts = {
  techSite: [
    'AirBnB',
    'Amazon',
    'Augmented Reality',
    'Blue Apron',
    'Facebook',
    'GitHub',
    'Instagram',
    'LinkedIn',
    'RateMe',
    'recycling',
    'Reddit',
    'a 3D printer',
    'Tesla',
    'Tinder',
    'Vice News',
    'WebMD',
    'Yelp',
    'Wikipedia',
    'YouTube',
    'Google'
  ],

  newIdea: [
    'gamified',
    'made of plastic',
    'like Tinder',
    'hard to use',
    'edible',
    '100% local and organic',
    'fluffy',
    'really slow',
    'a jukebox musical',
    'completely inclusive',
    'focus-group approved',
    'Obamacare',
    'DIY healthcare',
    'purple',
    'representative democracy',
    'an MMO',
    'AskJeeves',
    'an open-source API',
    'Augmented reality video',
    'the next Tickle-Me Elmo',
    'Alexa'
  ],

  audience: [
    {
      audience: 'cab drivers',
      domain: '.cab'
    },
    {
      audience: 'zoo animals',
      domain: '.eco'
    },
    {
      audience: 'the elderly',
      domain: '.bargains'
    },
    {
      audience: 'small children',
      domain: '.kinder'
    },
    {
      audience: 'dogs',
      domain: '.dog'
    },
    {
      audience: 'mormons',
      domain: '.mormon'
    },
    {
      audience: 'single parents',
      domain: '.mom'
    },
    {
      audience: 'lobbyists',
      domain: '.consulting'
    },
    {
      audience: 'newlyweds',
      domain: '.wedding'
    },
    {
      audience: 'hot singles in your area',
      domain: '.dating'
    },
    {
      audience: 'disruptors',
      domain: '.ventures'
    },
    {
      audience: 'the 1%',
      domain: '.rich'
    },
    {
      audience: 'vegans',
      domain: '.farm'
    },
    {
      audience: 'teenage CEOs',
      domain: '.ceo'
    },
    {
      audience: 'developers',
      domain: '.codes'
    },
    {
      audience: 'fitness enthusiasts',
      domain: '.active'
    },
    {
      audience: 'rural americans',
      domain: '.country'
    },
    {
      audience: 'lawyers',
      domain: '.legal'
    },
    {
      audience: 'journalists',
      domain: '.press'
    },
    {
      audience: 'B-List superheroes',
      domain: '.ninja'
    },
    {
      audience: 'the recently deceased',
      domain: '.rip'
    },
    {
      audience: 'the paranoid',
      domain: '.secure'
    },
    {
      audience: 'packrats',
      domain: '.storage'
    },
    {
      audience: 'futurists',
      domain: '.technology'
    },
    {
      audience: 'celebrities',
      domain: '.vip'
    },
    {
      audience: 'workaholics',
      domain: '.work'
    }
  ]
};

function getNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function removeSpaces(string) {
  return string.replace(/\s+/g,'');
}

export default {
  getPitch() {
    const { techSite, newIdea, audience } = pitchParts;
    const { prefix, suffix } = sites;

    const techIndex = getNumber(0, techSite.length);
    const ideaIndex = getNumber(0, newIdea.length);
    const audienceIndex = getNumber(0, audience.length);

    const prefixIndex = getNumber(0, prefix.length);
    const suffixIndex = getNumber(0, suffix.length);

    return {
      url: `${prefix[prefixIndex]}${suffix[suffixIndex]}.${removeSpaces(audience[audienceIndex])}${removeSpaces(newIdea[ideaIndex])}.${audience[audienceIndex].domain}`,
      pitch: `It's ${techSite[techIndex]}, but ${newIdea[ideaIndex]} for ${audience[audienceIndex].audience}`
    }
  }
};