import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from './themes';

type GlobalThemeProps = {
  theme: ThemeProps;
};

const globalStyle = createGlobalStyle`
  html, body {
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
  }

  input {
    width: 100%;
    padding: 4px 8px;
    box-sizing: border-box;
    border: none;
    resize: none;
    box-shadow: var(--border-field);
    font-family: Millennium, sans-serif;
    font-size: 18px;
    color: ${({ theme }: GlobalThemeProps) => theme.input_text};
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
  }

  textarea {
      width: 100%;
      height: 150px;
      padding: 4px 8px;
      border: none;
      box-sizing: border-box;
      resize: none;
      box-shadow: var(--border-field);
      font-family: Millennium, sans-serif;
      font-size: 18px;
      color: ${({ theme }: GlobalThemeProps) => theme.input_text};
      background-color: ${({ theme }: GlobalThemeProps) => theme.background};
  }

  textarea:focus,
  textarea:active,
  input:focus,
  input:active {
      outline: none;
      color: ${({ theme }: GlobalThemeProps) => theme.input_text};
      background-color: ${({ theme }: GlobalThemeProps) => theme.input_background};
  }

  ::placeholder {
    color: ${({ theme }: GlobalThemeProps) => theme.placeholder};
  }

  ::-ms-input-placeholder { /* Edge 12 -18 */
    color: ${({ theme }: GlobalThemeProps) => theme.placeholder};
  }

  .big-button-container:hover {
    background-color: ${({ theme }: GlobalThemeProps) => theme.surface_hover}; 
  }

  .button-border {
    box-sizing: border-box;
    background: ${({ theme }: GlobalThemeProps) => theme.surface_hover}; 
    box-shadow: var(--border-raised-outer), var(--border-raised-inner);
    border-radius: 0;
    border: none;
  }
  
  .site-button {
    box-sizing: border-box;
    background: ${({ theme }: GlobalThemeProps) => theme.surface_hover}; 
    box-shadow: var(--border-raised-outer), var(--border-raised-inner);
    border-radius: 0;
    border: none;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
    font-size: 18px;
    /* flex-shrink: 1; */
    padding: 4px 12px;
    cursor: pointer;
    font-family: Millennium;
    overflow: hidden;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .site-button:hover {
    background-color: ${({ theme }: GlobalThemeProps) => theme.surface_hover};
  }

  #showcase {
    background-color: ${({ theme }: GlobalThemeProps) => theme.background}; 
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

  #resumeContainer {
    border: 2px solid ${({ theme }: GlobalThemeProps) => theme.text};
  }

  #credits-app {
    width: 100%;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
    padding-top: 64;
    flex-direction: column;
    align-items: center;
    padding-bottom: 64;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
    overflow: hidden;
  }

`;

export default withTheme(globalStyle);