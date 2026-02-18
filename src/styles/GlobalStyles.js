// src/styles/GlobalStyles.js
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body { font-family: Arial, sans-serif; background-color: #f4f4f9; margin: 0; padding: 20px; }
`;

export const Container = styled.div`
  max-width: 600px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

export const ContactCard = styled.div`
  border-bottom: 1px solid #eee; padding: 10px 0; display: flex; justify-content: space-between; align-items: center;
`;

export const Button = styled.button`
  padding: 8px 12px; margin-left: 5px; cursor: pointer; border: none; border-radius: 4px;
  background-color: ${props => props.delete ? '#ff4d4d' : '#4CAF50'}; color: white;
  &:hover { opacity: 0.8; }
`;

export const Form = styled.form`
  display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;
  input { padding: 10px; border: 1px solid #ddd; border-radius: 4px; }
`;
