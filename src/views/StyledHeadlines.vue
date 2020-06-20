<template>
    <div class="wrapper">
        <navigation></navigation>
        <div class="box">
            <headline-main>This is headline main</headline-main>
            <headline-main :forced-down="true">This is headline main with forced size down.</headline-main>
            <headline-1>I'm headline 1 for landing pages</headline-1>
            <mobile-headline-1>I'm mobile version of headline1</mobile-headline-1>
            <responsive-headline>My name is responsive headline and I change size if viewport is under 576px</responsive-headline>

        </div>
    </div>
</template>

<script>
  import { headlineMain, headline1, mobileHeadline1, responsiveHeadline } from '@juras/styled-headlines';

  export default {
    name: 'StyledHeadlines',
    components: {
      headlineMain,
      headline1,
      mobileHeadline1,
      responsiveHeadline
    }
  };
</script>

<style lang="scss" scoped>
    .box {
        margin: 0 auto;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .box {
        padding: 30px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        background-color: rgba(#fff, 1);
        box-shadow: 10px 1px 2px rgba(#000, 0.3);
    }
</style>
