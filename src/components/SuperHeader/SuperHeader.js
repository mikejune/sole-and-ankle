import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
// import Spacer from '../Spacer' // Not-so-modern solution #2

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      {/* <Spacer size={24} /> */}
      <HelpLink href="/help">Help</HelpLink>
      {/* <Spacer size={24} /> */}
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  align-items: center;

  /* Solution */
  display: flex;

  /* Modern Solution */
  gap: 24px;

  /* My Solution */
  padding: 8px 32px;

  /* JC Solution */
  height: 40px; 
  padding-right: 32px;
  padding-left: 32px;

`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  /* Not-so-modern Solution #1 */
  /* margin-left: 24px; */
  /* margin-right: 24px; */

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
