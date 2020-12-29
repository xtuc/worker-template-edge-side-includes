# Edge Side Includes

## Usage

Run the worker on your zone.

Transforms

```html
<div>
    <esi:include src="https://httpbin.org/headers" onerror="continue" />
</div>
```

into

```html
<div>
    { "headers": { "Accept-Encoding": "gzip", "Cdn-Loop": "cloudflare;
    subreqs=1", "Cf-Connecting-Ip": "2a06:98c0:3600::103", "Cf-Ew-Via": "15",
    "Cf-Ray": "6094ac9545c60666-LHR", "Cf-Request-Id":
    "0750ca314b00000666a38fc000000001", "Cf-Visitor": "{\"scheme\":\"https\"}",
    "Cf-Worker": "sven.workers.dev", "Host": "httpbin.org", "User-Agent":
    "cloudflare", "X-Amzn-Trace-Id": "Root=1-5feb5027-654c830d50b8704f42aac3b2"
    } }
</div>
```

## Wrangler

You can use [wrangler](https://github.com/cloudflare/wrangler) to generate a new Cloudflare Workers project based on this template by running the following command from your terminal:

```
wrangler generate myapp https://github.com/xtuc/worker-template-edge-side-includes
```

Before publishing your code you need to edit `wrangler.toml` file and add your Cloudflare `account_id` - more information about publishing your code can be found [in the documentation](https://workers.cloudflare.com/docs/quickstart/configuring-and-publishing/).

Once you are ready, you can publish your code by running the following command:

```
wrangler publish
```

## Serverless

To deploy using serverless add a [`serverless.yml`](https://serverless.com/framework/docs/providers/cloudflare/) file.
