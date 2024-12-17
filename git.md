1. add the git config
   ```
   git init
   git config user.name "yuancye"
   git config user.email "yuanchaoye1986@gmail.com"
   ```
2. create an empty git repository without readme.md
```
git remote add origin https://github.com/yuancye/web-app.git
git add .
git commit -m "create the frontend using react"
git branch -M main
git push origin main
```