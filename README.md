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



## Demo、Document、Changelog
Explorer on

- [English site](https://terryz.github.io/vue/#/playback)
- [国内站点](https://terryz.gitee.io/vue/#/playback)


## Vue plugin series

| Plugin | Status | Description |
| :---------------- | :-- | :-- |
| [v-page](https://github.com/TerryZ/v-page) | [![npm version](https://img.shields.io/npm/v/v-page.svg)](https://www.npmjs.com/package/v-page) | A simple pagination bar, including length Menu, i18n support |
| [v-dialogs](https://github.com/TerryZ/v-dialogs) | [![npm version](https://img.shields.io/npm/v/v-dialogs.svg)](https://www.npmjs.com/package/v-dialogs) | A simple and powerful dialog, including Modal, Alert, Mask and Toast modes |
| [v-tablegrid](https://github.com/TerryZ/v-tablegrid) | [![npm version](https://img.shields.io/npm/v/v-tablegrid.svg)](https://www.npmjs.com/package/v-tablegrid) | A simpler to use and practical datatable |
| [v-uploader](https://github.com/TerryZ/v-uploader) | [![npm version](https://img.shields.io/npm/v/v-uploader.svg)](https://www.npmjs.com/package/v-uploader) | A Vue2 plugin to make files upload simple and easier, <br>you can drag files or select file in dialog to upload |
| [v-ztree](https://github.com/TerryZ/v-ztree) | [![npm version](https://img.shields.io/npm/v/v-ztree.svg)](https://www.npmjs.com/package/v-ztree) | A simple tree for Vue2, support single or multiple(check) select tree, <br>and support server side data |
| [v-gallery](https://github.com/TerryZ/v-gallery) | [![npm version](https://img.shields.io/npm/v/v-gallery.svg)](https://www.npmjs.com/package/v-gallery) | A Vue2 plugin make browsing images in gallery |
| [v-region](https://github.com/TerryZ/v-region) | [![npm version](https://img.shields.io/npm/v/v-region.svg)](https://www.npmjs.com/package/v-region) | A simple region selector, provide Chinese administrative division data |
| [v-selectpage](https://github.com/TerryZ/v-selectpage) | [![npm version](https://img.shields.io/npm/v/v-selectpage.svg)](https://www.npmjs.com/package/v-selectpage) | A powerful selector for Vue2, list or table view of pagination, <br>use tags for multiple selection, i18n and server side resources supports |
| [v-suggest](https://github.com/TerryZ/v-suggest) | [![npm version](https://img.shields.io/npm/v/v-suggest.svg)](https://www.npmjs.com/package/v-suggest) | A Vue2 plugin for input suggestions by autocomplete |
| [v-playback](https://github.com/TerryZ/v-playback) | [![npm version](https://img.shields.io/npm/v/v-playback.svg)](https://www.npmjs.com/package/v-playback) | A Vue2 plugin to make video play easier |

<br><br>

## Install

``` bash
npm install v-playback --save
```

Include plugin in your `main.js` file.

```js
import Vue from 'vue'
import vPlayBack from 'v-playback';
Vue.use(vPlayBack);
```

## Deploy on your component

template

```html
<template>
    <v-playback :url="url" ></v-playback>
</template>
```

script

```js
export default {
    data(){
        return {
            url: 'http://xxx.com/111.mp4'
        }
    }
};
```
<br><br>
