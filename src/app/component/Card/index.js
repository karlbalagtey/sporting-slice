import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';

export function Card({ children }) {
  return <CardWrap>{children}</CardWrap>;
}

const CardWrap = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ffffff;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0px 0px 5px -3px;

  &.full {
    width: 100%;
  }

  @media (min-width: ${StyleConstants.TABLET}) {
    width: 50%;
  } ;
`;
