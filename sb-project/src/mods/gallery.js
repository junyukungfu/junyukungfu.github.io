'use strict';

import { createFromStruct } from '@simplybuilder/core-dom';
import { contentData } from './content.js';

const modInterface = Object.create(null);

modInterface.start = () => {
  const root = createFromStruct({
    struct: {
      element: 'section',
      dataset: { state: 'site-gallery' },
      attr: { class: 'gallery', id: 'galeria' },
      children: [
        {
          element: 'div',
          attr: { class: 'container gallery__inner' },
          children: [
            {
              element: 'h2',
              attr: { class: 'section-title' },
              text: contentData.gallery.title,
            },
            {
              element: 'p',
              attr: { class: 'gallery__intro' },
              text: contentData.gallery.intro,
            },
            {
              element: 'div',
              attr: { class: 'gallery__grid' },
              children: contentData.gallery.photos.map((photo) => ({
                element: 'figure',
                attr: { class: 'gallery__item' },
                children: [
                  {
                    element: 'img',
                    attr: {
                      class: 'gallery__img',
                      src: photo.src,
                      alt: photo.alt,
                      loading: 'lazy',
                    },
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
    console.error('Falha ao criar a galeria');
  }
};

export const gallery = Object.freeze(modInterface);