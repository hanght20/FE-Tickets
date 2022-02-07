<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card flat tile>
        <v-card-title class="green headline">
          <span style="color:white">Cập nhật</span>
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
          <v-btn color="green lighten-2" class="mb-3 mr-2" @click="editVehicle">
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
  name: "Edit",
  data() {
    return {
      data: {
        vehicleNumber: "",
        vehicleType: ""
      }
    };
  },
  props: ["dialogEdit", "currentItem"],
  computed: {
    dialog: {
      get() {
        return this.dialogEdit;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      }
    }
  },
  watch: {
    currentItem: function() {
      this.data.id = this.currentItem.id;
      this.data.vehicleNumber = this.currentItem.vehicleNumber;
      this.data.vehicleType = this.currentItem.vehicleType;
    }
  },
  methods: {
    editVehicle() {
      axios
        .put("https://localhost:44390/api/Vehicle/UpdateVehicle", this.data)
        .then(res => {
          this.$emit("close");
          this.$emit("updateData");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
  
};
</script>

<style></style>
