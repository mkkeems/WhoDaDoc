const colors = {
  blue: '#3C92E2',
  orange: '#EA751F',
  lightOrange: '#FEF8EA',
};

// for media query
const customMediaQuery = (maxWidth) => `@media (max-width: ${maxWidth}px)`;

const breakpoints = {
  custom: customMediaQuery,
  xs: customMediaQuery(330),
  sm: customMediaQuery(592),
  md: customMediaQuery(768),
  lg: customMediaQuery(992),
  xl: customMediaQuery(1024),
  xxl: customMediaQuery(1280),
  xxxl: customMediaQuery(1440),
};

// ${theme.breakpoints.xxl} {
//   font-size: 32px;
// }

const getVwFunction = (width) => `calc(${width}vw / 14.4)`;

const getVhFunction = (width) => `calc(${width}vh / 9)`;

const theme = {
  colors,
  breakpoints,
  getVwFunction,
  getVhFunction,
  customMediaQuery,
};

export default theme;
