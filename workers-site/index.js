import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler'

const DEBUG = false;

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  let options = {};

  options.mapRequestToAsset = request => {
    const url = new URL(request.url);
    url.pathname = `/`;
    return mapRequestToAsset(new Request(url, request));
  };

  try {
    if (DEBUG) {
      options.cacheControl = {
        bypassCache: true,
      };
    }
    return await getAssetFromKV(event, options);
  } catch (e) {
    return new Response(DEBUG ? e.message || e.toString() : "An error has occured", { status: 500 });
  }
}
