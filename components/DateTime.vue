<template functional>
  <p class="text-sm leading-5 text-gray-500">
    <time :dateTime="props.dateTime">
      <slot />
    </time>
  </p>
</template>
