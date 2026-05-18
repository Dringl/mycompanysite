# Cloudflare Cutover Checklist

- [ ] Add `bq-star.com` in Cloudflare
- [ ] Copy the assigned Cloudflare nameservers
- [ ] Replace registrar nameservers with the Cloudflare nameservers
- [ ] Wait for Cloudflare zone activation
- [ ] Create proxied A record for `@` to the server public IP
- [ ] Create proxied A record for `www` to the server public IP
- [ ] Set SSL/TLS mode to `Full (strict)`
- [ ] Confirm Nginx serves a valid source certificate
- [ ] Confirm `www.bq-star.com` redirects to `bq-star.com`
- [ ] Confirm the contact form still submits successfully after cutover
