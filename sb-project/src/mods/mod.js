'use strict';

import { header } from './header.js';
import { hero } from './hero.js';
import { about } from './about.js';
import { gallery } from './gallery.js';
import { locationSection } from './location.js';
import { contact } from './contact.js';
import { footer } from './footer.js';

const modInterface = Object.create(null);

modInterface.start = () => ({
  header: header.start,
  hero: hero.start,
  about: about.start,
  gallery: gallery.start,
  locationSection: locationSection.start,
  contact: contact.start,
  footer: footer.start,
});

export const app = Object.freeze(modInterface);