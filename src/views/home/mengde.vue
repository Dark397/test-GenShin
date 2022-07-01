<template>
    <div class="com1">
        <div class="container">
            <div class="panel active" @click="test"
                style="background-image: url('https://uploadstatic.mihoyo.com/contentweb/20220127/2022012718113218873.png')">
                <h3>琴 CV:林簌</h3>
            </div>
            <div class="panel" @click="test"
                style="background-image: url('https://uploadstatic.mihoyo.com/contentweb/20200611/2020061121140891147.png')">
                <h3>迪卢克 CV:马洋</h3>
            </div>
            <div class="panel" @click="test"
                style="background-image: url('https://uploadstatic.mihoyo.com/contentweb/20191122/2019112214234192544.png')">
                <h3>温迪 CV:喵☆酱</h3>
            </div>
            <div class="panel" @click="test"
                style="background-image: url('https://uploadstatic.mihoyo.com/contentweb/20200103/2020010311083818450.png')">
                <h3>可莉 CV:花玲</h3>
            </div>
            <div class="panel" @click="test"
                style="background-image: url('https://uploadstatic.mihoyo.com/contentweb/20210508/2021050818340141562.png')">
                <h3>优菈 CV:子音</h3>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'md',
    methods: {
        test() {
            const panels = document.querySelectorAll('.panel')

            panels.forEach(panel => {
                panel.addEventListener('click', () => {
                    removeActiveClasses()
                    panel.classList.add('active')
                })
            })

            function removeActiveClasses() {
                panels.forEach(panel => {
                    panel.classList.remove('active')
                })
            }
        }
    }
}
</script>

<style>
@import '../../assets/css/com.css';
</style>