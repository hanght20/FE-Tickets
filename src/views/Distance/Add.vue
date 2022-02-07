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
                <v-text-field
                  v-model="data.distanceName"
                  label="Tuyến xe"
                  required
                ></v-text-field>
              </v-col>
                 <v-col cols="12" sm="6" >
                <v-text-field
                  v-model="data.departureDay"
                  label="Ngày khởi hành"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" >
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
          <v-btn color="green" class="mr-2 mb-3" @click="addDistance">
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
        distanceName: "",
        departureDay: "",
        departureTime: "",
        leaving: "",
        destination: "",
       
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
    addDistance() {
      axios
        .post("https://localhost:44390/api/Distance/InsertDistance", this.data)
        .then(res => {
          this.$emit("updateData");
          this.$emit("close");
          this.data.distanceName = "";
          this.data.leaving="";
          this.data.destination="";
          this.data.departureDay = "";
          this.data.departureTime="";
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
   
};
</script>

<style></style>
