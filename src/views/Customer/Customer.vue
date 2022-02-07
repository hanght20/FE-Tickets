<template>
  <div>
    <v-toolbar flat color="#E0F7FA">
      <v-toolbar-title>DANH SÁCH HÀNH KHÁCH</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon small fab @click="dialogAdd = true">
        <v-icon color="green">mdi-plus-thick</v-icon>
      </v-btn>

    </v-toolbar>

    <v-row class="mt-0">
      <v-col>
        <v-card>
          <v-data-table
            :headers="headers"
            :items="customers"
            :item-per-page="10"
          >
            <template v-slot:item="{ item }" @click="detailCus = true">
              <tr>
                <td>{{ item.customerName }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.address }}</td>              
                <td>{{ item.order }}</td>
                <td>
                  <div class="d-flex justify-end align-center">
                    <v-btn
                      x-small
                      fab
                      elevation="3"
                      class="mr-2"
                      @click="
                        dialogEdit = true;
                        currentItem = item;
                      "
                    >
                      <v-icon color="green">mdi-pencil-outline</v-icon>
                    </v-btn>
                    <v-btn
                      x-small
                      fab
                      elevation="3"
                      @click="
                        dialogDelete = true;
                        customerId = item.id;
                      "
                    >
                      <v-icon color="red lighten-1"
                        >mdi-trash-can-outline</v-icon
                      >
                    </v-btn>
                  </div>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
      v-model="dialogDelete"
      persistent
      max-width="350px"
      class="dialog-delete"
    >
      <v-card>
        <v-alert prominent style="transform-origin: center center; ">
          <v-row align="center">
            <v-col class="text-center text-hs" cols="12">
              Bạn chắc chắn muốn xoá?
            </v-col>
          </v-row>
          <v-row align="center" class="ml-4">
            <v-spacer></v-spacer>
            <v-col cols="6">
              <v-btn color="red" @click="deleteCustomer" text> Đồng ý </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn color="" @click="dialogDelete = false" text>Hủy bỏ</v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-card>
    </v-dialog>
    <add
      :dialogAdd="dialogAdd"
      @close="dialogAdd = false"
      @updateData="getListCustomer"
    />
    <edit
      :dialogEdit="dialogEdit"
      @close="dialogEdit = false"
      :currentItem="currentItem"
      @updateData="getListCustomer"
    />
  </div>
</template>

<script>
import axios from "axios";
import Add from "./Add.vue";
import Edit from "./Edit.vue";
export default {
  components: { Add, Edit },
  name: "customer",
  data() {
    return {
      headers: [
        { text: "Tên hành khách", value: "customerName" },
        { text: "Điện thoại", value: "phone" },
        { text: "Địa chỉ", value: "address" },
        { text: "Ngày đặt vé", value: "order" },
        { text: "Chức năng", value: "actions", align: "right" }
      ],
      customers: [],
      dialogAdd: false,
      dialogEdit: false,
      dialogDelete: false,
      currentItem: null,
      customerId: null,
      detailCus: false
    };
  },
  methods: {
    getListCustomer() {
      axios
        .get("https://localhost:44390/api/Customer/GetAllCustomer")
        .then(res => {
          this.customers = res.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteCustomer() {
      axios
        .delete(
          "https://localhost:44390/api/Customer/DeleteCustomer?id=" +
            this.customerId
        )
        .then(res => {
          if (res.data) {
            var newArr = this.customers.filter(x => x.id != this.customerId);
            this.customers = newArr;
            this.dialogDelete = false;
          }
        });
    }
  },
  created() {
    this.getListCustomer();
  }
};
</script>

<style></style>
