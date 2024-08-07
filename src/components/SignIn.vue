<template>
  <div class="container">
    <div class="row">
      <div
        class="col-6"
        style="box-shadow: 0px 3px 8px black; padding: 3% 2% 3% 2%; margin: 4%"
      >
        <h3>Sign In</h3>
        <form @submit.prevent="signIn">
          <div class="mb-3">
            <label for="email" style="float: left">Email</label>
            <input
              type="email"
              id="email"
              v-model="signInData.email"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="password" style="float: left">Password</label>
            <input
              type="password"
              id="password"
              v-model="signInData.password"
              class="form-control"
            />
          </div>
          <button type="submit" class="btn btn-primary">Sign In</button>
        </form>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import {useRouter} from 'vue-router'
export default {
  name: "SignIn",
  data() {
    return {
      signInData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signIn() {
      // Sign in user in API
      const router=useRouter();
      console.log("Signing in user:", this.signInData);
      // Redirect to edit page after successful sign in
      router.push({name:"EmployeeEdit"});
    },
  },
};
</script>