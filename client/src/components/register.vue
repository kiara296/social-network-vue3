<template>
  <div id="register">
    <v-register>
      <page-header />
    </v-register>
  </div>
  <div class="mt-10 sm:m-5">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Personal Information
          </h3>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <Form @submit="register">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="firstName"
                    class="block text-sm font-medium text-gray-700"
                    >First name</label
                  >
                   <ErrorMessage class="text-red-500" name="firstName" />
                  <Field
                    type="text"
                    v-model="name"
                    name="firstName"
                    id="firstName"
                    rules="required"
                    autocomplete="given-name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="lastname"
                    class="block text-sm font-medium text-gray-700"
                    >Last name</label
                  >
                  <ErrorMessage class="text-red-500" name="lastname" />
                  <Field
                    type="text"
                    v-model="lastname"
                    name="lastname"
                    id="lastname"
                    autocomplete="family-name"
                    rules="required"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label
                    for="emailAddress"
                    class="block text-sm font-medium text-gray-700"
                    >Email address</label
                  >
                  <ErrorMessage class="text-red-500" name="emailAddress" />
                  <Field
                    type="text"
                    v-model="email"
                    name="emailAddress"
                    id="emailAddress"
                    autocomplete="email"
                    rules="required|email"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div class="col-span-6 sm:col-span-4">
                  <label
                    for="Password"
                    class="block text-sm font-medium text-gray-700"
                    >Password</label
                  >
                    <ErrorMessage class="text-red-500" name="Password" />
                  <Field
                    type="password"
                    name="Password"
                    v-model="password"
                    id="Password"
                    autocomplete="Password"
                    rules="required"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                 <div class="col-span-6 sm:col-span-4">
                  <label
                    for="confirmation"
                    class="block text-sm font-medium text-gray-700"
                    >Confirm password</label
                  >
                  <ErrorMessage class="text-red-500" name="confirmation" />
                  <Field
                    type="password"
                    name="confirmation"
                    v-model="confirmation"
                    id="confirmation"
                    rules="required|confirmed:@password"
                    autocomplete="confirmation"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

<!--                 <div class="col-span-6 sm:col-span-4">
                  <label class="block text-sm font-medium text-gray-700">
                    Profile photo
                  </label>
                  <div
                    class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                  >
                    <div class="space-y-1 text-center">
                      <svg
                        class="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div class="flex text-sm text-gray-600">
                        <label
                          for="profileImage"
                          class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <Field
                            id="profileImage"
                            name="profileImage"
                            type="file"
                            class="sr-only"
                          />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
 -->              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                @click.prevent="register"
                type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="hidden sm:block" aria-hidden="true">
    <div class="py-5">
      <div class="border-t border-gray-200" />
    </div>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
import PageHeader from "../components/navbar.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import { defineRule, configure  } from 'vee-validate';
import { required, email, confirmed } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';


defineRule('required', required);
defineRule('email', email);
defineRule('confirmed', confirmed);



localize('en', {
  fields: {
    Password: {
      required: 'Hey! Password cannot be empty',
    },
    firstName: {
      required: 'Hey! First Name cannot be empty',
    },
    lastname: {
      required: 'Hey! Last Name cannot be empty',
    },
    emailAddress: {
      required: 'Hey! Email Address cannot be empty',
      email: 'It must be a valid email address'
    },
    confirmation: {
      required: 'Hey! Password confirmation cannot be empty',
      confirmed: 'Passwords must match'
    },
  },
});

export default {
  name: "register",
  components: {
    PageHeader,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      name: "",
      lastname: "",
      email: "",
      password: "",
      confirmation: "",
      /* profileImage: "", */
      error: null,
    };
  },
  methods: {
    async register() {
      try {
         const response = await AuthenticationService.register({
          name: this.name,
          lastname: this.lastname,
          email: this.email,
          password: this.password
      })} catch (error) {
        /*   this.error = error.response.data.error */
      }
    }
    
  },
};
</script>
