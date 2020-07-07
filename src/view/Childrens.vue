<template>
  <div>
    {{items}}
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
      item-key="Id"
      hide-default-footer
    ></v-data-table>
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
    ],
  }),

}
</script>