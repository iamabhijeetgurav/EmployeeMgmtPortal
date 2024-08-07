<template>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3>Edit Employee Data</h3>
          <form @submit.prevent="updateEmployee">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" v-model="employee.firstName" class="form-control">
            </div>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" v-model="employee.lastName" class="form-control">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="employee.email" class="form-control">
            </div>
            <div class="form-group">
              <label for="mobileNo">Mobile No</label>
              <input type="tel" id="mobileNo" v-model="employee.mobileNo" class="form-control">
            </div>
            <div class="form-group">
              <label for="managerEmailId">Manager Email Id</label>
              <input type="email" id="managerEmailId" v-model="employee.managerEmailId" class="form-control">
            </div>
            <div class="form-group">
              <label for="designation">Designation</label>
              <input type="text" id="designation" v-model="employee.designation" class="form-control">
            </div>
            <div class="form-group">
              <label for="employeeId">Employee Id</label>
              <input type="text" id="employeeId" v-model="employee.employeeId" class="form-control" disabled>
            </div>
            <div class="form-group">
              <label for="city">City</label>
              <input type="text" id="city" v-model="employee.city" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Update</button>
          </form>
        </div>
        <div class="col-md-6">
          <h3>Resume</h3>
          <input type="file" @change="uploadResume" class="form-control">
          <div class="mt-3">
            <h5>Resume Summary</h5>
            <p>{{ resumeSummary }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EmployeeEdit',
    data() {
      return {
        employee: {
          firstName: '',
          lastName: '',
          email: '',
          mobileNo: '',
          managerEmailId: '',
          designation: '',
          employeeId: '',
          city: '',
        },
        resume: null,
        resumeSummary: '',
      };
    },
    created() {
      // Fetch employee data from API
      this.employee = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        mobileNo: '1234567890',
        managerEmailId: 'jane.doe@example.com',
        designation: 'Software Engineer',
        employeeId: '123456',
        city: 'New York',
      };
    },
    methods: {
      updateEmployee() {
        // Update employee data in API
        console.log('Updating employee data:', this.employee);
      },
      uploadResume(event) {
        // Upload resume to API
        this.resume = event.target.files[0];
        console.log('Resume uploaded:', this.resume);
  
        // Generate summary from resume
        this.generateResumeSummary();
      },
      generateResumeSummary() {
        // Generate summary from resume
        this.resumeSummary = 'This is a sample resume summary.';
      },
    },
  };
  </script>
  