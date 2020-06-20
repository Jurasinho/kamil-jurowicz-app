<template>
  <div class="website-preview">
    <slot></slot>
    <img :src="website.image" alt="">
  </div>
</template>

<script>
  class Website {
    constructor() {
      this.name = '';
      this.url = '';
      this.image = '';
    }
  }

  const WIDZIMISIE = new Website();
  WIDZIMISIE.name = 'Salon Widzimisie';
  WIDZIMISIE.url = 'https://widzimisie.wroclaw.pl/';
  WIDZIMISIE.image = require('./assets/widzimisie.png');

  const MANUFAKTURA = new Website();
  MANUFAKTURA.name = 'Manufaktura Kępno';
  MANUFAKTURA.url = 'https://manufaktura-kepno.com/';
  MANUFAKTURA.image = require('./assets/manufaktura-kepno.png');

  const WEBSITES = [MANUFAKTURA, WIDZIMISIE];

  export default {
    name: 'WebsitePreview',
    props: {
      websiteCode: {
        type: String,
        default: 'WIDZIMISIE'
      }
    },
    computed: {
      website() {
        return WEBSITES[this.websiteCode];
      }
    }
  };
</script>
