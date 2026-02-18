// src/App.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, removeContact, editContact } from './store/contactsSlice';
import * as S from './styles/GlobalStyles';

const ContactApp = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  // Estados para o formulário
  const [formData, setFormData] = useState({ id: null, name: '', email: '', phone: '' });
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(editContact(formData));
      setIsEditing(false);
    } else {
      dispatch(addContact({ ...formData, id: Date.now().toString() }));
    }
    setFormData({ id: null, name: '', email: '', phone: '' });
  };

  const handleEditTrigger = (contact) => {
    setFormData(contact);
    setIsEditing(true);
  };

  return (
    <S.Container>
      <S.GlobalStyle />
      <h1>Agenda de Contatos</h1>
      
      <S.Form onSubmit={handleSubmit}>
        <input 
          placeholder="Nome Completo" 
          value={formData.name} 
          onChange={e => setFormData({...formData, name: e.target.value})} 
          required 
        />
        <input 
          placeholder="E-mail" 
          type="email"
          value={formData.email} 
          onChange={e => setFormData({...formData, email: e.target.value})} 
          required 
        />
        <input 
          placeholder="Telefone" 
          value={formData.phone} 
          onChange={e => setFormData({...formData, phone: e.target.value})} 
          required 
        />
        <S.Button type="submit">{isEditing ? 'Atualizar' : 'Adicionar'}</S.Button>
      </S.Form>

      <div>
        {contacts.map(contact => (
          <S.ContactCard key={contact.id}>
            <div>
              <strong>{contact.name}</strong><br/>
              <small>{contact.email} | {contact.phone}</small>
            </div>
            <div>
              <S.Button onClick={() => handleEditTrigger(contact)}>Editar</S.Button>
              <S.Button delete onClick={() => dispatch(removeContact(contact.id))}>Excluir</S.Button>
            </div>
          </S.ContactCard>
        ))}
      </div>
    </S.Container>
  );
};

export default ContactApp;
