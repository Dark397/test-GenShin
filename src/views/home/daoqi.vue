<template>
    <div class="com3">
        <div class="container">
            <div class="panel active" @click="test"
                style="background-image: url('https://uploadstatic.mihoyo.com/contentweb/20210720/2021072011090118454.png')">
                <h3>神里绫华 CV:小N</h3>
            </div>
            <div class="panel" @click="test"
                style="background-image: url('https://uploadstatic.mihoyo.com/contentweb/20210914/2021091414025226225.png')">
                <h3>珊瑚宫心海 CV:龟娘</h3>
            </div>
            <div class="panel" @click="test"
                style="background-image: url('https://uploadstatic.mihoyo.com/contentweb/20210817/2021081714114771170.png')">
                <h3>雷电将军 CV:菊花花</h3>
            </div>
            <div class="panel" @click="test"
                style="background-image: url('https://uploadstatic.mihoyo.com/contentweb/20220208/2022020814003845991.png')">
                <h3>八重神子 CV:杜冥鸦</h3>
            </div>
            <div class="panel" @click="test"
                style="background-image: url('https://uploadstatic.mihoyo.com/contentweb/20210618/2021061816182269106.png')">
                <h3>枫原万叶 CV:斑马</h3>
            </div>
            
        </div>

    </div>
</template>

<script>
export default {
    name:'dq',
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