<template>
  <header class="flex items-center justify-between">
    <nuxt-link class="flex items-center space-x-3" to="/">
      <avatar></avatar>
      <div>
        <h1
          class="text-2xl font-extrabold leading-6 tracking-tight text-gray-900 sm:text-3xl sm:leading-9"
        >
          {{ title }}
        </h1>
        <p class="text-gray-600">{{ subtitle }}</p>
      </div>
    </nuxt-link>
    <x-nav></x-nav>
  </header>
</template>

<script>
import Avatar from '~/components/Avatar'
import XNav from '~/components/XNav'

export default {
  components: {
    Avatar,
    XNav
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  }
}
</script>
