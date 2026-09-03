'use strict';

import { createFromStruct } from '@simplybuilder/core-dom';
import { contentData } from './content.js';

const modInterface = Object.create(null);

modInterface.start = () => {
  const root = createFromStruct({
    struct: {
      element: 'section',
      dataset: { state: 'site-contact' },
      attr: { class: 'contact', id: 'contato' },
      children: [
        {
          element: 'div',
          attr: { class: 'container contact__inner' },
          children: [
            {
              element: 'h2',
              attr: { class: 'section-title' },
              text: contentData.contact.title,
            },
            {
              element: 'ul',
              attr: { class: 'contact__list' },
              children: contentData.contact.socials.map((social) => ({
                element: 'li',
                attr: { class: 'contact__item' },
                children: [
                  {
                    element: 'a',
                    attr: {
                      class: 'contact__link',
                      href: social.url,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                    text: social.label,
                  },
                ],
              })),
            },
          ],
        },
      ],
    },
  });

  if (root === false) {
    console.error('Falha ao criar a seção de contato');
  }
};

export const contact = Object.freeze(modInterface);