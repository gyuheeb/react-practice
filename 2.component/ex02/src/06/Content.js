import React from 'react';
import styled from 'styled-components';

const StyledP =styled.p`
  color: ${(props)=> props.color ? props.color : "#111"};
  font-size: 20px;
  font-weight: bold;
`;
/**
 * 
 * Component Composition (Component 합성)
 * 
 */
function Content({children, color}) {
    return (
        <StyledP color = {color}>
            {children}
        </StyledP>
    );
}

export default Content;