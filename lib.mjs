export class EdgeSideIncludesOptimization {
    constructor(request) {
        this.request = request
    }

    withESITransform(rewriter) {
        const request = this.request
        // TODO: HTMLRewriter selector doesn't allow esi:include
        return rewriter.on('*', {
            async element(e) {
                if (e.tagName === 'esi:include') {
                    const init = {
                        method: 'GET',
                        headers: {
                            'user-agent': 'cloudflare',
                        },
                    }
                    const target = e.getAttribute('src')
                    const response = await fetch(target, init)
                    const text = await response.text()
                    e.replace(text, { html: true })
                }
            },
        })
    }
}
