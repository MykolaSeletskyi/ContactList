import { Component } from "react";
import { connect } from "react-redux";

// Import API Service
import apiService from "../../../Services/APIService";
// Import actions
import { UpdateContactList, SetCurrentContact} from "../../../Actions/ContactListActions";
import Contactitem from "./ContactItem/ContactItem";

// Import components
class ContactList extends Component {
  constructor(props)
  {
    super(props);
    this._SetCurrentContact = this._SetCurrentContact.bind(this); 
    this._DeleteContact = this._SetCurrentContact.bind(this);   
  }
  componentDidMount() {
    console.log("111",this.props);
      apiService.GetContactList().then((contactList) => {
        this.props.UpdateContactList(contactList);
      });
    console.log("111",this.props);
  }
  _DeleteContact(e) {
    const index = this.props.ContactList.findIndex(
      (item) =>{console.log(item); return item.Id === e.currentTarget.id}
    );
    const list = this.props.ContactList
    list.splice(index, 1);
    apiService.updateDatabse(list);
    this.props.UpdateContactList(list);
  }

  _SetCurrentContact(Id) {
    const index = this.props.ContactList.findIndex(
      (elem) => elem.Id === Id
    );
     const currentContact = this.props.ContactList[index];
     this.props.SetCurrentContact(currentContact);
  }
  render() {
    if (this.props.ContactList?.length > 0) {
      return this.props.ContactList.map((item) => {
        return (
          <Contactitem
            key={item.Id}
            {...item}
            DeleteContact={this._DeleteContact}
            SetCurrentContact={this._SetCurrentContact}
          />
        );
      });
    }
    return (
      <section>
        <p className="emptyList">Contact list is empty.</p>
      </section>
    );
  }
}

const mapStateToProps = ({ ContactListReducer }) => {
  const { ContactList } = ContactListReducer;
  const { CurrentContact } = ContactListReducer;
  return { ContactList, CurrentContact };
};

const mapDispatchToProps = {
  UpdateContactList,
  SetCurrentContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);