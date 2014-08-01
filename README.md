## Testing Node, Jade and Angular

generated with express using jade templating and toast css grid system

*need to install nodemon globally - this reloads when we make changes to node app files*:
```
npm install -b nodemon
```  

### install:
```
npm install
```
### create .env file with variables for pusherjs and environment:
```
ENVIRONMENT   = 'development'
PUSHER_APPID  = 'XXXXXX'
PUSHER_KEY    = 'XXXXXXXXXXXXXXXX'
PUSHER_SECRET = 'XXXXXXXXXXXXXXXX'
```

### run:
```
nodemon www/bin
```