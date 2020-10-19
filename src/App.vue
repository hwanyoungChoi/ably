<template>
    <div id="app">
        <header>
            <div>A B L Y</div>
            <div id="logo-title">셀럽의 스타일을 쇼핑하다.</div>
        </header>
        <main>
            <router-view />
        </main>
        <footer>
            <a href="https://a-bly.com/">© 2020. ABLY Corp., Inc. All rights reserved</a>
        </footer>
    </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import { hasAccessToken } from './lib/auth';

@Component
export default class App extends Vue {

  // Lifecycle
    private created() {

        if (!hasAccessToken()) {
            this.$router.replace({ name: 'login' });
        } else {
            this.$router.replace({ name: 'profile' });
        }

    }

}

</script>

<style lang="scss">
    #app {
        font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #27292b;
        max-width: 768px;
        min-width: 320px;
        min-height: 100vh;
        margin: 0 auto;
        background: white;
    }

    header {
        color: black;
        font-size: 30px;
        font-weight: 900;
        padding-top: 10px;
        padding-bottom: 10px;
        position: sticky;
        top: 0;

        display: flex;
        flex-direction: row;
        align-items: center;
        
        #logo-title {
            color: darkgray;
            font-size: 16px;
            font-weight: 400;
            margin-left: 10px;
          }
    }

    main {
        padding-left: 10px;
        padding-right: 10px;
    }

    footer {
        color: darkgray;
        font-size: 14px;
        font-weight: 600;
        padding-top: 10px;
        padding-bottom: 10px;
        position: absolute;
        bottom: 0;

        a {
            color: darkgray;
            text-decoration: none;
        }
    }
</style>
