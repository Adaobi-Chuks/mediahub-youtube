import Connect from '@gandalf-network/connect'

const connect = new Connect({
    publicKey: "0x039e0ba8f362f41928d59157b5bb6854fd57bed18263a6acf206884ba02acb5a8a", 
    redirectURL: "www.google.com",
    services: { "youtube": true }
})