import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  border: 3px solid purple;
  padding: 10px;
`;

const Link = styled.li`
  margin-left: 20px;
`;

const Links = ({ links }) => {
  return (
    <Container>
      {links.map(x => (
        <Link key={x.url}>
          <a href={x.url}>{x.title}</a>
        </Link>
      ))}
    </Container>
  );
};

export default Links;
