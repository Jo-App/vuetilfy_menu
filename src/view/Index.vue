<template>
  <v-content>
    <v-subheader class="headline font-weight-black">
      <v-icon style="margin-right:10px;" large>loop</v-icon>Setting
    </v-subheader>
    <v-card
      class="ma-4"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">메뉴 색상</v-list-item-title>
          <v-list-item-subtitle>
            <v-row
              align="center"
            >
              <v-col cols="3" sm="3" md="3">
                <span>메뉴 배경색 : {{colors.menu_background_color}}</span>
                <v-color-picker
                  v-model="colors.menu_background_color"
                  flat
                >
                </v-color-picker>
              </v-col>
              <v-col cols="3" sm="3" md="3">
                <span>메뉴 선택 색 : {{colors.menu_selected_color}}</span>
                <v-autocomplete
                  v-model="colors.menu_selected_color"
                  :items="colorList"
                  filled
                  color="blue-grey lighten-2"
                  label="Color"
                  item-text="name"
                  item-value="name"
                  solo
                >
                  <template v-slot:selection="data">
                    <v-list-item-avatar>
                    <div :class="data.item.color" class="pa-6 text-center lighten-2 rounded-sm"></div>
                    </v-list-item-avatar>
                    {{ data.item.name }}
                  </template>
                  <template v-slot:item="data">
                    <v-list-item-avatar>
                      <div :class="data.item.color" class="pa-6 text-center lighten-2 rounded-sm"></div>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-html="data.item.name"></v-list-item-title>
                      <v-list-item-subtitle v-html="data.item.group"></v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                </v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" sm="2" md="2">
                <v-text-field
                  v-model="id"
                  label="Id"
                ></v-text-field>
              </v-col>
              <v-col cols="2" sm="2" md="2">
                <v-text-field
                  v-model="icon"
                  label="Icon"
                ></v-text-field>
              </v-col>
              <v-col cols="2" sm="2" md="2">
                <v-text-field
                  v-model="title"
                  label="title"
                ></v-text-field>
              </v-col>
              <v-col cols="2" sm="2" md="2">
                <v-text-field
                  v-model="target"
                  label="target"
                ></v-text-field>
              </v-col>
              <v-col cols="2" sm="2" md="2">
                <v-btn @click="submit()">submit</v-btn>
              </v-col>

            </v-row>

            <v-row>
              <v-col cols="6" sm="6" md="6">
                <v-data-table
                  :headers="headers"
                  :items="menus"
                  item-key="id"
                  show-expand
                  class="elevation-1"
                  hide-default-footer
                >
                  <template v-slot:expanded-item="{ headers, item }">
                    <td v-if="item.childrens" :colspan="headers.length">
                      <Childrens :items="item.childrens"></Childrens>
                    </td>
                  </template>
                  <template v-slot:item.actions="{ item }">
                    <v-icon
                      small
                      @click="deleteItem(item)"
                    >
                      mdi-delete
                    </v-icon>
                  </template>
                </v-data-table>
              </v-col>
            </v-row>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>


    </v-card>
  </v-content>
</template>


<script>
import Childrens from "./Childrens.vue";
import { mapState } from "vuex";
import _ from "lodash";

export default {
  name: "Index",
  components: {
    Childrens
  },
  computed: _.extend(
    mapState(["colors", "menus"])
  ),
  data: () => ({
    friends: ['Sandra Adams', 'Britta Holt'],
    name: 'Midnight Crew',
    colorList: [
      { name: 'red', color: "red" },
      { name: 'blue', color: "blue" },
      { name: 'green', color: "green" },
      { name: 'black', color: "black" },
      { name: 'orange', color: "orange" },
      { name: 'primary', color: "primary" }
    ],
    id: "",
    icon: "",
    title: "",
    target: "",
    expanded: [],
    headers: [
      {
        text: 'Id',
        align: 'start',
        sortable: false,
        value: 'id',
      },
      { text: 'Icon', value: 'icon' },
      { text: 'title', value: 'title' },
      { text: 'target', value: 'target' },
      { text: '', value: 'data-table-expand' },
      { text: '', value: 'actions', sortable: false },
    ],
  }),
  created(){

  },
  methods:{
    submit() {
      let obj = {};
      obj.id = this.id;
      obj.icon = this.icon;
      obj.title = this.title;
      obj.target = this.target;
      this.menus.push(obj);
    },
    deleteItem(item) {
      this.$store.commit("deleteItem", { id : item.id })
    }
  },
}
</script>

<style>

</style>