<template>
  <nav class="nav">
    <div class="nav__hamburger" @click="toggleNav">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <div>
      <b-button v-b-toggle.sidebar-footer>Menu</b-button>
      <b-sidebar
        id="sidebar-footer"
        aria-label="Sidebar"
        no-header
        shadow
        width="95px"
      >
        <template v-slot:footer="{ hide }">
          <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
            <b-button size="sm" @click="hide">Close</b-button>
          </div>
        </template>
        <div class="px-3 py-2">
          <ul class="nav__list">
            <li>
              <router-link to="/movies/top_rated">
                <div class="nav__link-wrap">
                  <b-icon
                    icon="award"
                    font-scale="2"
                    v-b-tooltip.hover
                    title="top rated"
                  >
                  </b-icon>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/movies/popular">
                <div class="nav__link-wrap">
                  <b-icon
                    icon="people-fill"
                    font-scale="2"
                    v-b-tooltip.hover
                    title="popular"
                  >
                    <use :xlink:href="'#icon_popular'"></use>
                  </b-icon>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/movies/now_playing">
                <div class="nav__link-wrap">
                  <b-icon
                    icon="display"
                    font-scale="2"
                    v-b-tooltip.hover
                    title="now playing"
                  >
                  </b-icon>
                </div>
              </router-link>
            </li>

            <li>
              <router-link to="/movies/upcoming">
                <div class="nav__link-wrap">
                  <b-icon
                    icon="volume-up"
                    font-scale="2"
                    v-b-tooltip.hover
                    title="upcaming"
                  >
                  </b-icon>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/graph_top_rated">
                <div class="nav__link-wrap">
                  <b-icon
                    icon="graph-up"
                    font-scale="2"
                    v-b-tooltip.hover
                    title="Graphics"
                  >
                  </b-icon>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </b-sidebar>
    </div>
  </nav>
</template>

<script>
import storage from "../storage.js";

export default {
  data() {
    return {
      listTypes: storage.listTypes,
      userLoggedIn: storage.sessionId ? true : false,
    };
  },
  methods: {
    setUserStatus() {
      this.userLoggedIn = storage.sessionId ? true : false;
    },
    requestToken() {
      eventHub.$emit("requestToken");
    },
    toggleNav() {
      document
        .querySelector(".nav__hamburger")
        .classList.toggle("nav__hamburger--active");
      document
        .querySelector(".nav__list")
        .classList.toggle("nav__list--active");
    },
  },
  created() {
    eventHub.$on("setUserStatus", this.setUserStatus);
  },
};
</script>

<style lang="scss">
@import "./src/scss/variables";
@import "./src/scss/media-queries";

.nav {
  position: fixed;
  top: 0;
  left: 2px;
  width: 100%;
  height: 50px;
  background: $c-white;
  display: flex;
  z-index: 10;
  @include tablet-min {
    display: block;
    width: 95px;
    height: 100vh;
  }

  &__hamburger {
    display: block;
    position: fixed;
    width: 55px;
    height: 50px;
    top: 0;
    right: 0;
    cursor: pointer;
    background: $c-white;
    z-index: 10;
    border-left: 1px solid $c-light;
    @include tablet-min {
      display: none;
    }

    .bar {
      position: absolute;
      width: 23px;
      height: 10px;
      background: rgba($c-dark, 0.5);
      transition: all 300ms ease;
      &:nth-child(1) {
        left: 16px;
        top: 17px;
      }
      &:nth-child(2) {
        left: 16px;
        top: 25px;
        &:after {
          content: "";
          position: absolute;
          left: 0px;
          top: 0px;
          width: 23px;
          height: 1px;
          background: transparent;
          transition: all 300ms ease;
        }
      }
      &:nth-child(3) {
        right: 15px;
        top: 33px;
      }
    }
    .sidebar {
      margin-top: 200px;
    }

    &--active {
      .bar {
        &:nth-child(1),
        &:nth-child(3) {
          width: 0;
        }
        &:nth-child(2) {
          transform: rotate(-45deg);
        }
        &:nth-child(2):after {
          transform: rotate(-90deg);
          background: rgba($c-dark, 0.5);
        }
      }
    }
  }
  &__list {
    list-style: none;
    line-height: 5.5em;
    padding: 0;
    margin-top: 4.5em;
    text-align: center;
    width: 100%;
    position: fixed;
    left: 0;
    background: rgba($c-white, 0.98);
    border-top: 1px solid $c-light;
    @include mobile-only {
      font-size: 0;
      opacity: 0;
      visibility: hidden;
      height: calc(100vh - 50px);
      transition: all 0.5s ease;
      text-align: left;
      &--active {
        opacity: 1;
        visibility: visible;
      }
    }
    @include tablet-min {
      display: flex;
      background: transparent;
      position: relative;
      display: block;
      width: 100%;
      border-top: 0;
      top: 0;
    }
  }
  &__item {
    @include mobile-only {
      display: inline-block;
      text-align: center;
      width: 100%;
      border-bottom: 1px solid $c-light;
      &:nth-child(odd) {
        border-right: 1px solid $c-light;
      }
    }
    @include tablet-min {
      width: 100%;
      border-bottom: 1px solid $c-light;
    }
  }
  &__link {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-size: 5px;
    font-weight: 300;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: rgba($c-dark, 0.7);
    transition: color 0.5s ease, background 0.5s ease;
    position: relative;
    cursor: pointer;
    @include mobile-only {
      font-size: 10px;
      padding: 20px 0;
    }
    @include tablet-min {
      width: 95px;
      height: 95px;
      font-size: 9px;
    }
    &-icon {
      width: 20px;
      height: 20px;
      margin-bottom: 3px;
      fill: rgba($c-dark, 0.7);
      transition: fill 0.5s ease;
      @include tablet-min {
        width: 20px;
        height: 20px;
        margin-bottom: 5px;
      }
    }
    &-title {
      display: block;
      width: 100%;
    }
    &:hover {
      color: $c-dark;
    }
    &:hover &-icon {
      fill: $c-dark;
    }
    &.is-active {
      color: $c-dark;
      background: $c-light;
    }
    &.is-active &-icon {
      fill: $c-dark;
    }
  }
}
</style>
