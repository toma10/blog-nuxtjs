<template>
  <div>
    <date-time :dateTime="post.frontmatter.date">
      {{ formatDate(post.frontmatter.date) }}
    </date-time>
    <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug } }">
      <subtitle>{{ post.frontmatter.title }}</subtitle>
      <div class="mt-3">
        <paragraph>{{ post.excerpt }}</paragraph>
      </div>
    </nuxt-link>
    <div class="mt-3">
      <styled-link :to="{ name: 'posts-slug', params: { slug: post.slug } }">
        Read full story
      </styled-link>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'
import DateTime from '~/components/DateTime'
import Subtitle from '~/components/Subtitle'
import Paragraph from '~/components/Paragraph'
import StyledLink from '~/components/StyledLink'

export default {
  components: {
    DateTime,
    Subtitle,
    Paragraph,
    StyledLink
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      return format(new Date(date), 'dd MMMM, yyyy')
    }
  }
}
</script>
