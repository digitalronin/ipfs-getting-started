# Minimal code to interact with IPFS

https://betterprogramming.pub/how-to-get-started-with-ipfs-and-node-fa04baec6b3a

## Setup

### Enable CORS

* Run the IPFS daemon: `npx jsipfs daemon`
* In a separate terminal window:

```
npx jsipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["http://127.0.0.1:5002", "http://localhost:3000", "http://127.0.0.1:5001", "https://webui.ipfs.io"]'
npx jsipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "POST"]'
```

* Now restart the IPFS daemon in the original terminal window

After this, the web interface should work

