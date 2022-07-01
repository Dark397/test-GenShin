<template>
    <div class="role_dq">
        <div class="role_dq-top">
            <div class="role_dq-top-img" v-for="(itemCon,index) in Exhibition" :key="index" v-show="index===currentIndex">
                <img class="fadeInDown" :src="itemCon.imgurl">
                <div class="role_dq-top-name">
                    <img :src="itemCon.name" alt="">
                </div>
                <div class="role_dq-top-cv">
                    <img src="../../assets/images/cv.png" alt="">
                    <div>CV:&nbsp;{{itemCon.cv}}</div>
                </div>
                <div class="role_dq-top-introduce">
                    {{itemCon.introduce}}
                </div>
            </div>
        </div>
        <div class="role_dq-btm">
            <ul>
                <li v-for="(item,index) in choice" :key="index" :class="{active:index == currentIndex}" @click="change(index)">
                    <img :src="item.imgurl" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"role_dq",
    data() {
        return {
            currentIndex:0,
            choice: [
                {
                    imgurl:('https://uploadstatic.mihoyo.com/contentweb/20210720/2021072011085576262.png')
                },
                {
                    imgurl:('https://uploadstatic.mihoyo.com/contentweb/20210617/2021061716564818668.png')
                },
                {
                    imgurl:('https://uploadstatic.mihoyo.com/contentweb/20210802/2021080210195390130.png')
                },
                {
                    imgurl:('https://uploadstatic.mihoyo.com/contentweb/20210802/2021080211352035312.png')
                },
                {
                    imgurl:('https://uploadstatic.mihoyo.com/contentweb/20210817/2021081714114216212.png')
                },
                {
                    imgurl:('https://uploadstatic.mihoyo.com/contentweb/20210817/2021081714514765929.png')
                },
                {
                    imgurl:('https://uploadstatic.mihoyo.com/contentweb/20210914/2021091414024724995.png')
                },
                {
                    imgurl:('https://uploadstatic.mihoyo.com/contentweb/20211021/2021102110372681510.png')
                },
                {
                    imgurl:('https://uploadstatic.mihoyo.com/contentweb/20211130/2021113011275394620.png')
                },
                {
                    imgurl:('https://uploadstatic.mihoyo.com/contentweb/20211130/2021113011485830826.png')
                },
                {
                    imgurl:('https://uploadstatic.mihoyo.com/contentweb/20220208/2022020813481182336.png')
                },
                {
                    imgurl:('https://webstatic.mihoyo.com/upload/contentweb/2022/03/14/6713b70c875d723eb22c9effda407377_2979852309102536594.png')
                },
                {
                    imgurl:('https://webstatic.mihoyo.com/upload/contentweb/2022/06/15/d9e1610f9201fd4d5e8ca93c21380485_2031480174215672233.png')
                },
                
            ],
            Exhibition:[
                {
                    imgurl:('https://uploadstatic.mihoyo.com/contentweb/20210720/2021072011090118454.png'),
                    name:('https://uploadstatic.mihoyo.com/contentweb/20210720/2021072011090831883.png'),
                    cv:'小N',
                    introduce:'稻妻「社奉行」神里家的大小姐。端庄文雅，聪慧坚韧。待人接物真诚又得体，深受稻妻民众爱戴，贵有「白鹭公主」之名。'
                },
                {
                    imgurl:('https://uploadstatic.mihoyo.com/contentweb/20210618/2021061816182269106.png'),
                    name:('https://uploadstatic.mihoyo.com/contentweb/20210617/2021061716243457405.png'),
                    cv:'斑马',
                    introduce:'稻妻出身的浪人武士。为人谦和，个性温顺。年轻潇洒的外表下埋藏着许多往事。看似随性，心中却有独属于自己的行事准则。'
                },
                {
                    imgurl:('https://uploadstatic.mihoyo.com/contentweb/20210802/2021080218445394104.png'),
                    name:('https://uploadstatic.mihoyo.com/contentweb/20210802/2021080210200225791.png'),
                    cv:'金娜',
                    introduce:'才华横溢的烟花工匠，「长野原烟花店」的现任店主，被誉为「夏祭的女王」。热情似火的少女。未泯的童心与匠人的执着在她身上交织出了奇妙的焰色反应。'
                },
                {
                    imgurl:('https://uploadstatic.mihoyo.com/contentweb/20210802/2021080211352421154.png'),
                    name:('https://uploadstatic.mihoyo.com/contentweb/20210802/2021080211353240707.png'),
                    cv:'Sakula小舞',
                    introduce:'早柚——隶属于秘密组织「终末番」的特别忍者，对睡眠和长高有着异乎常人的追求。掌握一切可用于逃跑、隐蔽的忍术，以此为自己创造偷懒睡觉的机会。如此神奇的手段，或许会有意想不到的用途。'
                },
                {
                    imgurl:('https://uploadstatic.mihoyo.com/contentweb/20210817/2021081714114771170.png'),
                    name:('https://webstatic.mihoyo.com/upload/contentweb/2022/06/24/e7378ca125c0b91b75e68f3351ca84f6_4701366233880939076.png'),
                    cv:'菊花花',
                    introduce:'雷电将军——此世最殊胜威怖的雷霆化身，稻妻幕府的最高主宰。挟威权之鸣雷，逐永恒之孤道的寂灭者。'
                },
                {
                    imgurl:('https://uploadstatic.mihoyo.com/contentweb/20210817/2021081717485217991.png'),
                    name:('https://uploadstatic.mihoyo.com/contentweb/20210817/2021081714515924405.png'),
                    cv:'杨梦露',
                    introduce:'天领奉行的将领。行如风，言如誓，是位魄力过人的女性。她有着「神的笃信者」之名，将全部忠心都奉献给了雷电将军。将军所追求的「永恒」，也是她愿意为之而战的信念。'
                },
                {
                    imgurl:('https://uploadstatic.mihoyo.com/contentweb/20210914/2021091414025226225.png'),
                    name:('https://uploadstatic.mihoyo.com/contentweb/20210914/2021091414025755510.png'),
                    cv:'龟娘',
                    introduce:'心海是海祇岛的「现人神巫女」，也就是现任海祇岛最高领袖。她通读兵法、擅长谋略，在军事上有着独特见解，也能将内政、外交等工作处理得井井有条。不过，这位人们眼中深不可测的领导者，似乎也有不为人知的一面…'
                },
                {
                    imgurl:('https://uploadstatic.mihoyo.com/contentweb/20211021/2021102110373238959.png'),
                    name:('https://uploadstatic.mihoyo.com/contentweb/20211021/2021102110373773947.png'),
                    cv:'张沛',
                    introduce:'社奉行神里家的家政官，同时也是活跃在稻妻的「地头蛇」。为人友善又富有亲和力，不论身处何处都能轻易融入人群。乍看似乎是个非常随性的人，实际上却很有责任感。无论对待工作或人际都有着格外认真的一面。'
                },
                {
                    imgurl:('https://uploadstatic.mihoyo.com/contentweb/20211130/2021113011275854973.png'),
                    name:('https://webstatic.mihoyo.com/upload/contentweb/2022/06/24/0ee58e5ddf2f881615fe4755cb06dcce_3738411798904136379.png'),
                    cv:'刘照坤',
                    introduce:'鬼族后裔，性格豪爽热血的快意男儿。如风一般迅猛，也如雷一般夺目。'
                },
                {
                    imgurl:('https://uploadstatic.mihoyo.com/contentweb/20211130/2021113011492020608.png'),
                    name:('https://uploadstatic.mihoyo.com/contentweb/20211130/2021113011492586683.png'),
                    cv:'杨昕燃',
                    introduce:'海祇军大将。身具领兵者威严的同时，又无高位者的倨傲。无论何时何地都深受部下信赖，能让人毫无负担地寄托后背与心灵。'
                },
                {
                    imgurl:('https://uploadstatic.mihoyo.com/contentweb/20220208/2022020814003845991.png'),
                    name:('https://webstatic.mihoyo.com/upload/contentweb/2022/06/24/ba8c8eaa70b25f3b86ad53aee06764cc_5447191703618250736.png'),
                    cv:'杜冥鸦',
                    introduce:'掌管鸣神大社的大巫女、狐之血脉的延续者、「永恒」的眷属与友人，以及，轻小说出版社「八重堂」的恐怖总编…有着多重身份的神秘宫司，凡人们或许永远无法了解她的真面目与真心。'
                },
                {
                    imgurl:('https://webstatic.mihoyo.com/upload/contentweb/2022/03/21/ccfce868ab7a930170b38b51347043a6_7260794820701276078.png'),
                    name:('https://webstatic.mihoyo.com/upload/contentweb/2022/03/14/a6553a5ca7488a1e503fba7c6e12231e_2756540788796509812.png'),
                    cv:'赵路',
                    introduce:'社奉行神里家现任家主。总有办法以周全的手段实现自身目的。不过，鲜少有人知道他如今最在意的「目的」是什么。'
                },
                {
                    imgurl:('https://webstatic.mihoyo.com/upload/contentweb/2022/06/15/c83be33638c597c3a35df22e0b74033a_7784441264376051475.png'),
                    name:('https://webstatic.mihoyo.com/upload/contentweb/2022/06/15/a3abcddb156ffcb9568e551e41f0eec3_3013620935829490329.png'),
                    cv:'杨凝',
                    introduce:'「荒泷派」的二把手。脸上戴着一只造型别致的面铠，不苟言笑。很少有人知道，为什么这种级别的人才会跑去混街头帮派。更没有人知道，她面铠下藏着怎样的真容。至少大家表面上都这么说。虽然可能，知情人…也没那么少。'
                },
            ]
        };
    },
    methods:{
        change(index){
                this.currentIndex = index
            },
    }
}
</script>

<style>
@import '../../assets/css/role_dq.css'
</style>