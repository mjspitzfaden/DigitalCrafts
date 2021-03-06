
export function addContact (data) {
  return {
    type: 'ADD_CONTACT',
    data: data
  }
}

export function updateAttr (index, key, value) {
  return {
    type: 'UPDATE_ATTR',
    index: index,
    key: key,
    value: value
  }
}

export function deleteAttr (index) {
  return {
    type: 'DELETE_ATTR',
    index: index
  }
}
