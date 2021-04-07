import React from 'react';
import styled from 'styled-components/macro';

export function Input({ handleChange, label, ...props }) {
  return (
    <InputGroup>
      {label && <InputLabel>{label}</InputLabel>}
      <InputWrap onChange={handleChange} {...props} />
    </InputGroup>
  );
}

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

const InputWrap = styled.input`
  padding: 0.6rem;
`;

const InputLabel = styled.label`
  font-size: 0.8rem;
`;
