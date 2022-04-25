<br><br>

<h3 align="center">v-playback</h3>

<br>

<p align="center">
  <a href="https://www.npmjs.com/package/v-playback"><img src="https://img.shields.io/npm/v/v-playback.svg"></a>
  <a href="https://mit-license.org/"><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg"></a>
  <a href="https://www.npmjs.com/package/v-playback"><img src="https://img.shields.io/npm/dy/v-playback.svg"></a>
</p>

<p align="center"><img src="https://terryz.github.io/image/v-playback/v-playback.png" alt="v-playback" ></p>

<p align="center">
  A <strong>Vue2</strong> plugin to make video play easier
</p>

<p align="center">
  <a href="https://nodei.co/npm/v-playback/"><img src="https://nodei.co/npm/v-playback.png"></a>
</p>

<br><br><br><br><br>

## Examples、Documentation and Changelog

Explorer on

- [English site](https://terryz.github.io/vue/#/playback)
- [国内站点](https://terryz.gitee.io/vue/#/playback)

## Installation

```
npm i -S v-playback
```

Include plugin in your `main.js` file.

```js
import Vue from 'vue'
import PlayBack from 'v-playback'
Vue.use(PlayBack)
```

## Deploy on component

```vue
<template>
  <v-playback :url="url" ></v-playback>
</template>

<script>
export default {
  data () {
    return {
      url: 'https://your-site/your-video.mp4'
    }
  }
}
</script>
```

## Dependencies

[video.js](https://github.com/videojs/video.js)
