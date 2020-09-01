import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import contactsAction from '../../redux/contacts/contactsAction';

import './ContactList.css';

const Contacts = ({ value, onChange, onVisible, onRemove }) => (
  <div className="find-input">
    <label>
      Find contacts by name
      <input
        onChange={e => onChange(e.target.value)}
        value={value}
        name="filter"
      ></input>
    </label>
    <TransitionGroup component="ul">
      {onVisible.map(visibleTask => (
        <CSSTransition key={visibleTask.id} classNames="list" timeout={250}>
          <li className="name-list">
            {visibleTask.name}:{visibleTask.number}
            <button
              type="button"
              className="close-button"
              onClick={() => onRemove(visibleTask.id)}
            >
              delete
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  </div>
);

const mapStateToProps = state => ({
  onVisible: state.contacts.contacts.filter(task =>
    task.name.toLowerCase().includes(state.contacts.filter.toLowerCase()),
  ),
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onRemove: contactsAction.removeTask,
  onChange: contactsAction.nameCheck,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
