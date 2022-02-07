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
                <v-text-field
                  v-model="data.distanceName"
                  label="Tuyến xe"
                  required
                ></v-text-field>
              </v-col>
               <v-col cols="12" sm="6">
                <v-text-field
                  v-model="data.departureDay"
                  label="Ngày khởi hành"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="data.departureTime"
                  label="Giờ khởi hành"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="data.leaving"
                  label="Nơi đi"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="data.destination"
                  label="Nơi đến"
                  required
                ></v-text-field>
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
          <v-btn color="green" class="mr-2 mb-3" @click="editDistance">
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
        distanceName: "",
        leaving: "",
        destination: "",
        departureDay: "",
        departureTime: ""
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
      this.data.id=this.currentItem.id;
      this.data.distanceName = this.currentItem.distanceName;
      this.data.leaving = this.currentItem.leaving;
      this.data.destination = this.currentItem.destination;
      this.data.departureDay = this.currentItem.departureDay;
      this.data.departureTime = this.currentItem.departureTime;
    }
  },
  methods: {
    editDistance() {
      axios
        .put("https://localhost:44390/api/Distance/UpdateDistance", this.data)
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
