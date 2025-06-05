// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Certifique-se de importar o CSS corretamente
import './pages/index.css';
import './App.css'
import Index from './pages/index';  // Corrigir para importação padrão

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Index />  {/* Agora renderiza o componente Index */}
  </StrictMode>,
);
