<template>
  <div>
    <v-toolbar flat color="#E0F7FA">
      <v-toolbar-title>THÔNG TIN VÉ XE</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon small fab @click="dialogAdd = true">
        <v-icon color="green">mdi-plus-thick</v-icon>
      </v-btn>
    </v-toolbar>
    <v-row class="mt-0">
      <v-col>
        <v-card>
          <v-data-table :headers="headers" :items="tickets" :item-per-page="10">
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.customerId }}</td>
                <td>{{ item.vehicleId }}</td>
                <td>{{ item.distanceId }}</td>
                <td>{{ item.seat }}</td>
                <td>{{ item.price }}</td>
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
                      fab
                      elevation="3"
                      x-small
                      @click="
                        dialogDelete = true;
                        ticketId = item.id;
                      "
                    >
                      <v-icon color="green">mdi-trash-can-outline</v-icon>
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
      max-width="350px"
      persistent
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
              <v-btn color="red" @click="deleteTicket" text> Đồng ý </v-btn>
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
      @updateData="getListTicket"
    />
    <edit
      :dialogEdit="dialogEdit"
      @close="dialogEdit = false"
      :currentItem="currentItem"
      @updateData="getListTicket"
    />
  </div>
</template>

<script>
import axios from "axios";
import Add from "./Add.vue";
import Edit from "./Edit.vue";
export default {
  components: { Add, Edit },
  name: "ticket",
  data() {
    return {
      headers: [
        { text: "Mã hành khách", value: "customerId" },
        { text: "Mã xe", value: "vehicleId" },
        { text: "Mã tuyến", value: "distanceId" },
        { text: "Số ghế", value: "seat" },
        { text: "Giá vé", value: "price" },
        { text: "Chức năng", value: "actions", align: "right" }
      ],
      tickets: [],
      dialogAdd: false,
      dialogEdit: false,
      dialogDelete: false,
      currentItem: null,
      customerId: null
    };
  },
  methods: {
    getListTicket() {
      axios
        .get("https://localhost:44390/api/Ticket/GetAllTicket")
        .then(res => {
          this.tickets = res.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteTicket() {
      axios
        .delete(
          "https://localhost:44390/api/Ticket/DeleteTicket?id=" + this.ticketId
        )
        .then(res => {
          if (res.data) {
            var newArr = this.tickets.filter(x => x.id != this.ticketId);
            this.tickets = newArr;
            this.dialogDelete = false;
          }
        });
    }
  },
  created() {
    this.getListTicket();
  }
};
</script>

<style></style>
