# brigh-stageback

Minimal Django backend scaffold created for the Bright-Stage project.

Quick start (PowerShell on Windows):

```powershell
# from the repository root
cd "C:/Users/ASUS/Downloads/Bright-Stage/brigh-stageback"

# create venv and activate
python -m venv env
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\env\Scripts\Activate.ps1

pip install -r requirements.txt

# apply migrations and run
python manage.py migrate
python manage.py createsuperuser  # optional
python manage.py runserver

# visit http://127.0.0.1:8000/ and http://127.0.0.1:8000/api/ping/
```

Notes:
- The project package is `brigh_stageback` (underscores are required for Python package names).
- Replace `SECRET_KEY` before deploying to production. This scaffold uses SQLite for development.
