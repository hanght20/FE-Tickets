<template>
  <div>
    <v-toolbar flat color="#E0F7FA">
      <v-toolbar-title>THÔNG TIN CÁC XE</v-toolbar-title>
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
            :items="vehicles"
            :item-per-page="10"
          >
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.vehicleNumber }}</td>
                <td>{{ item.vehicleType }}</td>
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
                        vehicleId = item.id;
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
        <v-alert prominent style="width:300px">
          <v-row align="center">
            <v-col class="text-center " cols="12">
              Bạn chắc chắn muốn xoá?
            </v-col>
            <v-row align="center" class="ml-5">
              <v-spacer></v-spacer>
              <v-col cols="6">
                <v-btn @click="deleteVehicle" color="red" text>Đồng ý</v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn @click="dialogDelete = false" text>Hủy bỏ</v-btn>
              </v-col>
            </v-row>
          </v-row>
        </v-alert>
      </v-card>
    </v-dialog>
    <add
      :dialogAdd="dialogAdd"
      @close="dialogAdd = false"
      @updateData="getListVehicle"
    />
    <edit
      :dialogEdit="dialogEdit"
      @close="dialogEdit = false"
      :currentItem="currentItem"
      @updateData="getListVehicle"
    />
  </div>
</template>

<script>
import axios from "axios";
import Add from "./Add.vue";
import Edit from "./Edit.vue";
export default {
  components: { Add, Edit },
  name: "Vehicle",
  data() {
    return {
      headers: [
        { text: "Số xe", value: "vehicleNumber" },
        { text: "Loại xe", value: "vehicleType" },
        { text: "Chức năng", value: "actions", align: "right" }
      ],
      vehicles: [],
      dialogAdd: false,
      dialogEdit: false,
      dialogDelete: false,
      currentItem: null,
      vehicleId: null
    };
  },
  methods: {
    getListVehicle() {
      axios
        .get("https://localhost:44390/api/Vehicle/GetAllVehicle")
        .then(res => {
          this.vehicles = res.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteVehicle() {
      axios
        .delete(
          "https://localhost:44390/api/Vehicle/DeleteVehicle?id=" +
            this.vehicleId
        )
        .then(res => {
          if (res.data) {
            var newArr = this.vehicles.filter(x => x.id != this.vehicleId);
            this.vehicles = newArr;
            this.dialogDelete = false;
          }
        });
    }
  },
  created() {
    this.getListVehicle();
  }
};
</script>

<style></style>
