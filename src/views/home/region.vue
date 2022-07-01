<template>
  <div class="region">
    <tab/>
  </div>
</template>

<script>
import tab from './tab.vue'
export default {
    name:'Region',
    components:{
      tab
    }
}
</script>

<style>
.region {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    background-color: rgb(255, 219, 232,0.7);
    margin-top: 400px;
    width: 1200px;
    height: 1000px;
    /* opacity: 0.7; */
    border: 2px solid rgb(253, 109, 161);
    border-radius: 5% 5% 0 0;
}
</style>