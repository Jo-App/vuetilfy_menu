<template>
  <v-subheader class="headline font-weight-black">
    <v-icon style="margin-right:10px;" large>{{icon}}</v-icon>{{title}}
  </v-subheader>
</template>

<script>
import { mapState } from "vuex";
import _ from "lodash";

export default {
  name: "PageTitle",
  components: {
  },
  computed: _.extend(
    mapState(["menus"])
  ),
  data: () => ({
    icon: "",
    title: "",
  }),
  created() {
    let name = this.$router.currentRoute.name; //Index
    this.menus.map(data => {
      if(data.childrens == undefined){ //1 뎁스
        if(data.target === name){
          this.icon = data.icon;
          this.title = data.title;
        }
      } else { //2뎁스
        data.childrens.map(data2 => {
          if(data2.target === name){
            this.icon = data2.icon;
            this.title = data2.title;
          }
        })
      }
    })
  }
}
</script>