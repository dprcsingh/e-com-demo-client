import React from 'react';
import Stack from '../stack/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
const font = [faFacebook, faTwitter, faInstagram, faGoogle];
const options = font.map((key) => {
  console.log('>>>>>>>>>>>>>>>', key);
  return (
    <Stack.Item>
      <a href="">
        <FontAwesomeIcon icon={key} className={`socialMedia ${key.iconName}`} />{' '}
      </a>
    </Stack.Item>
  );
});

const SocialMedia = (props) => {
  const { vertical, space, justifyContent } = props;
  return (
    <Wrapper>
      <Stack vertical={vertical} space={space} justifyContent={justifyContent}>
        {options}
      </Stack>
    </Wrapper>
  );
};
export default SocialMedia;
const Wrapper = styled.div``;
