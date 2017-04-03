# LNU_Sheduler


* Install PostgreSQL server on local machine

* Clone this repository to your local machine

  ```
  git clone https://github.com/lhalam/LNU_Scheduler.git
  ```
Go to the local copy of repository. Open terminal and run the following command

  ```
  for win:
  pip install virtualenv
  virtualenv venv 
  venv\Scripts\activate
  ```
 
  ```
  pip install -r requirements.txt
  ```

* Create your *local_settings.py* in the folder with *settings.py* and configure it
  * Database settings

    ```
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': database_name,
            'USER': database_username,
            'PASSWORD': user_password,
            'HOST': '127.0.0.1',
            'PORT': '5432',
        }
    }
    ```