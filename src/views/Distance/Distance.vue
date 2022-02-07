<template>
  <div>
    <v-toolbar flat color="#E0F7FA">
      <v-toolbar-title>THÔNG TIN CÁC TUYẾN XE</v-toolbar-title>
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
            :items="distances"
            :item-per-page="10"
          >
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.distanceName }}</td>
                <td>{{ item.departureDay }}</td>
                <td>{{ item.departureTime }}</td>
                <td>{{ item.leaving }}</td>
                <td>{{ item.destination }}</td>
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
                        distanceId = item.id;
                      "
                    >
                      <v-icon color="red lighten-1">mdi-trash-can-outline</v-icon>
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
            <v-col cols="12" class="text-center text-hs">
              Bạn có đồng ý xóa?
            </v-col>
            <v-row align="center" class="ml-4">
              <v-spacer></v-spacer>
              <v-col cols="6">
                <v-btn color="red" @click="deleteDistance" text>Đồng ý</v-btn>
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
      @updateData="getListDistance"
    />
    <edit
      :dialogEdit="dialogEdit"
      @close="dialogEdit = false"
      :currentItem="currentItem"
      @updateData="getListDistance"
    />
  </div>
</template>

<script>
import axios from "axios";
import Add from "./Add.vue";
import Edit from "./Edit.vue";
export default {
  components: { Add, Edit },
  name: "Distance",
  data() {
    return {
      headers: [
        { text: "Tên chuyến xe", value: "distanceName" },
        { text: "Ngày khởi hành", value: "departureDay" },
        { text: "Giờ khởi hành", value: "departureTime" },
        { text: "Nơi đi", value: "leaving" },
        { text: "Nơi đến", value: "destination" },
        { text: "Chức năng", value: "actions", align: "right" }
      ],
      distances: [],
      dialogAdd: false,
      dialogEdit: false,
      dialogDelete: false,
      currentItem: null,
      distanceId: null
    };
  },
  methods: {
    getListDistance() {
      axios
        .get("https://localhost:44390/api/Distance/GetAllDistance")
        .then(res => {
          this.distances = res.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteDistance() {
      axios
        .delete(
          "https://localhost:44390/api/Distance/DeleteDistance?id=" +
            this.distanceId
        )
        .then(res => {
          if (res.data) {
            var newArr = this.distances.filter(x => x.id != this.distanceId);
            this.distances = newArr;
            this.dialogDelete = false;
          }
        });
    }
  },
  created() {
    this.getListDistance();
  }
};
</script>

<style></style>
