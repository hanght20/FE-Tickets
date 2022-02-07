<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card flat tile>
        <v-card-title class="headline green">
          <span class="text-center text-h5">Thêm mới</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="data.customerId"
                  label="Mã hành khách"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="data.vehicleId"
                  label="Mã xe"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="data.distanceId"
                  label="Mã tuyến xe"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="data.price"
                  label="Giá vé"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="data.seat"
                  label="Số ghế"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="grey lighten-4"
            class="mb-3 mr-2"
            @click="$emit('close')"
          >
            Hủy
          </v-btn>
          <v-btn color="green lighten-2" class="mb-3 mr-3" @click="addTicket">
            Lưu
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import axios from "axios";
export default {
  name: "Add",
  data() {
    return {
      data: {
        customerId: "",
        vehicleId: "",
        distanceId: "",
        price: "",
        seat: ""
      }
    };
  },
  props: ["dialogAdd"],
  computed: {
    dialog: {
      get() {
        return this.dialogAdd;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      }
    }
  },
  methods: {
    addTicket() {
      axios
        .post("https://localhost:44390/api/Ticket/InsertTicket", this.data)
        .then(res => {
          this.$emit("updateData");
          this.$emit("close");
          this.data.customerId = "";
          this.data.vehicleId = "";
          this.data.distanceId = "";
          this.data.price = "";
          this.data.seat = "";
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style></style>
