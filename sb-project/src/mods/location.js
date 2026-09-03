'use strict';

import { createFromStruct } from '@simplybuilder/core-dom';
import { contentData } from './content.js';

const modInterface = Object.create(null);

modInterface.start = () => {
  const root = createFromStruct({
    struct: {
      element: 'section',
      dataset: { state: 'site-location' },
      attr: { class: 'location', id: 'localizacao' },
      children: [
        {
          element: 'div',
          attr: { class: 'container location__inner' },
          children: [
            {
              element: 'h2',
              attr: { class: 'section-title' },
              text: contentData.location.title,
            },
            {
              element: 'address',
              attr: { class: 'location__address' },
              text: contentData.location.address,
            },
            {
              element: 'iframe',
              attr: {
                class: 'location__map',
                src: contentData.location.mapsEmbed,
                title: 'Mapa do Centro de Artes Marciais Sheng Junyu Kung Fu Instituto',
                loading: 'lazy',
                referrerpolicy: 'no-referrer-when-downgrade',
                allowfullscreen: '',
              },
            },
            {
              element: 'a',
              attr: {
                class: 'btn btn--primary location__link',
                href: contentData.location.mapsLink,
                target: '_blank',
                rel: 'noopener noreferrer',
              },
              text: 'Abrir no Google Maps',
            },
          ],
        },
      ],
    },
  });

  if (root === false) {
    console.error('Falha ao criar a seção de localização');
  }
};

export const locationSection = Object.freeze(modInterface);