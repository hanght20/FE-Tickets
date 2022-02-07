<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card flat tile>
        <v-card-title class="headline green">
          <span style="text-h5">Thêm mới</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" >
                <v-text-field
                  v-model="data.customerName"
                  label="Tên hành khách"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" >
                <v-text-field
                  v-model="data.phone"
                  label="Điện thoại"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" >
                <v-text-field
                  v-model="data.address"
                  label="Địa chỉ"
                  required
                ></v-text-field>
              </v-col>            
              <v-col cols="12" sm="6" >
                <v-text-field
                  v-model="data.order"
                  label="Ngày đặt"
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
          <v-btn color="green lighten-2" class="mb-3 mr-3" @click="addCustomer">
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
        customerName: "",
        phone: "",
        address: "",
        order: ""
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
    addCustomer() {
      axios
        .post("https://localhost:44390/api/Customer/InsertCustomer", this.data)
        .then(res => {
          this.$emit("updateData");
          this.$emit("close");
          this.data.customerName = "";
          this.data.phone = "";
          this.data.address = "";
          this.data.order = "";
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style></style>
