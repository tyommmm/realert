import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root{
    --alertik-btn-confirm: #7cd1f9;
    --alertik-btn-confirm-hover: #4fc7ff;
    --alertik-btn-confirm-active: #4fc7ff;
    --alertik-btn-cancel: #EFEFEF;
    --alertik-btn-cancel-hover: #d8d8d8;
    --alertik-btn-cancel-active: #d8d8d8;
    --alertik-btn-danger: #e64942;
    --alertik-btn-danger-hover: #e03d36;
    --alertik-btn-danger-active: #e03d36;
    --alertik-focus-color: rgba(43, 114, 165, 0.3);
    --alertik-green: #A5DC86;
    --alertik-green-light: rgba(165, 220, 134, 0.2);
    --alertik-orange: #F8BB86;
    --alertik-red: #F27474;
    --alertik-blue: #C9DAE1;
  }
`;

export default GlobalStyles;