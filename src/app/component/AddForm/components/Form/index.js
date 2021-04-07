import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { selectIsFetching } from 'redux/quote/selectors';
import { LoadingIndicator } from '../LoadingIndicator';
import { Input } from '../Input';
import { Button } from '../Button';

export function Form({ onHandleChange, person, message }) {
  const isFetching = useSelector(selectIsFetching);

  return (
    <>
      <h2>Add a new quote</h2>
      <Input
        onChange={onHandleChange}
        value={message}
        type="text"
        name="message"
        label="Quote"
      />
      <Input
        onChange={onHandleChange}
        value={person}
        type="text"
        name="person"
        label="Person"
      />
      {isFetching ? (
        <LoaderWrap>
          <LoadingIndicator />
        </LoaderWrap>
      ) : (
        <Button type="submit">Submit</Button>
      )}
    </>
  );
}

const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;

  svg {
    fill: #fff;
  }
`;
