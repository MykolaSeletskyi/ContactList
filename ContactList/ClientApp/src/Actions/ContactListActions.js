export const UpdateContactList = (contactList) => {
    console.log("UPDATE_CONTACT_LIST",contactList)
    return {
        type: "UPDATE_CONTACT_LIST",
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