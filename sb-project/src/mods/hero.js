'use strict';

import { createFromStruct } from '@simplybuilder/core-dom';
import { contentData } from './content.js';

const modInterface = Object.create(null);

modInterface.start = () => {
  const root = createFromStruct({
    struct: {
      element: 'section',
      dataset: { state: 'site-hero' },
      attr: { class: 'hero', id: 'inicio' },
      children: [
        {
          element: 'div',
          attr: { class: 'hero__inner' },
          children: [
            {
              element: 'img',
              attr: { class: 'hero__logo', src: '/assets/img/logo.svg', alt: contentData.brand.fullName },
            },
            {
              element: 'p',
              attr: { class: 'hero__subtitle', 'aria-hidden': 'true' },
              text: contentData.hero.subtitle,
            },
            {
              element: 'h1',
              attr: { class: 'hero__title' },
              text: contentData.hero.title,
            },
            {
              element: 'p',
              attr: { class: 'hero__lede' },
              text: contentData.hero.lede,
            },
            {
              element: 'div',
              attr: { class: 'hero__actions' },
              children: [
                { element: 'a', attr: { class: 'btn btn--primary', href: '#sobre' }, text: 'Conheça o Instituto' },
                { element: 'a', attr: { class: 'btn btn--ghost', href: '#contato' }, text: 'Fale Conosco' },
              ],
            },
          ],
        },
      ],
    },
  });

  if (root === false) {
    console.error('Falha ao criar o hero');
  }
};

export const hero = Object.freeze(modInterface);