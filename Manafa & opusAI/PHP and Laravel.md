## **PHP Concepts**

### **1. Introduction to PHP**
- **What is PHP?**: PHP (Hypertext Preprocessor) is a popular open-source server-side scripting language designed for web development but also used as a general-purpose programming language.
- **Basic Syntax**: PHP scripts start with `<?php` and end with `?>`. 
- **Echo/Print**: Used to output data to the screen.
  ```php
  echo "Hello, World!";
  ```

### **2. Variables and Data Types**
- **Variables**: Declared using the `$` symbol.
  ```php
  $variableName = "value";
  ```
- **Data Types**: Integer, Float, String, Boolean, Array, Object, NULL, Resource.

### **3. Operators**
- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`.
- **Assignment Operators**: `=`, `+=`, `-=`, `*=`, `/=`.
- **Comparison Operators**: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`.
- **Logical Operators**: `&&`, `||`, `!`.

### **4. Control Structures**
- **Conditional Statements**: `if`, `else`, `elseif`, `switch`.
  ```php
  if ($a > $b) {
    echo "a is greater than b";
  } elseif ($a == $b) {
    echo "a is equal to b";
  } else {
    echo "a is less than b";
  }
  ```
- **Loops**: `for`, `foreach`, `while`, `do...while`.
  ```php
  for ($i = 0; $i < 10; $i++) {
    echo $i;
  }
  ```

### **5. Functions**
- **Defining Functions**: 
  ```php
  function functionName($parameter) {
    // code to be executed
  }
  ```
- **Returning Values**: 
  ```php
  function add($a, $b) {
    return $a + $b;
  }
  ```

### **6. Arrays**
- **Indexed Arrays**: 
  ```php
  $cars = array("Volvo", "BMW", "Toyota");
  ```
- **Associative Arrays**: 
  ```php
  $ages = array("Peter" => 35, "Ben" => 37, "Joe" => 43);
  ```

### **7. Superglobals**
- **$_GET**: Collect data sent in the URL.
- **$_POST**: Collect data sent in the HTTP POST method.
- **$_REQUEST**: Collect data sent in both GET and POST.
- **$_SESSION**: Used to store session variables.
- **$_COOKIE**: Used to store cookies.

### **8. Error Handling**
- **Error Reporting**: 
  ```php
  error_reporting(E_ALL);
  ```
- **Custom Error Handling**: 
  ```php
  function customError($errno, $errstr) {
    echo "Error: [$errno] $errstr";
  }
  set_error_handler("customError");
  ```

### **9. File Handling**
- **Opening and Closing Files**: `fopen()`, `fclose()`.
- **Reading and Writing Files**: `fread()`, `fwrite()`.
- **File Existence Check**: `file_exists()`.

### **10. Object-Oriented PHP**
- **Classes and Objects**: 
  ```php
  class Car {
    function Car() {
      $this->model = "VW";
    }
  }
  $herbie = new Car();
  echo $herbie->model;
  ```
- **Inheritance**: 
  ```php
  class ChildClass extends ParentClass {
    // code
  }
  ```

## **Laravel Concepts**

### **1. Introduction to Laravel**
- **What is Laravel?**: Laravel is a web application framework with expressive, elegant syntax designed for ease of use.
- **Installation**: Use Composer to install Laravel.
  ```bash
  composer create-project --prefer-dist laravel/laravel blog
  ```

### **2. Directory Structure**
- **app/**: Contains core code.
- **bootstrap/**: Contains application bootstrapping code.
- **config/**: Contains configuration files.
- **database/**: Contains database migrations and seeds.
- **public/**: Publicly accessible files.
- **resources/**: Views, raw assets (SASS, JavaScript), language files.
- **routes/**: Route definitions.
- **storage/**: Logs, compiled Blade templates, file-based sessions, file caches.
- **tests/**: Automated tests.
- **vendor/**: Composer dependencies.

### **3. Routing**
- **Defining Routes**: Located in `routes/web.php`.
  ```php
  Route::get('/', function () {
    return view('welcome');
  });
  ```

### **4. Middleware**
- **Creating Middleware**: 
  ```bash
  php artisan make:middleware CheckAge
  ```
- **Registering Middleware**: In `app/Http/Kernel.php`.
- **Using Middleware**: 
  ```php
  Route::get('admin/profile', function () {
    // 
  })->middleware('auth');
  ```

### **5. Controllers**
- **Creating Controllers**: 
  ```bash
  php artisan make:controller UserController
  ```
- **Basic Controller**: 
  ```php
  class UserController extends Controller {
    public function show($id) {
      return view('user.profile', ['user' => User::findOrFail($id)]);
    }
  }
  ```

### **6. Blade Templates**
- **Blade Syntax**: Uses `{{ }}` for variables, `@if`, `@foreach` for control structures.
  ```blade
  <h1>{{ $title }}</h1>

  @if (count($records) === 1)
    <p>We have one record!</p>
  @elseif (count($records) > 1)
    <p>We have multiple records!</p>
  @else
    <p>We have no records!</p>
  @endif

  @foreach ($users as $user)
    <p>This is user {{ $user->id }}</p>
  @endforeach
  ```

### **7. Eloquent ORM**
- **Basic Usage**: 
  ```php
  $users = User::all();
  $user = User::find(1);
  ```
- **Query Builder**: 
  ```php
  $users = DB::table('users')->where('votes', '>', 100)->get();
  ```

### **8. Migrations**
- **Creating Migrations**: 
  ```bash
  php artisan make:migration create_users_table
  ```
- **Running Migrations**: 
  ```bash
  php artisan migrate
  ```
- **Migration Structure**: 
  ```php
  public function up() {
    Schema::create('users', function (Blueprint $table) {
      $table->id();
      $table->string('name');
      $table->string('email')->unique();
      $table->timestamps();
    });
  }
  ```

### **9. Seeding**
- **Creating Seeders**: 
  ```bash
  php artisan make:seeder UsersTableSeeder
  ```
- **Running Seeders**: 
  ```bash
  php artisan db:seed --class=UsersTableSeeder
  ```

### **10. Authentication**
- **Built-in Authentication**: Laravel provides built-in authentication using `php artisan make:auth`.
- **Custom Authentication**: Customize the authentication logic in `AuthController`.

### **11. Testing**
- **Unit Tests**: 
  ```php
  public function testBasicExample() {
    $response = $this->get('/');
    $response->assertStatus(200);
  }
  ```
- **Feature Tests**: Test the entire feature of an application.

### **12. Artisan Console**
- **Running Commands**: 
  ```bash
  php artisan serve
  ```
- **Creating Custom Commands**: 
  ```bash
  php artisan make:command SendEmails
  ```

### **13. Deployment**
- **Environment Configuration**: `.env` file.
- **Cache Configuration**: 
  ```bash
  php artisan config:cache
  ```
