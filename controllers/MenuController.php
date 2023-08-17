<?php

namespace Controllers;

use MVC\Router;
use Model\Usuario;

class MenuController {

    public static function index(Router $router) {
        $router->render('menu/index', []);
    }

}