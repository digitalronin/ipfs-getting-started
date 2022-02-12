const IPFS = require('ipfs');

(async () => {
  const node = await IPFS.create();

  const stored = await node.add({
    path: 'hello.txt',
    content: Buffer.from('Hello World 101')
  });

  console.log(stored);

  const ref = stored.cid.toString();
  console.log(ref);

  const retrieved = await node.cat(ref);
  const decoder = new TextDecoder()
  for await (const chunk of retrieved) {
    console.log(decoder.decode(chunk))
  }
})();
