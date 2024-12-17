1. download postgreSQL: https://www.postgresql.org/download
2. brew install postgresql@15
3. add path
```
echo 'export PATH="/opt/homebrew/opt/postgresql@15/bin:$PATH"' >> ~/.zshrc

➜  ~ source ~/.zshrc

➜  ~ echo $PATH
```
4. connect to databse
```psql postgres
```
5. create db
```
CREATE DATABASE restaurant;
CREATE USER admin WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE restaurant TO admin;
ALTER DATABASE restaurant OWNER TO admin;
```

6. connect to restaurant db. perform the following in the terminal, not under the postgre
```psql -U admin -d restaurant
```
or under postgre
```
\c restaurant
```


```
\q  #exit
\l #check db
psql postgres #connect to database

```
