<template>
  <div>
    <v-navigation-drawer
      id="app-drawer"
      v-model="drawer"
      app
      dark
      floating
      persistent
      mobile-break-point="960"
      width="280"
    >
      <!-- <v-img
        :src="image"
        height="100%"
      > -->
      <div>
        <v-layout
          class="fill-height"
          tag="v-list"
          column
        >
          <v-list>

            <v-list-item @click="movePage('codeList');">
              <img src="../assets/jogo.png" width="100">
            </v-list-item>
            <hr style="margin-top: 20px;margin-bottom: 20px;">
            <v-list-item-group active-class="orange accent-4 white--text">
              <template v-for="menu in menus">
                <template v-if="menu.childrens">
                  <v-list-group :prepend-icon="menu.icon" :key="menu.id">
                    <template v-slot:activator>
                      <v-list-item-title>{{menu.title}}</v-list-item-title>
                    </template>

                    <template v-for="children in menu.childrens">
                      <v-list-item @click="movePage(children.target);" :key="children.id" style="margin-left:10px;" active-class="orange accent-4 white--text">
                        <v-list-item-icon active-class="orange accent-4">
                          <v-icon>{{children.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                          {{children.title}}
                        </v-list-item-title>
                      </v-list-item>
                    </template>
                    
                  </v-list-group>
                </template>
                <template v-else>
                  <v-list-item @click="movePage(menu.target);" :key="menu.id" active-class="orange accent-4 white--text">
                    <v-list-item-icon>
                      <v-icon>{{menu.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{menu.title}}</v-list-item-title>
                  </v-list-item>
                </template>
              </template>
            </v-list-item-group>
          </v-list>
        </v-layout>
      <!-- </v-img> -->
      </div>
    </v-navigation-drawer>
    <v-toolbar :elevation="0" color="#fafafa" fixed>
      <v-btn v-if="responsive" icon color="dark" medium @click.stop="onClickBtn" style="margin-top:10px;">
        <v-icon large>menu</v-icon>
      </v-btn>
    </v-toolbar>


  </div>
</template>

<script>

import { mapState } from "vuex";
import _ from "lodash";

export default {
  components: {
  },
  data: () => ({
    //image: 'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg',
    //image: 'https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    drawer: null,
    color: 'success',
    responsive: false,
  }),
  computed: _.extend(
    // {
    //   inputValue: {
    //     get () {
    //       return this.$store.state.app.drawer
    //     },
    //     set (val) {
    //       this.setDrawer(val)
    //     }
    //   }
    // },
    mapState(["menus"]),
  ),
  mounted(){
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    onResponsiveInverted () {
      if (window.innerWidth < 1000) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    },
  }
}
</script>

<style lang="scss">
  #app-drawer {
    .v-list__tile {
      border-radius: 4px;

      &--buy {
        margin-top: auto;
        margin-bottom: 17px;
      }
    }
  }
</style>
