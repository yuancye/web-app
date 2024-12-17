makdir backend
cd backend
python3 -m venv django
rm -rf .git
source django/bin/activate
pip install django
pip install psycopg2-binary
cd ..
django-admin startproject restaurant backend
cd backend
python manage.py startapp myuser

python manage.py createsuperuser

<!-- Username: admin
Email address: yuanchaoye1986@gmail.com
password: securepassword123 -->

```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
python manage.py shell
```