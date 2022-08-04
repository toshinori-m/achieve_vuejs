<template>
  <div class="navHeader">
    <h1><RouterLink to="home">achieve one's goal
    </RouterLink></h1>
    <nav>
      <ul class="navbar">
        <li>
          <!-- <a href="home">Home</a> -->
          <form @submit="redirectToHome">
            <button class="nave_button">Home</button>
          </form>
        </li>
        <li>
          <!-- <a href="training">トレーニング</a> -->
          <form @submit="redirectToTraining">
            <button class="nave_button">Training</button>
          </form>
        </li>
        <li>
          <!-- <a href="chatroom">参加ルーム</a> -->
          <form @submit="redirectToChatroom">
            <button class="nave_button">Chatroom</button>
          </form>
        </li>
        <li>
          <button @click="logout" class="button">ログアウト</button>
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
    },
    redirectToHome () {
      this.$router.push({name: 'HomePage'})
    },
    redirectToTraining () {
      this.$router.push({name: 'TrainingPage'})
    },
    redirectToChatroom () {
      this.$router.push({name: 'ChatroomPage'})
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
  margin: 0px 50px 0px 50px;
  font-size: 25px;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgb(0, 255, 145);
}
.nave_button {
  /* list-style: none; */
  background: none;
  font-size: 20px;
  float: right;
  margin: 0px 50px 0px 50px;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgb(0, 255, 145);
  cursor: pointer;
}
.navbar li {
  display:inline-block;
  margin: 0px 0px 0px 0px;
}
.navbar li + li {
  margin-left: 0px 0px 0px 0px;
}
</style>