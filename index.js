import { EdgeSideIncludesOptimization } from './lib.mjs'

addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event))
})

async function handleRequest(event) {
    const request = event.request
    const esi = new EdgeSideIncludesOptimization(request)

    return transform(request, esi, await fetch(request))
}

function transform(request, esi, response) {
    const rewriter = esi.withESITransform(new HTMLRewriter())
    return rewriter.transform(response)
}
