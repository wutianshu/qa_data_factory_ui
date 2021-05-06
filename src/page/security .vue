<template>
  <div>
    <reflex-xss></reflex-xss>
    <storage-xss></storage-xss>
    <vueHtmReflexXss></vueHtmReflexXss>
    <vueHtmlStorageXss></vueHtmlStorageXss>
  </div>
</template>

<script>
import storageXss from '@/components/security/storageXss'
import reflexXss from '@/components/security/reflexXss'
import vueHtmReflexXss from '@/components/security/vueHtmReflexXss'
import vueHtmlStorageXss from '@/components/security/vueHtmlStorageXss'

export default {
  name: 'security',
  components: {reflexXss, storageXss, vueHtmReflexXss, vueHtmlStorageXss}
}
</script>

<style scoped>

</style>
