'use strict';

import { createFromStruct } from '@simplybuilder/core-dom';
import { contentData } from './content.js';

const modInterface = Object.create(null);

modInterface.start = () => {
  const root = createFromStruct({
    struct: {
      element: 'section',
      dataset: { state: 'site-about' },
      attr: { class: 'about', id: 'sobre' },
      children: [
        {
          element: 'div',
          attr: { class: 'container about__inner' },
          children: [
            {
              element: 'h2',
              attr: { class: 'section-title' },
              text: contentData.about.title,
            },
            {
              element: 'div',
              attr: { class: 'about__body' },
              children: contentData.about.paragraphs.map((p) => ({
                element: 'p',
                attr: { class: 'about__paragraph' },
                text: p,
              })),
            },
            {
              element: 'ul',
              attr: { class: 'about__disciplines' },
              children: contentData.about.disciplines.map((d) => ({
                element: 'li',
                attr: { class: 'about__discipline' },
                text: d,
              })),
            },
            {
              element: 'p',
              attr: { class: 'about__founder' },
              children: [
                { element: 'span', attr: { class: 'about__founder-label' }, text: 'Idealizado por ' },
                { element: 'strong', text: contentData.about.founder },
              ],
            },
          ],
        },
      ],
    },
  });

  if (root === false) {
    console.error('Falha ao criar a seção sobre');
  }
};

export const about = Object.freeze(modInterface);