import React from 'react';
import styled from 'styled-components';

const StyledP =styled.p`
  color: #f00;
  font-size: 20px;
  font-weight: bold;
`;
/**
 * 
 * Component Composition (Component 합성)
 * 
 */
function Content({children}) {
    return (
        <StyledP>
            {children}
        </StyledP>
    );
}

export default Content;