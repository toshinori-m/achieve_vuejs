<template>
  <div class="header">
    <RouterLink to="home">achieve one's goal
    </RouterLink>
    <nav>
      <ul class="navbar">
        <li><RouterLink to="home">Home
          </RouterLink>
        </li><RouterLink to="training">トレーニング
          </RouterLink>
        <li><RouterLink to="chatroom">参加ルーム
          </RouterLink>
        </li>
      </ul>
      <div>
        <button @click="logout">ログアウト</button>
        <div class="error">{{ error }}</div>
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

</style>