<template>
  <div>
    <IdCards></IdCards>
    <addPromotionForm></addPromotionForm>
    <addPromotionJson :region="region" :type="type" :resource="resource"></addPromotionJson>
    <getPromotion :region="region" :type="type" :resource="resource"></getPromotion>
    <dialogWebForm :region="region" :type="type" :resource="resource"></dialogWebForm>
  </div>
</template>

<script>
import IdCards from '@/components/tools/IdCards'
import addPromotionForm from '@/components/tools/addPromotionForm'
import addPromotionJson from '@/components/tools/addPromotionJson'
import getPromotion from '@/components/tools/getPromotion'
import dialogWebForm from '@/components/tools/dialogWebForm'

import axios from 'axios'
export default {
  name: 'tools',
  components: {addPromotionForm, IdCards, addPromotionJson, getPromotion, dialogWebForm},
  data () {
    return {
      region: [],
      resource: [],
      type: []
    }
  },
  mounted () {
    axios({
      method: 'get',
      url: '/tools/region/' // 访问vue的8080端口，在config/index.js中设置转发到8000端口，并设置不跨域
    })
      .then(response => {
        if (response.data.returnCode === 0) {
          this.region = response.data.returnInfo
        } else {
          console.log(response.data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
    axios({
      method: 'get',
      url: '/tools/resource/' // 访问vue的8080端口，在config/index.js中设置转发到8000端口，并设置不跨域
    })
      .then(response => {
        if (response.data.returnCode === 0) {
          this.resource = response.data.returnInfo
        } else {
          console.log(response.data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
    axios({
      method: 'get',
      url: '/tools/type/' // 访问vue的8080端口，在config/index.js中设置转发到8000端口，并设置不跨域
    })
      .then(response => {
        if (response.data.returnCode === 0) {
          this.type = response.data.returnInfo
        } else {
          console.log(response.data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<!--<style scoped>-->

<!--</style>-->
