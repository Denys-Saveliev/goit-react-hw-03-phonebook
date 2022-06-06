import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Container from './Container';
import Section from './Section';
import ContactForm from './contactForm';
import Filter from './Filter';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSearchContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContactList = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  formSubmitHandler = data => {
    this.setState(prevState => {
      if (
        prevState.contacts.find(
          contact => contact.name.toLowerCase() === data.name.toLowerCase()
        )
      ) {
        alert(`${data.name} is already in contacts`);
        return;
      }
      return { contacts: [...prevState.contacts, { id: nanoid(), ...data }] };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>

        <Section title="Contacts">
          <Filter value={filter} onSearch={this.handleSearchContact} />
          <ContactList
            contacts={this.filterContactList()}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
