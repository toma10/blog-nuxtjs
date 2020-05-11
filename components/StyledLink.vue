<template>
  <nuxt-link
    :to="to"
    class="text-base font-semibold leading-6 text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: [String, Object],
      required: true
    }
  }
}
</script>
