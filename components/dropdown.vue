<template>
  <div class="relative inline-block text-left">
    <div @click="isOpen = !isOpen">
      <slot>
        <span class="rounded-md shadow-sm">
          <button
            type="button"
            class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
          >
            Options
            <svg class="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </span>
      </slot>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        class="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg z-10 overflow-y-auto overflow-x-hidden"
        :class="{'hidden': !isOpen}"
        style="max-height: 600px; width:400px;"
      >
        <div class="rounded-md bg-white shadow-xs">
          <div class="py-1">
            <slot name="content" :close="() => isOpen = false">
              <div
                v-for="item of Object.entries(items || {})"
                :key="item[0]"
                class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                :class="{'border-t border-gray-100 bg-gray-100 pointer-events-none font-bold': typeof item[1] === 'boolean', 'cursor-pointer': typeof item[1] !== 'boolean'}"
                @click="click(item[0])"
              >{{item[0]}}</div>
            </slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  props: ["items", "closeOnClick"],
  data: () => ({
    isOpen: false
  }),
  methods: {
    click(item) {
      if (typeof item[1] !== "boolean") {
        this.$emit("choice", item);
        this.isOpen = !this.isOpen;
      }
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false;
      }
    }
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  }
};
</script>
