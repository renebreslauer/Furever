import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import '../App.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>FILTER BY:</h3>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        </InputGroup.Prepend>
        <FormControl aria-label="Text input with checkbox" />
      </InputGroup>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Radio aria-label="Radio button for following text input" />
        </InputGroup.Prepend>
        <FormControl aria-label="Text input with radio button" />
      </InputGroup>
    </div>
  );
};

export default Sidebar;
