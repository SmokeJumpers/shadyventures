const sites = {
  prefix: ['pix', 'jobz', 'codeschool'],
  suffix: ['liberty', 'plastic', 'fluffy']
};

const pitchParts = {
  techSite: ['Instagram', 'Facebook', 'LinkedIn'],
  newIdea: ['questionably legal', 'gamified', 'like tinder'],
  audience: ['kids', 'mormons', 'millennials']
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