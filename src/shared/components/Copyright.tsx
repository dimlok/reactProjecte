import React from "react";
import styled from "styled-components";

const Typo = styled.p`
  color: rgba(0, 0, 0, 0.54);
  text-align: center;
  font-size: 0.875rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
`;

const Link = styled.a`
  text-decoration: none;
`;

export default function Copyright() {
  return (
    <Typo>
      {'Copyright © '}
      <Link>
        Weikum Firma
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typo>
  );
}
