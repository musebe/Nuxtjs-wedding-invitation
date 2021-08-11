<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white py-12 px-4 sm:px-6 lg:px-8">
    <nav class="flex justify-center align-center" aria-label="Progress">
      <ol class="space-y-6">
        <li v-for="step in steps" :key="step.name">
          <nuxt-link
            v-if="active(step.to)"
            :to="step.to"
            class="flex items-start"
            aria-current="step"
          >
            <span
              class="
                flex-shrink-0
                h-5
                w-5
                relative
                flex
                items-center
                justify-center
              "
              aria-hidden="true"
            >
              <span class="absolute h-4 w-4 rounded-full bg-indigo-200" />
              <span class="relative block w-2 h-2 bg-indigo-600 rounded-full" />
            </span>
            <span class="ml-3 text-sm font-medium text-indigo-600">{{
              step.name
            }}</span>
          </nuxt-link>
          <nuxt-link v-else :to="step.to" class="group">
            <div class="flex items-start">
              <div
                class="
                  flex-shrink-0
                  h-5
                  w-5
                  relative
                  flex
                  items-center
                  justify-center
                "
                aria-hidden="true"
              >
                <div
                  class="
                    h-2
                    w-2
                    bg-gray-300
                    rounded-full
                    group-hover:bg-gray-400
                  "
                />
              </div>
              <p
                class="
                  ml-3
                  text-sm
                  font-medium
                  text-gray-500
                  group-hover:text-gray-900
                "
              >
                {{ step.name }}
              </p>
            </div>
          </nuxt-link>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
const steps = [
  { name: "Fill data", to: "/", status: "complete" },
  { name: "View Invite", to: "/view", status: "current" },
  { name: "Send Invite", to: "/invite", status: "upcoming" },
];

export default {
  data() {
    return {
      steps,
    };
  },
  methods: {
    active(to) {
      return to === this.$route.path;
    },
  },
};
</script>