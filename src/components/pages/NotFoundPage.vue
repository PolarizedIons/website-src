<template>
  <section>
      <h2>Whoops!</h2>
      <p>This page wasn't found :(</p>
  </section>
</template>

<script>
export default {
    name: 'NotFoundPage',
};
</script>

<style>
    section {
        width: 70%;
        margin: 64px auto;
    }

    h2 {
        display: inline-block;
        padding: 10px 20px;
        background: #673AB7;
        border-radius: 25px;;
        border-bottom-left-radius: 5px;
        color: #fff;
    }

    p {
        color: white;
        margin-left: 25px;
    }
</style>
