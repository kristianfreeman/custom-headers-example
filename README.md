# Custom Headers Example

A template for customizing HTTP response headers using Cloudflare Workers.

[`index.js`](https://github.com/cloudflare/custom-headers-example/blob/master/index.js) is the content of the Workers script.

## Getting Started

To generate using [wrangler](https://github.com/cloudflare/wrangler)

```
wrangler generate projectname https://github.com/cloudflare/custom-headers-example
```

Further documentation for Wrangler can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).

## Configuration

Fill in your `account_id`, `zone_id`, and `route` in [`wrangler.toml`](https://github.com/cloudflare/custom-headers-example/blob/master/wrangler.toml). 

When your `wrangler.toml` is configured, you can publish your Workers function using `wrangler publish`:

```sh
$ wrangler publish
```