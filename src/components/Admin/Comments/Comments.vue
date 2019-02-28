<template>
    <div class="comments">
        <h1>Posts</h1>
        <ul class="list-group">
          <div class="row col-sm-12">
            <li v-for="comment in comments" :key="comment.id" class="list-group-item col-sm-4"><br/>
                <div>
                    {{ comment.body }}<br/>
                    <button type="submit" name="button" @click="deleteComment(comment.id)">Delete</button>
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
	name: 'comments',
	data () {
		return {
			comments: []
		}
	},
	created () {
		this.getComments()
	},
	methods: {
		getComments () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
			axios.get(Api.commentsPath())
				.then(response => {
					this.comments = response.data
				})			
		},
		deleteComment (id) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
			axios.delete(Api.commentPath(id))
				.then(() => {
					this.getComments()
				})
		} 
	}
}
</script>

<style scoped>
</style>
