<template>
  <div class="p-50 h-full min-h-screen bg-gray-50 flex flex-col">
    <div class="pt-10 pb-5 text-center">
      Fill the form below to send an invite
    </div>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <Invite id="invite-container" />
        <form
          class="space-y-6"
          action="#"
          method="POST"
          @submit.prevent="submit"
        >
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div class="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                autocomplete="name"
                required=""
                v-model="form.name"
                class="
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:text-sm
                "
              />
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required=""
                v-model="form.email"
                class="
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:text-sm
                "
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              :disabled="image == null"
              class="
                w-full
                flex
                justify-center
                py-2
                px-4
                border border-transparent
                rounded-md
                shadow-sm
                text-sm
                font-medium
                text-white
                bg-indigo-600
                hover:bg-indigo-700
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
              "
            >
              Send Invite
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="
            m-20
            shadow
            overflow-hidden
            border-b border-gray-200
            sm:rounded-lg
          "
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-white">
              <tr>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="invitees.length === 0">
                <td
                  colspan="2"
                  class="
                    text-center
                    px-6
                    py-4
                    whitespace-nowrap
                    text-sm
                    font-medium
                    text-gray-900
                  "
                >
                  No invites sent
                </td>
              </tr>
              <tr
                v-else
                v-for="(invitee, index) in invitees"
                :key="index"
                :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
              >
                <td
                  class="
                    px-6
                    py-4
                    whitespace-nowrap
                    text-sm
                    font-medium
                    text-gray-900
                  "
                >
                  {{ invitee.name }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ invitee.email }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
      },
      invitees: [],
      image: null,
    };
  },
  computed: {
    ...mapGetters({
      names: "names",
      date: "date",
      address: "address",
    }),
  },
  mounted() {
    this.getImageURL();
  },
  methods: {
    getImageURL() {
      const image = document.getElementById("invite-container");

      if (image === null) {
        setTimeout(() => {
          this.getImageURL();
        }, 1000);
        return;
      }

      if (image.src) {
        this.image = image.src;
      }

      if (this.image == null) {
        setTimeout(() => {
          this.getImageURL();
        }, 1000);
        return;
      }
    },
    async submit() {
      const submitData = {
        to: {
          name: this.form.name,
          email: this.form.email,
        },
        names: {
          bride: this.names.bride,
          groom: this.names.groom,
        },
        invite: this.image,
      };
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      let jsonResponse = response.json();

      console.log(jsonResponse);

      this.invitees.push({
        name: this.form.name,
        email: this.form.email,
      });
    },
  },
};
</script>