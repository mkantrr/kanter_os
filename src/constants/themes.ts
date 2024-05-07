export interface ThemeProps {
  background: string;
  input_background: string;
  text: string;
  input_text: string;
  placeholder: string;
  surface_hover: string;
}

export const darkTheme: ThemeProps = {
  background: 'var(--dark-background)',
  input_background: 'var(--dark-input-background)',
  text: 'var(--dark-text)',
  input_text: 'var(--dark-input-text)',
  placeholder: 'var(--dark-placeholder)',
  surface_hover: 'var(--dark-surface-hover)',
};

export const lightTheme: ThemeProps = {
  background: 'var(--light-background)',
  input_background: 'var(--light-input-background)',
  text: 'var(--light-text)',
  input_text: 'var(--light-input-text)',
  placeholder: 'var(--light-placeholder)',
  surface_hover: 'var(--light-surface-hover)',
};