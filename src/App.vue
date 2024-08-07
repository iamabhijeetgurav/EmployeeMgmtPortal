<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <!-- generated summary tab -->
      </div>
    </div>
    <div class="row">

      <div class="col-md-6" style="padding-right: 5%">
        <h3>Resume</h3>
        <input
          type="file"
          @change="handleFileChange"
          class="form-control mb-3"
        />
        <button @click="submitResume" class="btn btn-primary">Upload</button>
        <div class="summary">
          <div
            class="spinner"
            role="status"
            style="margin-top: 2%"
            v-if="isLoading"
          >
            <div class="spinner-border"></div>
            <div>Generating Summary...</div>
          </div>
          <div class="responseGenerated mt-3" v-if="responseGenerated">
            <h5>Resume Summary</h5>
            <p class="generatedSummary">{{ responseGenerated }}</p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: "App",
  data() {
    return {
      employeeId: 0,
      employee: {
        firstName: "",
        lastName: "",
        email: "",
        mobileNo: "",
        managerEmailId: "",
        designation: "",
        city: "",
      },
      resumeFile: null,
      contentToSummarize: null,
      fileUploadedSuccessfully: false,
      responseGenerated: null,
      isLoading: false,
      OPENAI_SECRET_KEY: process.env.VUE_APP_OPENAI_SECRET_API_KEY,
      BASE_URL: process.env.VUE_APP_BASE_URL,
      OPENAI_URL: process.env.VUE_APP_OPENAI_URL,
      OPENAI_HOST: process.env.VUE_APP_OPENAI_HOST,
    };
  },
  methods: {
    async getEmployee() {
      const response = await axios.get(
        `${this.BASE_URL}v1/employee/id/${this.employeeId}`
      );
      this.employee = response.data;
    },
    handleFileChange(event) {
      this.resumeFile = event.target.files[0];
    },
    async submitResume() {
      const formData = new FormData();
      formData.append("file", this.resumeFile);

      try {
        this.isLoading = true;
        const response = await axios.post(`${this.BASE_URL}upload`, formData);
        if (response.data.summary != null) {
          this.contentToSummarize = response.data.summary;
          this.fileUploadedSuccessfully = true;
          await this.submitPrompt();
          toast.success("File uploaded successfully", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      } catch (error) {
        toast.error(error.response.data.errorResponse, {
          position: toast.POSITION.TOP_RIGHT,
        });
        this.isLoading = false;
      }
    },
    async submitPrompt() {
      const options = {
        method: "POST",
        url: this.OPENAI_URL,
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key": this.OPENAI_SECRET_KEY,
          "X-RapidAPI-Host": this.OPENAI_HOST,
        },
        data: {
          messages: [
            {
              role: "user",
              content:
                "Give me the summary of following " + this.contentToSummarize,
            },
          ],
          web_access: false,
        },
      };

      try {
        this.isLoading = true;
        const response = await axios.request(options);
        this.responseGenerated = response.data.result;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

label {
  float: left;
}

.generatedSummary {
  text-align: justify;
  height: 200px;
  overflow-y: scroll;
}

.responseGenerated {
  border: 3px solid grey;
  border-radius: 5px;
  padding: 5% 3% 2% 3%;
}

input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
