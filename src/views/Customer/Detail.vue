<template>
  <v-row justify="space-around">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:item="{ item }">
        <v-row>
          <v-col >
            <v-list class="transparent">
              <v-list-item>
                <v-list-item-content>Tên hành khách:</v-list-item-content>
                <v-list-item-content>{{
                  item.customerName
                }}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Điện thoại:</v-list-item-content>
                <v-list-item-content>{{ item.phone }}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Địa chỉ:</v-list-item-content>
                <v-list-item-content>{{ item.address }}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>Ngày đặt vé:</v-list-item-content>
                <v-list-item-content>{{ item.order }}</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </template>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      
    };
  },
  props: ["detailCus"],
  computed: {
    dialog: {
      get() {
        return this.detialCus;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      }
    }
  },
};
</script>

<style></style>
