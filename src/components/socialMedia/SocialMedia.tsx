import React from 'react';
import Stack from '../stack/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type key = {
  url: string;
  icon: object;
};
type Props = {
  vertical?: boolean;
  space?: string;
  justifyContent?: string;
  icon: any;
  children?: React.ReactNode;
};

const SocialMedia = (props: Props) => {
  const { vertical, space, justifyContent, icon } = props;
  const font = icon.map((key: any, index: number) => {
    return (
      <div key={index}>
        <a href={key.url}>
          <FontAwesomeIcon
            icon={key.key}
            className={`socialMedia ${key.key.iconName}`}
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
