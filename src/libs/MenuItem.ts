import { menuOptions } from './constants';
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

// const icon = [faFacebook, faGoogle, faTwitter, faInstagram];
const icon = [
  {
    url: 'https://www.facebook.com/dprcsingh',
    key: faFacebook,
  },
  {
    url: 'https://www.instagram.com/rohit_singh0203/',
    key: faInstagram,
  },
  {
    url: 'https://www.google.com/dprcsingh',
    key: faGoogle,
  },
  {
    url: 'https://www.twitter.com/dprcsingh',
    key: faTwitter,
  },
];

export { icon, menuOptions };
