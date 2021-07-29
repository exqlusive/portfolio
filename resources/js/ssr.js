import express from 'express'
import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { createInertiaApp } from '@inertiajs/inertia-vue3'

const server = express()
server.use(express.json())
server.post('/render', async (request, response, next) => {
    try {
        response.json(
            await createInertiaApp({
                page: request.body,
                render: renderToString,
                resolve: (name) => require(`./Pages/${name}`),
                setup({ app, props, plugin }) {
                    return createSSRApp({
                        render: () => h(app, props),
                    }).use(plugin)
                },
            })
        )
    } catch (error) {
        next(error)
    }
})
server.listen(8000, () => console.log('Server started.'))

console.log('Starting SSR server...')
