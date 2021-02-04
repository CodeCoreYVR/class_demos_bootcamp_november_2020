# Chatr in Express

To get started:

```bash
git clone git@github.com:CodeCoreYVR/chatr-express.git
cd chatr-express
npm i
npm run db:setup
```

Go to `http://localhost:3434` to view the app.

Write your client-side JavaScript in `public/javascripts/main.js`!

✨🤓✨



Notes: fsevnts breaks on node version 14+
To fix:
0) nvm install 12.18.4
1) nvm use 12.18.4
2) npm i fsevents <- run this in the chatr-express directory
3) npm i --save-dev sequelize-cli@4.1.1
4) npm run db:setup