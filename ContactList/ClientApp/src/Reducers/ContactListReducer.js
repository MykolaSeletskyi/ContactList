const initialState = {
  ContactList: [],
  CurrentContact: null,
};

const ContactListReducer = (state = initialState, action) => {
    console.log("action",action.type);
  switch (action.type) {
    case "UPDATE_CONTACT_LIST":
      return {
        ...state,
        ContactList: action.payload.List,
      };
    case "ADD_CONTACT":
      return {
        ...state,
        ContactList: action.payload,
      };
      case "DELETE_CONTACT":
      return {
        ...state,
        ContactList: action.payload,
      };
      case "EDIT_CONTACT":
        return {
          ...state,
          ContactList: action.payload,
        };
      case "SET_CURRENT_CONTACT":
        console.log("SET_CURRENT_CONTACT 22",action.payload)
        return {
          ...state,
          CurrentContact: action.payload,
        };
    default:
      return state;
  }
};

export default ContactListReducer;
