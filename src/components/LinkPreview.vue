<template>
  <div>
    <div id="loader-container" v-if="!response && validUrl" :style="{width:cardWidth}">
      <slot name="loading">
        <div class="spinner"></div>
      </slot>
    </div>
    <div v-if="response">
      <slot :img="response.images[0]" :title="response.title" :description="response.description" :url="url">
      <div class="wrapper" :style="{width:cardWidth}">
        <div class="card-info">
          <div class="card-text">
            <a href="javascript:;" @click="viewMore" v-if="showButton"><h1>{{response.title}}</h1></a>
            <p>{{response.description}}</p>
          </div>
        </div>
     </div>
</slot>
</div>
</div>
</template>

<script>
export default {
  name: 'linkPrevue',
  props: {
    url: {
      type: String,
      default: ''
    },
    cardWidth: {
      type: String,
      default: '400px'
    },
    onButtonClick: {
      type: Function,
      default: undefined
    },
    showButton: {
      type: Boolean,
      default: true
    },
    apiUrl: {
      type: String,
      default: 'https://linkpreview-api.herokuapp.com/'
    }
  },
  watch: {
    url: function (value) {
      this.response = null
      this.getLinkPreview()
    }
  },
  created () {
    this.getLinkPreview()
  },
  data: function () {
    return {
      response: null,
      validUrl: false
    }
  },
  methods: {
    viewMore: function () {
      if (this.onButtonClick !== undefined) {
        this.onButtonClick(this.response)
      } else {
        const win = window.open(this.url, '_blank')
        win.focus()
      }
    },
    isValidUrl: function (url) {
      // eslint-disable-next-line no-useless-escape
      const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
      this.validUrl = regex.test(url)
      return this.validUrl
    },
    getLinkPreview: function () {
      if (this.isValidUrl(this.url)) {
        this.httpRequest((response) => {
          this.response = JSON.parse(response)
        }, () => {
          this.response = null
          this.validUrl = false
        })
      }
    },
    httpRequest: function (success, error) {
      const http = new XMLHttpRequest()
      const params = 'url=' + this.url
      http.open('POST', this.apiUrl, true)
      http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
          success(http.responseText)
        }
        if (http.readyState === 4 && http.status === 500) {
          error()
        }
      }
      http.send(params)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Hind+Siliguri:400,600');

.wrapper {
  /* overflow: auto; */
  border-radius: 7px 7px 7px 7px;
  background-color: #fff;
  /* -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15); */
}

.card-img {
  width: 50%;
}

.card-img img {
  width: 50%;
  border-radius: 7px 7px 0 0;
}

img {
  vertical-align: middle;
  border-style: none;
}

.card-info {
  border-radius: 0 0 7px 7px;
  background-color: #fff;
}

.card-text {
  width: 80%;
  text-align: justify;
}
.card-text a {
  text-decoration: none;
}
.card-text h1 {
  text-align: left;
  font-size: 18px;
  color: #435058;
  margin: 0;
  font-family: 'Hind Siliguri', sans-serif;

}

.card-text p {
  font-family: 'Hind Siliguri', sans-serif;
  color: #435058;
  font-size: 15px;
  overflow: hidden;
  margin: 0;
}

.card-btn {
  margin: 0.3em 1em 0.3em 0;
  position: relative;
  text-align: center;
  float: right;
}

.card-btn a {
  border-radius: 2em;
  font-family: 'Hind Siliguri', sans-serif;
  font-size: 14px;
  letter-spacing: 0.1em;
  color: #ffffff;
  background-color: #1B858B;
  padding: 10px 20px 10px 20px;
  text-align: center;
  display: inline-block;
  text-decoration: none !important;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.card-btn a:hover {
  background-color: #1B858B;
}

/* Loader */
.spinner {
  margin-top: 40%;
  margin-left: 45%;
  height: 10px;
  width: 28px;
  animation: rotate 0.8s infinite linear;
  /* border: 5px solid #868686; */
  border-right-color: transparent;
  border-radius: 50%;
}

@keyframes rotate {
  0%    { transform: rotate(0deg); }
  100%  { transform: rotate(360deg); }
}
</style>
