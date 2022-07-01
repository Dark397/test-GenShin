<template>
    <div class="role">
        <Sidebar/>
        <div class="role-top">
            <component :is="cur"></component>
        </div>
        <div class="role-left">
            <div class="left-one" :class="{ active: cur == 'role_md' }" @click="cur = 'role_md'"  active-class="active">蒙德城</div>
            <div class="left-two" :class="{ active: cur == 'role_ly' }" @click="cur = 'role_ly'" active-class="active">璃月港</div>
            <div class="left-three" :class="{ active: cur == 'role_dq' }" @click="cur = 'role_dq'" active-class="active">稻妻城</div>
        </div>
        </div>
</template>

<script>
import role_dq from './role_dq.vue'
import role_ly from './role_ly.vue'
import role_md from './role_md.vue'
import Sidebar from '../../components/sidebar.vue'
export default {
    name:'Role',
    components:{
          Sidebar,
          role_md,
          role_ly,
          role_dq
    },
    data: function () {
        return {
            cur: 'role_md'
        }
    },
}
</script>

<style>
@import "../../assets/css/role.css";
</style>