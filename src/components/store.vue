<template>
  <div>
    <header-store :title="title" :url-avatar="urlAvatar" />
    <v-card class="elevation-0" color="#FFFFFF">
      <v-card-text class="pb-0">
        <v-container mt-8 pa-0 px-16 fluid>
          <v-row>
            <v-col cols="12">
              <div class="group">
                <div class="icon-container">
                  <div class="icon-search"></div>
                </div>
                <input
                  v-model="searchDebouncer"
                  type="text"
                  :placeholder="placeholder"
                />
                <span class="bar"></span>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-text class="pt-0">
        <loader
          v-if="loadingCards"
          color="#6B8067"
          :size="50"
          :loading="loadingCards"
        />
        <v-container
          v-else-if="filteredProductCards.length > 0"
          pa-0
          px-16
          fluid
        >
          <v-row dense>
            <v-col
              v-for="(card, index) in filteredProductCards"
              :key="index"
              :cols="12"
              xl="4"
              lg="4"
              md="6"
              sm="12"
              xs="12"
              class="pb-16"
            >
              <product-card :card="card" />
            </v-col>
          </v-row>
        </v-container>
        <p class="text-xl-center text-lg-center text-xs-center headline" v-else>
          There are no sneakers for this search
        </p>
      </v-card-text>
    </v-card>
    <v-alert :value="alertError" dense prominent type="error"></v-alert>
  </div>
</template>

<script>
import HeaderStore from './header-store'
import ProductCard from './product-card'
import Loader from './loader'

export default {
  name: 'Store',
  components: {
    HeaderStore,
    ProductCard,
    Loader
  },
  data() {
    return {
      title: 'Sneakers',
      urlAvatar: 'https://tinyurl.com/y2gkmq6s',
      placeholder: 'Search for your sneaker',
      loadingCards: false,
      productCards: [],
      filteredProductCards: [],
      alertError: false,
      messageError: null,
      search: null,
      timeout: null
    }
  },
  computed: {
    searchDebouncer: {
      get() {
        return this.search
      },
      set(value) {
        if (this.timeout) clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.search = value
          this.setFilteredCard()
        }, 700)
      }
    }
  },
  async mounted() {
    await this.getProductCards()
  },
  methods: {
    async getProductCards() {
      this.loadingCards = true
      try {
        let result = await this.$http.get(
          'https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json'
        )
        this.productCards = result.data.results
        this.filteredProductCards = Array.from(this.productCards)
      } catch (error) {
        this.messageError = error.message
        this.alertError = true
      } finally {
        setTimeout(function() {
          this.alertError = false
        }, 6000)
      }
      this.loadingCards = false
    },
    setFilteredCard() {
      if (!this.search)
        this.filteredProductCards = Array.from(this.productCards)
      else {
        this.filteredProductCards = this.productCards.filter(product =>
          product.description.includes(this.search)
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

.group {
  position: relative;
  margin-bottom: 45px;
}
input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #757575;
  text-align: center;
}
input:focus {
  outline: none;
}
input::placeholder {
  text-align: center;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 33px;
  color: #a8a8a8;
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
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}

.icon-container {
  position: absolute;
  padding: 10px 0px 0px 10px;
  transition: 0.3s;
  color: #787878;
  width: 25px;
  height: 23px;
}

.icon-search {
  width: 50px;
  height: 24px;
  background: url('../assets/search.svg') no-repeat;
  background-size: contain;
}
</style>
