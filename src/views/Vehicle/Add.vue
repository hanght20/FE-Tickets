<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card flat tile>
        <v-card-title class="green headline">
          <span style="color:white">Thêm mới</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="data.vehicleNumber" label="Số xe">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="data.vehicleType" label="Loại xe">
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green lighten-4"
            class="mb-3 mr-2"
            @click="$emit('close')"
          >
            Hủy
          </v-btn>
          <v-btn color="green lighten-2" class="mb-3 mr-2" @click="addVehicle">
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
        vehicleNumber: "",
        vehicleType: ""
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
    addVehicle() {
      axios
        .post("https://localhost:44390/api/Vehicle/InsertVehicle", this.data)
        .then(res => {
          this.$emit("close");
          this.$emit("updateData");
          this.data.vehicleNumber = "";
          this.data.vehicleType = "";
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style></style>
