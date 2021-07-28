<template>
  <div id="app">
    <p>
      This is <code>eyeOff</code> content. Resolved normally, without any transformation
      performed by loader.
      <br>
      <br>
      {{ eyeOff }}
    </p>
    <br>
    <p>
      This is <code>eyeOff</code> when set into img#src
    </p>
    <img :src="eyeOff" />
    <br>
    <p>
      This is <code>IconEye</code>, a Vue component resulted from automatic transformation
      using webpack loader, or in this case svg-to-vue-component.
    </p>
    <IconEye />
    <br>
    <br>
    <p>
      This is imported HTML file, transformed using one of loaders defined in script block.
    </p>
    <div v-html="ppkmHTML" />
  </div>
</template>

<script>
/**
 * See how import query "?vue" affects the output of imported module.
 * @See https://webpack.js.org/configuration/module/#ruleresourcequery
 */
import eyeOff from './assets/eye-off.svg'
import eye from './assets/eye.svg?vue'

console.log({ eyeOff })
console.log({ eye })

/**
 * This is a sample case of using inline loader.
 * Uncomment one of these HTML imports to see the difference.
 * @See https://webpack.js.org/concepts/loaders/#inline
 */
import ppkmHTML from './assets/ppkm.html?inline'
// import ppkmHTML from 'url-loader!./assets/ppkm.html'
// import ppkmHTML from 'file-loader!./assets/ppkm.html'
// import ppkmHTML from 'raw-loader!./assets/ppkm.html'

console.log({ ppkmHTML })

export default {
  name: 'App',
  components: {
    /**
     * Using svg-to-vue-component/loader,
     * SVG can be automatically transformed to Vue component
     */
    IconEye: eye,
  },
  data () {
    return {
      /**
       * this svg file is not transformed into Vue component,
       * but rather resolved normally using either url-loader or file-loader
       */
      eyeOff,
      ppkmHTML
    }
  }
}
</script>

<style scoped>
#app {
  font-size: 36px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

img {
  width: 72px;
  height: 72px;
  object-fit: contain;
  object-position: center;
}

svg {
  width: 72px;
  height: 72px;
  object-fit: contain;
  object-position: center;
}
</style>
