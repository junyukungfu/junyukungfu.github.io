'use strict';

/**
 * Conteúdo do site — dados fornecidos pelo cliente.
 * Centraliza textos, endereço, redes e a galeria de fotos.
 * Nenhum dado é codificado inline nos mods de UI.
 */
const content = {
  brand: {
    name: 'Junyu Kung Fu',
    fullName: 'Centro de Artes Marciais Sheng Junyu Kung Fu Instituto',
    slogan: 'Artes marciais em Castanhal',
  },
  hero: {
    title: 'Sheng Junyu Kung Fu Instituto',
    subtitle: '功夫',
    lede: 'Um espaço dedicado à prática e ao ensino das artes marciais no bairro Pirapora, em Castanhal – Pará.',
  },
  about: {
    title: 'Sobre o Instituto',
    paragraphs: [
      'Academia de artes marciais localizada no bairro Pirapora, em Castanhal – Pará, com o intuito de aluguel de horários para professores de diversas artes marciais desenvolverem e ensinarem suas artes.',
      'O local foi idealizado por Antonio Júnior, que por muitos anos pratica artes marciais — principalmente Kung Fu, Capoeira e Karatê — e hoje gerencia este espaço.',
    ],
    founder: 'Antonio Júnior',
    disciplines: ['Kung Fu', 'Capoeira', 'Karatê'],
  },
  location: {
    title: 'Onde Estamos',
    address: 'Rua Eurico do Vale, 1089 – Pirapora, Castanhal – PA, 68740-290',
    mapsLink: 'https://maps.app.goo.gl/rgKSeCrPsEz19Db4A?g_st=aw',
    mapsEmbed: 'https://www.google.com/maps?q=Centro+de+Artes+Marciais+Sheng+Junyu+Kung+Fu+Instituto,+R.+Eurico+do+Vale,+1089,+Pirapora,+Castanhal,+PA&output=embed',
  },
  contact: {
    title: 'Contato e Redes Sociais',
    socials: [
      { label: 'Facebook', url: 'https://www.facebook.com/antonio.rodriguesjunior.10' },
      { label: 'Instagram — Tony Júnior', url: 'https://www.instagram.com/tonyjunior85/' },
      { label: 'Instagram — Darkness Shadow', url: 'https://www.instagram.com/darknessshadow2026/' },
    ],
  },
  gallery: {
    title: 'Artes Marciais',
    intro: 'Kung Fu, Capoeira, Karatê e outras artes encontram espaço para florescer.',
    photos: [
      { src: '/assets/img/photo-arte-chute.jpg', alt: 'Antonio Júnior executando um chute durante treino de artes marciais' },
      { src: '/assets/img/photo-kungfu-placas.jpg', alt: 'Antonio Júnior segurando placas de madeira com inscrições chinesas' },
      { src: '/assets/img/photo-uniforme-tradicional.jpg', alt: 'Antonio Júnior com uniforme tradicional chinês' },
      { src: '/assets/img/photo-postura-kungfu.jpg', alt: 'Antonio Júnior em postura de Kung Fu' },
    ],
  },
};

export const contentData = Object.freeze(content);