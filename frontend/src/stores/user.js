import { defineStore } from 'pinia'
import { createResource } from 'frappe-ui'
import { sessionStore } from '@/stores/session'
import { reactive } from 'vue'

export const usersStore = defineStore('education-users', () => {
	const session = sessionStore()

	let usersByName = reactive({})

	const users = createResource({
		url: 'education.education.api.get_user_info',
		cache:"Users",
		initialData: [],
		transform(users) {
			for (let user of users) {
				usersByName[user.name] = user
			}
			return users
		},
		onError(error) {
			console.log(error)
			if (error && error.exc_type === 'AuthenticationError') {
				router.push('/login')
			}
		},
		onSuccess(data) {
			console.log(data)
			console.log('success')
		}
	})

	function getUser(email) {
		if (!email || email === 'sessionUser') {
			email = session.user
		}
		if (!email) {
			return null
		}
		if (!usersByName[email]) {
			usersByName[email] = {
				name: email,
				email: email,
				full_name: email.split('@')[0],
				user_image: null,
			}
		}
		return usersByName[email]
	}

	return {
		users,
		getUser,
	}
})
