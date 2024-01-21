# IPSC Training app
App is designed by Lucas Botkin Aimbot Drill.
App helps you with training, when there is no buddy arround to assist you in training.

## Development
After you successfully clone repo, you can run duplicate `.env.example` file to `.env`
and insert your own parameters in it.

Create same domain name in `hosts` file and link it to your IP address.

### Docker
Run `docker compose up -d` and visit your local domain in browser.


## Production
If you plan to host your own app, then follow this steps.

After deploying to production run this command to check if SSL can be generated: `docker compose run --rm certbot certonly --webroot --webroot-path /var/www/html/ --dry-run -d your-domain.smth`

If success run this: `docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/html --email your-email@your_domain --agree-tos --no-eff-email --force-renewal -d your_domain -d www.your_domain`

After success, change nginx-local.conf to nginx.conf in .env file.

Run: `docker compose up -d --force-recreate --no-deps nginx`

**You can always use my version of app for free**:
[IPSC App](https://ipsc-practice-app.sample.si "IPSC practice app for Aimbot drill")