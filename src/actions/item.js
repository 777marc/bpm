export const addItemAction = ({ name = '', type = ''} = {}) => 
  ({
    type: 'ADD_ITEM_ACTION',
    payload: {
      name,
      type
    }
  });