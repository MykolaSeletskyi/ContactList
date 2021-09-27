export const UpdateContactList = (contactList) => {
    return {
        type: "UPDATE_CONTACT_LIST",
        payload: contactList
    }
}

export const editContact = (contactList) => {
    return {
        type: "EDIT_CONTACT",
        payload: contactList
    }
}

export const DeleteContact = (contactList) => {
    return {
        type: "DELETE_CONTACT",
        payload: contactList
    }
}

export const SetCurrentContact  = (currentContact) => {
    console.log("SET_CURRENT_CONTACT 99",currentContact);
    return {
        type: "SET_CURRENT_CONTACT",
        payload: currentContact
    }
}