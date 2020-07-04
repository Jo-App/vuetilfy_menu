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
              justify="space-around"
              align="center"
            >
              <v-col>
                <span>메뉴 배경색 : {{colors.menu_background_color}}</span>
                <v-color-picker
                  v-model="colors.menu_background_color"
                  flat
                >
                </v-color-picker>
              </v-col>
              <v-col>
                <span>메뉴 선택 색 : {{colors.menu_selected_color}}</span>
                <!-- <v-color-picker
                  v-model="colors.menu_selected_color"
                  flat
                ></v-color-picker> -->
<select v-model="selectedFruits">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>

              </v-col>
              <v-col>
                <span>메뉴 호버 색 : {{colors.menu_hover_color}}</span>
                <v-color-picker
                  v-model="colors.menu_hover_color"
                  flat
                ></v-color-picker>
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
 fruits: [
        'Apples',
        'Apricots',
        'Avocado',
        'Bananas',
        'Blueberries',
        'Blackberries',
        'Boysenberries',
        'Bread fruit',
        'Cantaloupes (cantalope)',
        'Cherries',
        'Cranberries',
        'Cucumbers',
        'Currants',
        'Dates',
        'Eggplant',
        'Figs',
        'Grapes',
        'Grapefruit',
        'Guava',
        'Honeydew melons',
        'Huckleberries',
        'Kiwis',
        'Kumquat',
        'Lemons',
        'Limes',
        'Mangos',
        'Mulberries',
        'Muskmelon',
        'Nectarines',
        'Olives',
        'Oranges',
        'Papaya',
        'Peaches',
        'Pears',
        'Persimmon',
        'Pineapple',
        'Plums',
        'Pomegranate',
        'Raspberries',
        'Rose Apple',
        'Starfruit',
        'Strawberries',
        'Tangerines',
        'Tomatoes',
        'Watermelons',
        'Zucchini',
      ],
      selectedFruits: []
  }),
  created(){

  },
  methods:{

  },
}
</script>

<style>

</style>