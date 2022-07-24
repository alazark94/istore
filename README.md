<h1 align="center">
iStore
</h1>

To start first copy the `.env.example` file to `.env` and run the following commands one by one.

```
composer install
npm install
npm run dev
```

After doing so, create a database and fill in the required spaces in the `.env` file.

```
DB_DATABASE=test
DB_USERNAME=user
DB_PASSWORD=password

```

After that run the following commands one by one.

```
php artisan key:generate
php artisan migrate --seed
```

You have now a working Database with sample admin and client users in it. Below are the credentials to test.

### Admin Credentials

`email: johndoe@gmail.com`

`password: 12341234`

### Client Credentials

`email: test@gmail.com`

`password: 12341234`
