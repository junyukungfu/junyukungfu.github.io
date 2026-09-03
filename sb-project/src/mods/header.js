'use strict';

import { createFromStruct, getElementFromStore } from '@simplybuilder/core-dom';
import { eventRegister } from '@simplybuilder/core-event';
import { contentData } from './content.js';

const modInterface = Object.create(null);

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#localizacao', label: 'Localização' },
  { href: '#contato', label: 'Contato' },
];

modInterface.start = () => {
  // Alternância do menu em telas pequenas.
  eventRegister('toggleNav', () => {
    const nav = getElementFromStore('site-nav');
    const btn = getElementFromStore('nav-toggle');
    if (nav && btn) {
      const aberto = nav.dataset.open === 'true';
      nav.dataset.open = String(!aberto);
      btn.dataset.open = String(!aberto);
      btn.setAttribute('aria-expanded', String(!aberto));
    }
  });

  const root = createFromStruct({
    struct: {
      element: 'header',
      dataset: { state: 'site-header' },
      attr: { class: 'site-header' },
      children: [
        {
          element: 'a',
          attr: { class: 'site-header__brand', href: '#inicio', 'aria-label': contentData.brand.fullName },
          children: [
            {
              element: 'img',
              attr: { class: 'site-header__logo', src: '/assets/img/logo.svg', alt: contentData.brand.fullName },
            },
            {
              element: 'span',
              attr: { class: 'site-header__name' },
              text: contentData.brand.name,
            },
          ],
        },
        {
          element: 'button',
          dataset: { state: 'nav-toggle' },
          attr: { class: 'site-header__toggle', type: 'button', 'aria-label': 'Abrir menu', 'aria-expanded': 'false' },
          event: { type: 'click', action: 'toggleNav' },
          children: [
            { element: 'span', attr: { class: 'site-header__toggle-line' } },
            { element: 'span', attr: { class: 'site-header__toggle-line' } },
            { element: 'span', attr: { class: 'site-header__toggle-line' } },
          ],
        },
        {
          element: 'nav',
          dataset: { state: 'site-nav' },
          attr: { class: 'site-header__nav' },
          children: navLinks.map((link) => ({
            element: 'a',
            attr: { class: 'site-header__link', href: link.href },
            text: link.label,
          })),
        },
      ],
    },
  });

  if (root === false) {
    console.error('Falha ao criar o cabeçalho');
  }
};

export const header = Object.freeze(modInterface);