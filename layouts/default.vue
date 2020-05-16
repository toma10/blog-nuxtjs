<template>
  <layout>
    <x-header :title="title" :subtitle="subtitle"></x-header>
    <main>
      <nuxt />
    </main>
  </layout>
</template>

<script>
import Layout from '~/components/Layout'
import XHeader from '~/components/XHeader'
import config from '~/config'

export default {
  components: {
    Layout,
    XHeader
  },
  data() {
    return {
      title: config.title,
      subtitle: config.subtitle
    }
  }
}
</script>
