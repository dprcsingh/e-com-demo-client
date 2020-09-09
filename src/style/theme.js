const dayTheme = {
  background: '#ffffff',
  color: '#121212',
  menu: {
    background: 'rgba(51, 51, 51, 0.6)',
    color: 'rgba(0, 0, 0, 0.68)',
  },
};
const nightTheme = {
  background: '#121212',
  color: '#ffffff',
  menu: {
    background: '',
    color: 'r#ffffff',
  },
};

const theme = (type) => {
  return type === 'light' ? dayTheme : nightTheme;
};
export default theme;
