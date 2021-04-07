import styled from 'styled-components/macro';

export function Quote({ message, person }) {
  return (
    <QuoteContainer>
      <QuoteWrap>{message}</QuoteWrap>
      <Person>{person}</Person>
    </QuoteContainer>
  );
}

const QuoteContainer = styled.div`
  padding: 1rem;
  border-bottom: 1px solid lightgray;

  &:last-child {
    border-bottom: 0;
  }
`;

const QuoteWrap = styled.p`
  font-style: italic;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const Person = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;
