let initialId = 0

export const addToList = (text) => {
    initialId = initialId + 1
    return ({
        type: 'ADD_TO_LIST',
        item: {
            id: initialId,
            text,
        }
    })
}

export const onChange = (value) => ({
    type: 'ON_CHANGE',
    value,
  })

  export const onClick = (value) => ({
    type: 'ON_CLICK',
    value,
  })
  
  export const onClear = () => ({
    type: 'ON_CLEAR',
  })