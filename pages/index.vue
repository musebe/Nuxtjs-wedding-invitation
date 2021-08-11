<template>
  <form
    @submit.prevent="submit"
    class="p-20 space-y-8 divide-y divide-gray-200"
  >
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div>
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Wedding details
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            This is the information which will be rendered in the invite
          </p>
          <br />
        </div>

        <div class="space-y-6 sm:space-y-5">
          <div
            class="
              sm:grid sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="bride-name"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Bride's name
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="bride-name"
                id="bride-name"
                autocomplete="bride-name"
                required
                v-model="form.names.bride"
                class="
                  max-w-lg
                  block
                  w-full
                  shadow-sm
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:max-w-xs
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>

          <div
            class="
              sm:grid sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="husband-name"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Husband's name
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="husband-name"
                id="husband-name"
                autocomplete="husband-name"
                required
                v-model="form.names.groom"
                class="
                  max-w-lg
                  block
                  w-full
                  shadow-sm
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:max-w-xs
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>

          <div
            class="
              sm:grid sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="date"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Date
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                id="date"
                name="date"
                type="date"
                autocomplete="date"
                required
                v-model="form.date"
                class="
                  max-w-lg
                  block
                  w-full
                  shadow-sm
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:max-w-xs
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>

          <div
            class="
              sm:grid sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="time"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Time
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                id="time"
                name="time"
                type="time"
                autocomplete="time"
                required
                v-model="form.time"
                class="
                  max-w-lg
                  block
                  w-full
                  shadow-sm
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:max-w-xs
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>

          <div
            class="
              sm:grid sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="address-line-one"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Address (Line 1)
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="address-line-one"
                id="address-line-one"
                autocomplete="address-line-one"
                v-model="form.address.first"
                required
                class="
                  max-w-lg
                  block
                  w-full
                  shadow-sm
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:max-w-xs
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>

          <div
            class="
              sm:grid sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="address-line-two"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Address (Line 2)
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="address-line-two"
                id="address-line-two"
                required
                autocomplete="address-line-two"
                v-model="form.address.second"
                class="
                  max-w-lg
                  block
                  w-full
                  shadow-sm
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:max-w-xs
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <button
          type="reset"
          class="
            bg-white
            py-2
            px-4
            border border-gray-300
            rounded-md
            shadow-sm
            text-sm
            font-medium
            text-gray-700
            hover:bg-gray-50
            focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          "
        >
          Cancel
        </button>
        <button
          type="submit"
          class="
            ml-3
            inline-flex
            justify-center
            py-2
            px-4
            border border-transparent
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          "
        >
          Save
        </button>
      </div>
    </div>
  </form>
</template>


<script>
export default {
  data() {
    return {
      form: {
        names: {
          bride: "",
          groom: "",
        },
        date: null,
        time: null,
        address: {
          first: "",
          second: "",
        },
      },
    };
  },
  methods: {
    submit() {
      this.$store
        .dispatch("storeWeddingDetails", this.form)
        .then(() => this.$router.push("/view"));
    },
  },
};
</script>