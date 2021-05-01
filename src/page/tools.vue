<template>
  <div>
    <IdCards></IdCards>
    <addPromotionForm></addPromotionForm>
    <addPromotionJson></addPromotionJson>
    <getPromotion></getPromotion>
  </div>
</template>

<script>
import IdCards from '@/components/tools/IdCards'
import addPromotionForm from '@/components/tools/addPromotionForm'
import addPromotionJson from '@/components/tools/addPromotionJson'
import getPromotion from '@/components/tools/getPromotion'

export default {
  name: 'tools',
  components: {addPromotionForm, IdCards, addPromotionJson, getPromotion},
  component: {}
}
</script>

<!--<style scoped>-->

<!--</style>-->
