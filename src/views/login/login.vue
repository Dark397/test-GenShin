<template>
    <div class="login">
        <!-- <audio src="../../assets/audio/三葉のテーマ.mp3" loop  autoplay></audio> -->
        <video id="vid" src="https://ys.mihoyo.com/main/_nuxt/videos/3e78e80.mp4" autoplay loop muted></video>
        <div class="box" v-if="isLogin" @click="up">
            <h2>Login</h2>
                <div class="input-box">
                    <p class="error" v-if="existed">* 用户名或密码错误！ *</p>
                    <label for="">账号</label>
                    <input type="text" name="username" autocomplete="off" v-model="form.username">
                    <p></p>
                </div>
                <div class="input-box">
                    <label for="">密码</label>
                    <input type="password" name="password" autocomplete="off" v-model="form.userpassword">
                </div>
            <div class="btn-box">
                <div>
                    <button @click="login">登录</button>
                    <button @click="changeType">立即注册</button>
                </div>
            </div>
            
        </div>

        <div class="box" v-else>
            <h2>Register</h2>
                <div class="input-box">
                    <p class="error" v-if="existed">* 用户名已存在！ *</p>
                    <label for="">账号</label>
                    <input type="text" name="username" autocomplete="off" v-model="form.username">
                </div>
                <div class="input-box">
                    <label for="">密码</label>
                    <input type="password" name="password" autocomplete="off" v-model="form.userpassword">
                </div>
            <div class="btn-box">
                <div>
                    <button @click="register">注册</button>
                    <button @click="changeType">前往登录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        userpassword: "",
      },
      isLogin: true, //决定显示登录界面还是注册界面
      existed: false, //错误显示
    };
  },
  methods: {
    up(){
      var vid = document.getElementById('vid');
      vid.muted = false
      console.log(vid.muted);
    },
    changeType() {
      this.isLogin = !this.isLogin;
      this.form.username = "";
      this.form.userpassword = "";
      this.existed = false;
    },
    // 登录
    async login() {
      if (this.form.username != "" && this.form.userpassword != "") {
        const { data: res } = await this.$http.post("/login", {
          username: this.form.username,
          password: this.form.userpassword,
        });
        console.log(res.meta.status);
            if (res.meta.status === 403) {
          this.existed = true;
          alert(res.meta.msg);
            } else {
            this.existed = false;
            console.log(res);
            // alert("登录成功！");
            this.$router.push({path:'/Home'})
            }
      } else {
        alert("登录内容不能留空！");
      }
    },
    // 注册
    async register() {
        if (this.form.username != "" && this.form.userpassword != "") {
        // console.log("11222");
        const { data: res } = await this.$http.post("/register", {
          username: this.form.username,
          password: this.form.userpassword,
        });
        // console.log(res);
        if (res.meta.status === 403) {
          this.existed = true; // 注册失败
          alert(res.meta.msg);
        } else {
          this.existed = false; // 注册成功
          console.log(res.meta.status);
          alert("注册成功！");
        }
      } else {
        alert("注册内容不能留空！");
      }
    },
  }
}
</script>

<style scoped>
@import '../../assets/css/login.css';
</style>