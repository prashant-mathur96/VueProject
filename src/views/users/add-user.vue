<template>
  <div class="bg-light d-flex flex-row align-items-center">
    <div class="body flex-grow-1">
      <CContainer class="pl-0 pr-0">
        <CRow class="justify-content-center">
          <CCol>
            <CCard>
              <CCardBody class="p-4">
                <CForm id="registerForm" @submit="Register" novalidate>
                  <div class="formHeading">
                    <h1>Add User</h1>
                    <p class="text-medium-emphasis">Create your account</p>
                  </div>
                  <CRow class="g-3">
                    <CCol xs>
                      <CInputGroup class="mb-2">
                        <CFormInput
                          placeholder="name"
                          id="floatingInputName"
                          floatingLabel="name"
                          v-model="formData.name"
                        />
                      </CInputGroup>
                      <p class="error_msg">
                        {{ errors.name }}
                      </p>
                    </CCol>
                    <CCol xs>
                      <CInputGroup class="mb-2">
                        <CFormInput
                          id="floatingInputEmail"
                          floatingLabel="Email address"
                          type="email"
                          placeholder="Email address"
                          v-model="formData.email"
                        />
                      </CInputGroup>
                      <p class="error_msg">
                        {{ errors.email }}
                      </p>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs>
                      <CInputGroup class="mb-2">
                        <Datepicker format="yyyy/MM/dd"   type="date"  v-model="formData.dob" id="dob" floatingLabel="Enter Your DOB" placeholder="Enter Your DOB"/>
                      </CInputGroup>
                      <p class="error_msg">
                        {{ errors.dob }}
                      </p>
                    </CCol>
                    <CCol xs>
                      <CFormSelect
                        size="md"
                        class="mb-2"
                        aria-label="Large select example"
                        id="country"
                        v-model="formData.country"
                      >
                        <option>Select Country</option>
                        <option value="IN">IN</option>
                        <option value="US">US</option>
                        <option value="AUS">AUS</option>
                        <option value="CH">Ch</option>
                      </CFormSelect>
                      <p class="error_msg">
                        {{ errors.country }}
                      </p>
                    </CCol>
                  </CRow>
                  <CRow>
                    <Ccol xs>
                      <Avatarinput v-model="image" :default-src="formData.image" @fileInput="getImage"></Avatarinput>
                    </Ccol>
                  </CRow>
                  <div class="submit-btn">
                    <CButton color="success" class="pgsubmit-btn" type="submit">
                      Submit
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { CFormInput } from '@coreui/vue'
import userService from '../../service/userService'
import Avatarinput from './Avatarinput.vue'
import { createToaster } from "@meforma/vue-toaster";
import { socket } from "@/components/socket"
const date = ref();
const userServiceObj = new userService()
const toaster = createToaster({ 
  position: "top-right",
});

export default {
  components: { Datepicker, CFormInput, Avatarinput },
  name: 'AddUser',
  el: '#registerForm',
  data() {
    return {
      formData: {
        name: null,
        dob: null,
        email: null,
        country: null,
      },
      errors: [],
      emailRegx: /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/i,
    }
  },
  methods: {
    Register: function (e) {
      e.preventDefault()
      this.errors = {}
      console.log(this)
      if (!this.formData.name) {
        this.errors.name = 'Please Enter Your Name'
      }
      if (!this.formData.email) {
        this.errors.email = 'Please Enter Your Email Id'
      } else if (!this.emailRegx.test(this.formData.email)) {
        this.errors.email = 'Please enter a valid email address'
      }
      if (!this.formData.dob) {
        this.errors.dob = 'Please Enter Your Date of Birth'
      }
      if (!this.formData.country) {
        this.errors.country = 'Please Select Country'
      }
      if (Object.keys(this.errors).length === 0) {
        let fd = new FormData();
        fd.append('image', this.formData.image);
        fd.append('name', this.formData.name);
        fd.append('email', this.formData.email);
        fd.append('dob', this.formData.dob);
        fd.append('country', this.formData.country);
        userServiceObj.createUser(fd).then((result) => {
          if (result.sucess == true) {
            socket.emit("userAddedSuccess", result  , () => {
              toaster.success(`User Successfully Created`);
            });
            
          }else{
            toaster.error(result.msg);
          }
          

          console.log(result);
        });
      }
    },
    getImage(value){
      this.formData.image = value;
    }
  },
  onMounted() {
    date.format="yyyy/MM/dd"
    date.value = new Date().getDate();
    // return {
    //   date,
    // }
  },
}
</script>
