<template>
  <div class="container">
    <div class="row">
      <div class="col" style="box-shadow: 0px 3px 8px black; padding:3% 2% 3% 2%; margin: 4%">
        <h3>Sign Up</h3>
        <form @submit.prevent="signUp" class="row g-2">
          <div class="col-md-6">
            <label for="firstName" style="float: left">First Name</label>
            <input
              type="text"
              id="firstName"
              v-model="signUpData.firstName"
              class="form-control"
            />
          </div>
          <div class="col-md-6">
            <label for="lastName" style="float: left">Last Name</label>
            <input
              type="text"
              id="lastName"
              v-model="signUpData.lastName"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="email" style="float: left">Email</label>
            <input
              type="email"
              id="email"
              v-model="signUpData.email"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="password" style="float: left">Password</label>
            <input
              type="password"
              id="password"
              v-model="signUpData.password"
              class="form-control"
            />
          </div>
          <div class="col-md-6">
            <label for="MobileNo" style="float: left">Mobile No</label>
            <input
              type="tel"
              id="mobileNo"
              v-model="signUpData.mobileNo"
              class="form-control"
            />
            </div>
            <div class="col-md-6">
            <label for="employeeId" style="float: left">Employee ID</label>
            <input
              type="number"
              id="employeeId"
              v-model="signUpData.employeeId"
              class="form-control"
            />
            </div>
          <button type="submit" class="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "SignUp",
  data() {
    return {
      signUpData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobileNo:"",
        designation:"",
        employeeId:"",
      },
    };
  },
  methods: {
    signUp() {
      // Sign up user in API
      console.log("Signing up user:", this.signUpData);
      // Redirect to edit page after successful sign up
      this.$router.push("/edit");
    },
  },
};
</script>