<template>
  <div>
    <heading>
      <x-title>About</x-title>
    </heading>
    <x-content>
      <div class="space-y-6">
        <paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris
          elementum mauris vitae tortor. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos hymenaeos. Nullam sapien
          sem, ornare ac, nonummy non, lobortis a enim. In laoreet, magna id
          viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi
          sed libero. Pellentesque arcu. Mauris elementum mauris vitae tortor.
        </paragraph>
        <paragraph>
          Ut tempus purus at lorem. Mauris suscipit, ligula sit amet pharetra
          semper, nibh ante cursus purus, vel sagittis velit mauris vel metus.
          Vivamus porttitor turpis ac leo. Aliquam in lorem sit amet leo
          accumsan lacinia. Curabitur sagittis hendrerit ante. Vivamus luctus
          egestas leo. Nullam at arcu a est sollicitudin euismod. Cras pede
          libero, dapibus nec, pretium sit amet, tempor quis.
        </paragraph>
        <paragraph>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos hymenaeos. Duis condimentum augue id magna semper rutrum.
          In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Etiam
          bibendum elit eget erat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </paragraph>
      </div>
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
