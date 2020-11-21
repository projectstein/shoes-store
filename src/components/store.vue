<template>
  <div>
    <header-store :title="title" :url-avatar="urlAvatar" />
    <v-card>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="group">
                <input type="text" :placeholder="placeholder" required />
                <span class="bar"></span>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import HeaderStore from './header-store'

export default {
  name: 'Store',
  components: {
    HeaderStore
  },
  data() {
    return {
      title: 'Sneakers',
      urlAvatar: 'https://tinyurl.com/y2gkmq6s',
      placeholder: 'Search for your sneaker'
    }
  }
}
</script>

<style lang="scss" scoped>
input::placeholder {
  text-align: center;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 33px;
  color: #a8a8a8;
}

/* form starting stylings ------------------------------- */
.group {
  position: relative;
  margin-bottom: 45px;
}
input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #757575;
  text-align: center;
}
input:focus {
  outline: none;
}

.bar {
  position: relative;
  display: block;
  width: 300px;
}
.bar:before,
.bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #5264ae;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}
</style>
