import {createRouter, createWebHistory} from 'vue-router'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '',
            name: 'Welcome',
            component: () => import('@/views/Welcome.vue'),
        },
        {
            path: '/course',
            name: 'course',
            children:[
                {
                    path: 'list',
                    name: 'course-list',
                    component: () => import('@/views/course/CourseList.vue'),
                },
                {
                    path: 'grid',
                    name: 'course-grid',
                    component: () => import('@/views//course/CourseGrid.vue'),
                },

            ]
        }
    ],
})

export default router
