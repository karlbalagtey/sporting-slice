import styled from 'styled-components/macro';

export function Footer() {
  return (
    <FooterWrap>
      <Container>
        <small>2021 Sportlabs Technology Ltd. All rights reserved</small>
      </Container>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  background-color: #ffffff;
  padding: 1.5rem;
  margin-top: auto;
  display: flex;
  justify-content: center;

  small {
    font-size: 0.7rem;
  }
`;

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
`;
