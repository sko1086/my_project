import ContainerLayout from '@/views/sign/ContainerLayout.vue'

export default {
	path: '/sign',
	component: ContainerLayout,
	redirect: '/sign/signIn',
	children: [
		{
			name: 'signIn',
			component: () => import('@/views/sign/signIn.vue'),
			path: '/sign/in'
		},
		{
			name: 'signOut',
			component: () => import('@/views/sign/signOut.vue'),
			path: '/sign/out'
		}
	]
}