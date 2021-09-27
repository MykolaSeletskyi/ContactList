const initialState = {
  ContactList: [],
  CurrentContact: null,
};

const ContactListReducer = (state = initialState, action) => {
  console.log("action", action.type);
  switch (action.type) {
    case "UPDATE_CONTACT_LIST":
   console.log("action 2", action);
      return {
        ...state,
        ContactList: action.payload.List,
      };
    case "SET_CURRENT_CONTACT":
      console.log("SET_CURRENT_CONTACT 22", action.payload);
      return {
        ...state,
        CurrentContact: action.payload,
      };
    default:
      return state;
  }
};

export default ContactListReducer;
