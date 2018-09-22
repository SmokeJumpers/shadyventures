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
    'kids',
    'cab drivers',
    'zoo animals',
    'the elderly',
    'small children',
    'dogs',
    'mormons',
    'single parents',
    'lobbyists',
    'newlyweds',
    'hot singles in your area',
    'disruptors',
    'the 1%',
    'vegans',
    'teenage CEOs',
    'developers',
    'fitness enthusiasts',
    'rural americans',
    'lawyers',
    'journalists',
    'B-List superheroes',
    'the recently deceased',
    'the paranoid',
    'packrats',
    'futurists',
    'celebrities',
    'workaholics'
  ]
};

export default {
  getPitch() {
    const { techSite, newIdea, audience } = pitchParts;
    const { prefix, suffix } = sites;


    return {
      url: `${prefix[0]}.${audience[0]}${newIdea[0]}.${suffix[0]}`,
      pitch: `It/'s ${techSite[0]}, but ${newIdea[0]} for  ${audience[0]}`
    }
  }
};