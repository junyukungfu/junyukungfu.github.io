'use strict';

import { createFromStruct } from '@simplybuilder/core-dom';

/**
 * Mod "Em breve" — página de manutenção/aguardando com identidade
 * visual chinesa (junyukungfu). Constrói toda a UI via SBObject.
 */
const modInterface = Object.create(null);

modInterface.start = () => {
  const root = createFromStruct({
    struct: {
      element: 'section',
      dataset: { state: 'coming-soon' },
      attr: { class: 'coming-soon' },
      children: [
        {
          element: 'div',
          attr: { class: 'coming-soon__frame' },
          children: [
            {
              element: 'div',
              attr: { class: 'coming-soon__inner' },
              children: [
                {
                  element: 'img',
                  attr: {
                    class: 'coming-soon__logo',
                    src: '/assets/img/logo.svg',
                    alt: 'Logo Junyu Kung Fu',
                  },
                },
                {
                  element: 'div',
                  attr: { class: 'coming-soon__ornament' },
                  children: [
                    { element: 'span', attr: { class: 'coming-soon__line' } },
                    { element: 'span', attr: { class: 'coming-soon__diamond' } },
                    { element: 'span', attr: { class: 'coming-soon__line' } },
                  ],
                },
                {
                  element: 'h1',
                  attr: { class: 'coming-soon__title' },
                  text: 'Em Breve',
                },
                {
                  element: 'p',
                  attr: { class: 'coming-soon__subtitle' },
                  text: '即将推出',
                },
                {
                  element: 'p',
                  attr: { class: 'coming-soon__message' },
                  text: 'Estamos preparando o novo site do Centro de Artes Marciais Sheng Junyu Kung Fu Instituto.',
                },
              ],
            },
          ],
        },
        {
          element: 'footer',
          attr: { class: 'coming-soon__footer' },
          text: 'Bairro Pirapora · Castanhal · Pará',
        },
      ],
    },
  });

  if (root === false) {
    console.error('Falha ao criar a página Em breve');
  }
};

export const comingSoon = Object.freeze(modInterface);
