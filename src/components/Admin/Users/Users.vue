<template>
    <div class="users">
        <h1>Posts</h1>
        <ul class="list-group">
          <div class="row col-sm-12">
            <li v-for="user in users" :key="user.id" class="list-group-item col-sm-4"><br/>
                <div>
                    {{ user.email }}<br/>
										{{ user.admin }}<br/>
                    <button type="submit" name="button" @click="deleteUser(user.id)">Delete</button>
                </div>
            </li>
          </div>
        </ul>
    </div> 
</template>

<script>
import axios from 'axios'
import Api from '../../../backend/AdminApi.js'

export default {
	name: 'users',
	data () {
		return {
			users: []
		}
	},
	created () {
		this.getUsers()
	},
	methods: {
		getUsers () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
			axios.get(Api.usersPath())
				.then(response => {
					this.users = response.data
				})			
		},
		deleteUser (id) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
			axios.delete(Api.userPath(id))
				.then(() => {
					this.getUsers()
				})
		} 
	}
}
</script>

<style scoped>
</style>
