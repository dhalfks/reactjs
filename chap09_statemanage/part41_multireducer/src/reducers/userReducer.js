const initialUserState = { name: 'Guest' };

function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { name: action.payload };
    default:
      return state;
  }
}

export default userReducer;