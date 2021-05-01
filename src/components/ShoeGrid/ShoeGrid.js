import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

// JC prefers to create ShoeWrapper component because maybe we would use ShoeCard in non-flex situations

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper key={shoe.slug}>
          <ShoeCard  {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* My Solution */
  display: flex;
  flex-wrap: wrap;

  /* Modern Solution */
  /* gap: 36px; */

  /* JC legacy solution */
  margin: -16px;
`;

const ShoeWrapper = styled.div`
  /* JC Solution #1 */
  /* width: 275px; */

  /*
     JC Solution #2: allows cards to grow
     - Side effect for not evenly divisible is size difference
  */
  min-width: 275px;
  flex: 1;

  /* JC legacy solution */
  margin: 16px;
`

export default ShoeGrid;
