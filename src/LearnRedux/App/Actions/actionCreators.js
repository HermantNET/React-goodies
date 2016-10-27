export function addName(name) {
	return {
		type: 'ADD_NAME',
		name
	}
}

export function removeName(index) {
  return {
    type: 'REMOVE_NAME',
    index
  }
}

export function toggleRemoveMode() {
	return {
		type: 'TOGGLE_REMOVE_MODE'
	}
}

export function increaseTextSize(index) {
	return {
	  type: 'INCREASE_TEXT_SIZE',
    index
	}
}