'use strict';

import '@styles/main.scss';

const bootstrap = () => {
  try {
   
  } catch (err) {
    console.error('Falha ao carregar módulos da aplicação:', err);
  }
};

window.document.addEventListener('DOMContentLoaded', bootstrap);
