/* eslint-disable no-undef */
/* eslint-disable prefer-object-spread */
import { SHOW_DETAILS } from '../actions/index';

const details = (state = [], action) => {
  switch (action.type) {
    case SHOW_DETAILS: {
      let newState;
      if (action.update === 1) {
        newState = {
          color: action.pDetail.data.types[0].type.name,
          name: action.pDetail.data.name,
          index: ((action.pDetail.data.id).toString().length === 3) ? action.pDetail.data.id : (('0').repeat(3 - (action.pDetail.data.id).toString().length) + action.pDetail.data.id),
          type: action.pDetail.data.types,
          height: (action.pDetail.data.height) / 10,
          weight: (action.pDetail.data.weight) / 10,
          abilities: action.pDetail.data.abilities,
          baseExperience: action.pDetail.data.base_experience,
        };
      } else {
        newState = {
          entriesText: action.pDetail.data.flavor_text_entries.filter(language => language.language.name.match('en')).map(text => text.flavor_text),
          eggGroups: action.pDetail.data.egg_groups,
          captureRate: action.pDetail.data.capture_rate,
          baseHappiness: action.pDetail.data.base_happiness,
          growthRate: action.pDetail.data.growth_rate.name,
          genderRate: action.pDetail.data.gender_rate,
        };
      }

      return Object.assign({}, state, newState);
    }
    default: return state;
  }
};

export default details;
