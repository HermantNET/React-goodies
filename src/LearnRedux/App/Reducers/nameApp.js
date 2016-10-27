import actionCreators from '../Actions/actionCreators';

// Application Init
const initialState = window.localStorage.length == 0 ?
  {
    names: [{name: 'Bobby', textSize: 1}],
    views: {
      layout: 'DEFAULT'
    },
    removeMode: false
  }
  :
  {
    names: JSON.parse(localStorage.getItem('names')),
    removeMode: false
  }

// Views reducer
function viewsReducer(views, action) {
  let newState;
  switch (action.type) {
    case 'SET_LAYOUT':
      newState = Object.assign({}, views, action.layout);
  }
  
  return newState;
}

// Name reducer
function namesReducer(names, action) {
  let newState;
  switch (action.type) {
    case 'ADD_NAME':
      newState = Object.assign({}, { names: names.concat({name: action.name, textSize: 1})} );
      localStorage.setItem('names', JSON.stringify(newState.names));
      break;
    case 'REMOVE_NAME':
      newState = Object.assign({}, { names: [
        ...names.slice(0, action.index),
        ...names.slice(action.index + 1)
      ]});
      localStorage.setItem('names', JSON.stringify(newState.names));
      break;
    case 'INCREASE_TEXT_SIZE':
      let entry = names[action.index];
      newState = Object.assign({}, { names: [
        ...names.slice(0, action.index),
        {name: entry.name, textSize: entry.textSize + 1},
        ...names.slice(action.index + 1)
      ]});
      localStorage.setItem('names', JSON.stringify(newState.names));
      break;
    default:
      return names;
  }

  return newState;
}

// Final reducer
export default function nameApp(state = initialState, action) {
  switch(action.type) {
    case 'ADD_NAME':
    case 'REMOVE_NAME':
    case 'INCREASE_TEXT_SIZE':
      return Object.assign({}, state, namesReducer(state.names, action));
    case 'TOGGLE_REMOVE_MODE':
      return Object.assign({}, state, { removeMode: !state.removeMode });
    case 'SET_LAYOUT':
      return Object({}, state, viewsReducer(state.views, action));
    default:
      return state;
  }
}