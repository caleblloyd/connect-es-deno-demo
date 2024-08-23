# connect-es GRPC on Deno

Requires Deno 1.46.1 or newer

## Run Demo

Demo calls `Say` rpc on the [Eliza](https://buf.build/connectrpc/eliza) service using GRPC over HTTP/2

```bash
deno run -A hello-eliza.ts

# prints response from Eliza, something like:
# Hello there...how are you today?
```

## Re-generate Service

The Service is already generated in `proto/gen`.  If the proto file in `proto/eliza.proto` needs to be updated, use this script:

```bash
cd proto
npm install
npm run gen
```

This uses `npm` to invoke the proto generator, but this is run ahead of time and all that is referenced by Deno at runtime is the generated TypeScript file.

## Note on imports

NPM imports in deno must be qualified with the `npm:` prefix, so an import map in the `imports` key of `deno.json` is used.
