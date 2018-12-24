<template>
  
  <div class="hello">
    <h3>Entry New Year ----</h3>
    <span class="timedown small">What time is it ? </span>
    <span class="timedown">{{timedown.hour}}</span>
    <span class="timedown middle">:{{timedown.min}}</span>
    <span class="timedown small">:{{timedown.s}}</span>
    
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'HelloVue',
  props: {
    msg: String
  },
  data () {
      return {
        timedown: this.optionAnimation(),
        interval: null
      }
  },
  mounted() {
    // 
    this.interval  = setInterval(() => {
      this.timedown = this.optionAnimation()
    }, 1000)

  },
  methods: {
      optionAnimation: () => {
          let mo  = moment( (new Date()).getTime() )
          let day = mo.format('D')
          let hour  = mo.format('HH')
          let min = mo.format('mm')
          let s   = mo.format('ss')
          
          return {
            day, hour, min, s
          }
      }
  }
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}

/* vietnamese */
@font-face {
  font-family: 'VT323';
  font-style: normal;
  font-weight: 400;
  src: local('VT323 Regular'), local('VT323-Regular'), url(https://fonts.gstatic.com/s/vt323/v9/pxiKyp0ihIEF2isQFJXGdg.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'VT323';
  font-style: normal;
  font-weight: 400;
  src: local('VT323 Regular'), local('VT323-Regular'), url(https://fonts.gstatic.com/s/vt323/v9/pxiKyp0ihIEF2isRFJXGdg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'VT323';
  font-style: normal;
  font-weight: 400;
  src: local('VT323 Regular'), local('VT323-Regular'), url(https://fonts.gstatic.com/s/vt323/v9/pxiKyp0ihIEF2isfFJU.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
.timedown {
    font-family: VT323, monaco, Consolas, "Lucida Console", monospace;
    font-size: 15.5em;
    color: #42b983;
    text-transform: 'lowercase';
    text-shadow: 0.05em 0.05em white, 
                -0.02em -0.02em gray, 
                0.1em   0.1em white, 
                -0.05em  -0.05em gray, 
                0.15em  0.15em white, 
                -0.15em -0.15em white, 
                0.2em   0.2em white, 
                -0.2em  -0.2em white;
    
}
.middle {
  font-size: 9.5em;
}
.small {
  font-size: 4em;
}
</style>
