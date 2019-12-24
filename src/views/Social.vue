<template>
  <div id="social">
    <div class="header">
      <h1>Social Stuff</h1>
    </div>
    <div class="main">
      <a class="social" v-for="(social, i) of socials" :key="i" :href="social.link || '#'">
        <img :src="social.image" class="logo" />
        <div class="details">
          <h3 class="name">{{ social.name }}</h3>
          <span class="username">{{ social.username }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Social extends Vue {
  socials = [
    {
      name: "Github",
      username: "PolarizedIons",
      link: "https://github.com/polarizedions",
      image: require("../assets/social/github.png")
    },
    {
      name: "Twitter",
      username: "PolarizedIons",
      link: "https://twitter.com/polarizedions",
      image: require("../assets/social/twitter.png")
    },
    {
      name: "Discord",
      username: "PolarizedIons#9928",
      link: "",
      image: require("../assets/social/discord.png")
    },
    {
      name: "Instagram",
      username: "PolarizedIons",
      link: "https://instagram.com/polarizedions",
      image: require("../assets/social/instagram.png")
    },
    {
      name: "LastFM",
      username: "PolarizedIons",
      link: "https://www.last.fm/user/Polarizedions",
      image: require("../assets/social/lastfm.png")
    },
    {
      name: "Steam",
      username: "PolarizedIons",
      link: "https://steamcommunity.com/id/polarizedions/",
      image: require("../assets/social/steam.png")
    },
    {
      name: "Twitch",
      username: "PolarizedIons",
      link: "https://twitch.com/polarizedions",
      image: require("../assets/social/twitch.png")
    }
  ];
}
</script>

<style scoped>
#social {
  padding: 1.2rem;
}

.header,
.main {
  width: 70%;
  margin: 0 auto;
}

.header {
  text-align: center;
  background: var(--purple);
  margin-bottom: 1.2rem;
  padding: 0.6rem 0;
}

.main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.2rem;
}

.social {
  background: var(--blue);
  transition: background-color linear 0.2s;
  display: flex;
  text-decoration: none;
}

.social:hover {
  background: var(--blue-dark);
}

.social .logo {
  width: 128px;
  background: #fff;
}

.social .details {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.social .name,
.social .username {
  text-align: center;
  color: #fff;
}
</style>
