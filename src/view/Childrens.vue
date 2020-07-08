<template>
  <div>
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
        <v-btn @click="submit()" class="mx-2" fab dark color="indigo">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="9" sm="9" md="9">
        <v-data-table
          :headers="headers"
          :items="childrens"
          class="elevation-1"
          item-key="Id"
          hide-default-footer
        >
          <template v-slot:item.actions="{ item }">
            <v-icon
              small
              @click="deleteItem(item.id)"
            >
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import _ from "lodash";

export default {
  name: "Childrens",
  props: ["items"],
  computed: _.extend(
    mapState(["colors", "menus"])
  ),
  data: () => ({
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
    childrens: "",
    id: "",
    icon: "",
    title: "",
    target: "",
  }),
  created() {
    this.getMenus();
  },
  methods:{
    getMenus() {
      this.menus.map(data => {
        if(data.id == this.items.id){
          this.childrens = data.childrens;
        }
      })
    },
    async submit() {
      let obj = {};
      let items = this.items;
      obj.id = this.id;
      obj.icon = this.icon;
      obj.title = this.title;
      obj.target = this.target;
      await this.$store.commit("childrenSubmit", { obj, items });
      this.id = "";
      this.icon = "";
      this.title = "";
      this.target = "";
      await this.getMenus();
    },
    async deleteItem(id) {
      let items = this.items;
      await this.$store.commit("childrenDeleteItem", { id, items });
      await this.getMenus();
    }
  },
  updated() {
    this.getMenus();
  }

}
</script>