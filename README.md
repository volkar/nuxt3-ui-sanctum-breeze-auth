# Nuxt 3 UI for Laravel Breeze auth

![Nuxt 3 SPA](https://github.com/volkar/nuxt3-ui-sanctum-breeze-auth/blob/main/prev-1-main.jpg?raw=true)

[Nuxt 3](https://nuxt.com/) SPA boilerplate for consume all of [Laravel Breeze API](https://laravel.com/docs/11.x/starter-kits#breeze-and-next) default installation (sign in, create account, confirm email, forgot password, reset password, get user data) with auth-guarded dashboard and all redirects.

## Features

-   Sign in, crete account, forgot password, reset password and get user data functionality
-   Page guards for authenticated/guest only users with redirect to their default endpoint if status mismatches
-   Simple dashboard for authenticated users
-   Middleware for users with confirmed emails (enabled by default on dashboard page)
-   Displays field errors and success messages
-   Page loading animation and form sending animation
-   Composable to retrieve data from API with cache
-   Adaptive main menu
-   Dark and Light color schemes and switch
-   Markup and styles styles from [Amethyst Lite](https://github.com/volkar/amethyst-lite)
-   Base layout and default styles in `app.vue`, content styles in `AppMain.vue`

## Includes

-   [TailwindCSS](https://tailwindcss.com/)
-   [Nuxt UI](https://ui.nuxt.com/)
-   [nuxt-auth-sanctum](https://nuxt.com/modules/nuxt-auth-sanctum)
-   Most of the auth code and templates copied from [manchenkoff/breeze-nuxt](https://github.com/manchenkoff/breeze-nuxt)

## Screenshots

Index page
![Index page](https://github.com/volkar/nuxt3-ui-sanctum-breeze-auth/blob/main/prev-1-main.jpg?raw=true)
Create account
![Create account](https://github.com/volkar/nuxt3-ui-sanctum-breeze-auth/blob/main/prev-2.jpg?raw=true)
Email verification
![Email verification](https://github.com/volkar/nuxt3-ui-sanctum-breeze-auth/blob/main/prev-3.jpg?raw=true)
Email verified / dashboard
![Dashboard](https://github.com/volkar/nuxt3-ui-sanctum-breeze-auth/blob/main/prev-4.jpg?raw=true)
Sign in
![Sign in](https://github.com/volkar/nuxt3-ui-sanctum-breeze-auth/blob/main/prev-5.jpg?raw=true)
Forgot password
![Forgot password](https://github.com/volkar/nuxt3-ui-sanctum-breeze-auth/blob/main/prev-6.jpg?raw=true)
Light color scheme
![Light color scheme](https://github.com/volkar/nuxt3-ui-sanctum-breeze-auth/blob/main/prev-7.jpg?raw=true)
Mobile version
![Mobile version](https://github.com/volkar/nuxt3-ui-sanctum-breeze-auth/blob/main/prev-8.jpg?raw=true)

## Installation

Install Laravel Breeze (API version), do all that standard stuff with migrations and database connection.

Copy this project to folder of your choice

```shell
git clone https://github.com/volkar/nuxt3-ui-sanctum-breeze-auth.git
```

Go to folder

```shell
cd nuxt3-ui-sanctum-breeze-auth
```

Install dependencies

```
npm install
```

## Email-verified users

If you want to keep verified email only users to be able to access dashboard page, modify `/app/Models/User.php` and add `MustVerifyEmail` to the users:

```php
namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable;

    // ...
```

## Email-unverified users

Or if you want to allow unverified users to access dashboard - change middleware at `/pages/dashboard.vue`

```ts
middleware: ["verified-user"]
```

to

```ts
middleware: ["sanctum:auth"],
```

## CORS

Assumed that laravel will run on 127.0.0.1:8000 (default `php artisan serve` port) and nuxt will run on 127.0.0.1:3000 (default `npm run dev` port)

Open laravel's `.env` and edit/add this lines:

```ini
APP_URL=http://127.0.0.1:8000
FRONTEND_URL=http://127.0.0.1:3000
SANCTUM_STATEFUL_DOMAINS="127.0.0.1:3000,127.0.0.1"

SESSION_DOMAIN=127.0.0.1
```

## Run laravel

```
php artisan serve
```

It will run on http://127.0.0.1:8000 by default.

## Run Nuxt

```
npm run dev
```

It will run on http://127.0.0.1:3000 by default.
Open `http://127.0.0.1:3000` in browser and you good to go!

## Cached data composable

The example page `pages\data.vue` uses the composable `useApiGetCached` for Laravel's endpoint `api/user` with a cache time of 10 seconds. New data will only be fetched from the API after this time has elapsed.

There is another composable `useApiGet` without cache to fetch data on every request without cache.

## Contact me

You always welcome to write me

-   E-mail: sergey@volkar.ru
-   Telegram: @sergeyvolkar
