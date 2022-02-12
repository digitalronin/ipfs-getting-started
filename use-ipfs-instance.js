const create = require('ipfs-http-client').create;

(async () => {
  const ref = 'QmPZ9gcCEpqKTo6aq61g2nXGUhM4iCL3ewB6LDXZCtioEB'; // IPFS readme file
  const ipfs = create('http://127.0.0.1:5002');
  const retrieved = await ipfs.cat(ref);
  const decoder = new TextDecoder()
  for await (const chunk of retrieved) {
    console.log(decoder.decode(chunk))
  }
})();
