<template>
  <section id="social-links">
    <h2>SocialLinks</h2>
    <div class="links">
      <component
        :is="social.link ? 'a' : 'span'"
        class="social"
        v-for="(social, i) of socials"
        :key="i"
        :href="social.link || '#'"
      >
        <img :src="social.image" class="logo" />
        <div class="details">
          <h3 class="name">{{ social.name }}</h3>
          <span class="username">{{ social.username }}</span>
        </div>
      </component>
    </div>
  </section>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SocialLinks extends Vue {
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
#social-links {
  padding: 1rem 3rem;
}

h2 {
  text-align: center;
  margin: 1rem 0;
}

.links {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}

.links .social {
  position: relative;
  padding: 1rem;
  margin: 1rem 1.5rem;
  color: var(--secondary);
  text-decoration: none;
  transition: color 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.links .social:hover {
  color: black;
}

.links .social::before {
  content: "";
  background: white;
  position: absolute;
  top: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  transition: top 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.links .social:hover::before {
  top: 0;
}

.links .social img {
  max-width: 128px;
  position: relative;
  z-index: 1;
  padding: 1rem 0;
}

.links .social .details {
  z-index: 1;
  position: relative;
}
</style>
