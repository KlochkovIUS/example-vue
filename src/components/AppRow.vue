<template>
  <div class="row mb2">
    <div class="col-md-6">
      <slot name="left" />
    </div>
    <div class="col-md-6">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppRow',
};
</script>
