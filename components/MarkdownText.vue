<script>
  import showdown from 'showdown'
  import { merge } from 'lodash'
  import filterXSS from 'xss'

  const whiteList = merge({}, filterXSS.whiteList, {
    li: ['style', 'class'],
    input: ['type', 'style', 'disabled', 'checked']
  })
  const xssFilter = (converter) => {
    return [
      {
        type: 'output',
        filter: function (text) {
          return filterXSS(text, { whiteList: whiteList })
        }
      }
    ]
  }

  showdown.setFlavor('github')

  var converter

  export default {
    props: {
      text: {
        type: String,
        default: ''
      },
      sameTab: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      html () {
        return converter.makeHtml(this.text + '<br><h1>Get in touch</h1>')
      }
    },
    created () {
      converter = new showdown.Converter({
        simplifiedAutoLink: true,
        headerLevelStart: 2,
        extensions: [xssFilter],
        openLinksInNewWindow: !this.sameTab,
        simpleLineBreaks: true
      })
    }
  }
</script>

<template>
  <!--eslint-disable-next-line-->
  <div class="showdown" v-html="html"/>
</template>

<style>
  code {
    color: #48518c;
  }

  img {
    max-width: 100%;
  }

  blockquote {
    border-left: .25em solid #dfe2e5;
    color: #6a737d;
    padding: 0 1em;
  }

  .showdown {
    font-size: 16px;
    display: inline-block;
    width: 100%;
    line-height: 1.5;
    margin-bottom: 2px;
  }

  .showdown h1 {
    font-weight: bold;
    /*text-align: center;*/
    font-size: 24px;
    margin-bottom: 4px;
  }

  .showdown h2 {
    font-weight: bold;
    /*text-align: center;*/
    font-size: 24px;
    margin-bottom: 12px;
  }

  .showdown ul, .showdown ol {
    /*padding-left: 28px;*/
    /*margin-bottom: 28px;*/
  }

  .showdown li {
    /*padding-bottom: 8px;*/
  }

  .showdown li::marker {
    color: var(--light-text-color);
  }

  .showdown p {
  }

  .showdown h4 {
    margin-top: 6px;
    margin-bottom: 2px;
    font-size: 14px;
    font-family: gibson-semibold, sans-serif;
  }

  .showdown ::-webkit-scrollbar {
    display: none; /* Chrome */
  }

  .showdown {
    -ms-overflow-style: none; /* IE and Edge */
  }

  pre {
    scrollbar-width: none; /* Firefox */
  }
</style>
