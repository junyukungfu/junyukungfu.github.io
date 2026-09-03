'use strict';

import '@styles/main.scss';

import { domModuleExtends } from '@simplybuilder/core-dom';
import { EventModule } from '@simplybuilder/core-event';

domModuleExtends(EventModule);

import { app } from '@mods/mod.js';

const bootstrap = () => {
  try {
    const mods = app.start();
    mods.header();
    mods.hero();
    mods.about();
    mods.gallery();
    mods.locationSection();
    mods.contact();
    mods.footer();
  } catch (err) {
    console.error('Falha ao carregar módulos da aplicação:', err);
  }
};

window.document.addEventListener('DOMContentLoaded', bootstrap);