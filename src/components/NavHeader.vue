<template>
  <div class="navHeader">
    <h1><RouterLink to="home">achieve one's goal
    </RouterLink></h1>
    <nav>
      <ul class="navbar">
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="training">トレーニング</a>
        </li>
        <li>
          <a href="chatroom">参加ルーム</a>
        </li>
        <li>
          <button @click="logout">ログアウト</button>
          <div class="error">{{ error }}</div>
        </li>
      </ul>
      <div>
      </div>
    </nav>
  </div>
</template>
<script>
import axios from 'axios'
import removeItem from '../auth/removeItem'

export default {
  data () {
    return {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('uid'),
      error: null
    }
  },
  methods: {

    async logout () {
      this.error = null
      try {
        const res = await axios.delete('http://localhost:3000/auth/sign_out', {
          headers: {
            uid: this.email,
            "access-token": window.localStorage.getItem('access-token'),
            client: window.localStorage.getItem('client')
          }
        })

        if (!res) {
          new Error('ログアウトできませんでした')
        }

        if (!this.error) {
          console.log("ログアウトしました")
          removeItem()
          this.$router.push({ name: 'WelcomePage' })
        }

        return res
      } catch (error) {
        this.error = 'ログアウトできませんでした'
      }
    }
  }
}
</script>

<style>
.navHeader{
  background-color: #0066ff89;
  align-items: center;
  padding: 20px 20px;
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
}
.navHeader h1 {
  float: left;
  margin-left: 10px;
  font-size: 25px;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgb(0, 255, 145);
}
.navbar {
  list-style: none;
  float: right;
  margin-right: 20px;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgb(0, 255, 145);
}
.navbar li {
  display:inline-block;
  margin: 0px 60px;
}
.navbar li + li {
  margin-left: 60px;
}
</style>