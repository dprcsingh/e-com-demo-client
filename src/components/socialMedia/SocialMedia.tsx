import React from 'react';
import Stack from '../stack/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  vertical?: boolean;
  space?: string;
  justifyContent?: string;
  icon: any;
  children?: React.ReactNode;
};

const SocialMedia = (props: Props) => {
  const { vertical, space, justifyContent, icon } = props;
  const font = icon.map((key: any) => {
    return (
      <div key={key.iconName}>
        <a href="#">
          <FontAwesomeIcon
            icon={key}
            className={`socialMedia ${key.iconName}`}
          />
        </a>
      </div>
    );
  });
  return (
    <Stack vertical={vertical} space={space} justifyContent={justifyContent}>
      {font}
    </Stack>
  );
};
export default SocialMedia;
