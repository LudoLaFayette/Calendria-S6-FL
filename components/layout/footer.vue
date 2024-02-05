<script setup>
// import myIcon from '@/components/elements/myIcon.vue'
// import myTitle from '@/components/elements/myTitle.vue'
// import myText from '@/components/elements/myText.vue'
</script>
<template>
  <footer class="c-footer">
    <div class="c-footer__column">
      <img class="c-footer__column--logo" src="/logo.svg" alt="Logo Calendria" />
      <!-- <StylesStyleText
        size="p2"
        content="C'est ici que vous saurez vous cultiver en passant le temps..."
      /> -->
      <div class="c-footer__column--social_icons">
        <StylesStyleIcon name="facebook" background="backgroundBCK" size="small" />
        <StylesStyleIcon name="twitter" background="backgroundBCK" size="small" />
        <StylesStyleIcon name="linkedin" background="backgroundBCK" size="small" />
        <StylesStyleIcon name="instagram" background="backgroundBCK" size="small" />
      </div>
    </div>
    <div class="c-footer__column">
      <StylesStyleTitle class="c-footer__column--title" content="Calendrier" type="h4" />
      <StylesStyleText class="c-footer__column--text" size="p1" content="Année 2024" />
      <StylesStyleText class="c-footer__column--text" size="p1" content="Année 2025" />
      <StylesStyleText class="c-footer__column--text" size="p1" content="Année 2026" />
    </div>
    <div class="c-footer__column">
      <StylesStyleTitle class="c-footer__column--title" content="Liens utiles" type="h4" />
      <ul class="c-footer__column--list-link">
        <li class="c-footer__column--text"><a href="connexion">S'inscrire</a></li>
        <li class="c-footer__column--text"><a href="contact">Nous contacter</a></li>
        <li class="c-footer__column--text"><a href="conditions">CGU</a></li>
        <li class="c-footer__column--text"><a href="mentions">Mentions légales</a></li>
      </ul>
    </div>
    <div class="c-footer__column">
      <StylesStyleTitle class="c-footer__column--title" content="Webmaster" type="h4" />
      <StylesStyleText class="c-footer__column--text" size="p1" content="Faye Ludovic" />
      <StylesStyleText class="c-footer__column--text" size="p1" content="4, Place Tharradin" />
      <StylesStyleText class="c-footer__column--text" size="p1" content="25200 Montbéliard, France" />
      <StylesStyleText class="c-footer__column--text" size="p1" content="01 02 03 04 05" />
      <!-- <div class="c-footer__column--input">
        <input type="email" id="email" placeholder="Enter your email...." />
        <StylesStyleIcon class="" name="chevronRight" size="small" background="backgroundBCK" />
      </div> -->
    </div>
  </footer>
</template>
  <style lang="scss" scoped>
.c-footer {
  background: white;
  border-top: 0.1rem solid black;
  color: $grey;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: rem(40);
  gap: rem(5);
  text-align: center;

  &__column {
    padding: 1rem;
    img{
        height: rem(180);
        margin-top: rem(20)
    }

    &--logo {
    padding-bottom: rem(15);
  }
  &--social_icons {
    display: flex;
    margin: rem(15) rem(5);
    gap: rem(15);
    // align-items: center;
    justify-content: center;
  }
  &--title {
    font-weight: 700;
    color: $black;
    padding: rem(45) rem(0);
  }
  &--text {
    padding: rem(5) rem(0);
    font-weight: 400;
  }
  &--list-link {
    list-style: none;
    & li a {
      text-decoration: none;
      color: $grey;
      font-size: 26px;
    }
  }
  &--input {
    background-color: $white;
    border-radius: rem(40);
    box-shadow: 0px rem(1) rem(4) rgba(0, 0, 0, 0.25);
    font-family: $primary-font-familly;
    font-size: $very_tiny_font_size;
    display: flex;
    align-items: center;
    padding: rem(4) rem(10);
    width: fit-content;
    border: none;
    outline: none;
    margin-top: rem(15);
    & input {
      border: none;
      outline: none;
    }
  }
  
  }
}
</style>