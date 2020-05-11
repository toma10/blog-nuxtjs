<template>
  <div>
    <heading>
      <x-title>404 Not Found</x-title>
    </heading>
    <x-content>
      <paragraph>It looks like you're lost...</paragraph>
    </x-content>
  </div>
</template>

<script>
import Heading from '~/components/Heading'
import XTitle from '~/components/XTitle'
import XContent from '~/components/XContent'
import Paragraph from '~/components/Paragraph'

export default {
  components: {
    Heading,
    XTitle,
    XContent,
    Paragraph
  }
}
</script>
