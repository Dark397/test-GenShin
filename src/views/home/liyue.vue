<template>
    <div class="com2">
        <div class="container">
            <div class="panel active" @click="test"
                style="background-image: url('https://uploadstatic.mihoyo.com/contentweb/20210122/2021012211421070422.png')">
                <h3>魈 CV:kinsen</h3>
            </div>
            <div class="panel" @click="test"
                style="background-image: url('https://uploadstatic.mihoyo.com/contentweb/20200828/2020082815550918957.png')">
                <h3>刻晴 CV:谢莹</h3>
            </div>
            <div class="panel" @click="test"
                style="background-image: url('https://uploadstatic.mihoyo.com/contentweb/20201126/2020112619441917813.png')">
                <h3>钟离 CV:彭博</h3>
            </div>
            <div class="panel" @click="test"
                style="background-image: url('https://uploadstatic.mihoyo.com/contentweb/20211221/2021122118122432763.png')">
                <h3>申鹤 CV:秦紫翼</h3>
            </div>
            <div class="panel" @click="test"
                style="background-image: url('https://webstatic.mihoyo.com/upload/contentweb/2022/05/18/f120e977480400eedcd44e05def8383e_6188548435833063608.png')">
                <h3>夜兰 CV:徐慧</h3>
            </div>
            
        </div>

    </div>
</template>

<script>
export default {
    name: 'ly',
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