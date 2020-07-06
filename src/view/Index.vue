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
                  :items="people"
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
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn text>Button</v-btn>
        <v-btn text>Button</v-btn>
      </v-card-actions>
    </v-card>
  </v-content>
</template>


<script>
import { mapState } from "vuex";
import _ from "lodash";

export default {
  name: "Page1",
  components: {
  },
  computed: _.extend(
    mapState(["colors"])
  ),
  data: () => ({
    friends: ['Sandra Adams', 'Britta Holt'],
    name: 'Midnight Crew',
    people: [
      { name: 'red', color: "red" },
      { name: 'blue', color: "blue" },
      { name: 'green', color: "green" },
      { name: 'black', color: "black" },
      { name: 'orange', color: "orange" },
    
    ],
  }),
  created(){

  },
  methods:{

  },
}
</script>

<style>

</style>