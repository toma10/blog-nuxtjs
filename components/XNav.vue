<template>
  <div>
    <styled-link :to="{ name: 'about' }">About</styled-link>
  </div>
</template>

<script>
import StyledLink from '~/components/StyledLink'

export default {
  components: {
    StyledLink
  }
}
</script>
