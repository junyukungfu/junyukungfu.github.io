'use strict';

import { createFromStruct } from '@simplybuilder/core-dom';
import { contentData } from './content.js';

const modInterface = Object.create(null);

modInterface.start = () => {
  const root = createFromStruct({
    struct: {
      element: 'footer',
      dataset: { state: 'site-footer' },
      attr: { class: 'site-footer' },
      children: [
        {
          element: 'div',
          attr: { class: 'container site-footer__inner' },
          children: [
            {
              element: 'p',
              attr: { class: 'site-footer__brand' },
              children: [
                { element: 'strong', text: contentData.brand.name },
              ],
            },
            {
              element: 'p',
              attr: { class: 'site-footer__info' },
              text: contentData.location.address,
            },
            {
              element: 'p',
              attr: { class: 'site-footer__copy' },
              text: `© ${new Date().getFullYear()} ${contentData.brand.fullName}. Todos os direitos reservados.`,
            },
          ],
        },
      ],
    },
  });

  if (root === false) {
    console.error('Falha ao criar o rodapé');
  }
};

export const footer = Object.freeze(modInterface);