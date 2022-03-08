const size = {
  mobile: "425px",
  tablet: "768px",
  desktop: "1440px",
};

const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktopL: `@media only screen and (max-width: ${size.desktop})`,
};

const theme = {
  device,
};

export default theme;
