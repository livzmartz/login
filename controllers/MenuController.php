<?php

namespace Controllers;

use MVC\Router;
use Model\Usuario;

class MenuController {

    public static function index(Router $router)
    {        
        if ($_SESSION['auth_user'] != "") {
            $router->render('menu/index', []);
        } else {
            $router->render('login/index', []);
        }
    }
    public static function closeSessionAPI(Router $router) {
        unset($_SESSION['auth_user']);
     }
 
 }

//     public static function cerrarsesion() {

//         $sesion= session_destroy();
 
//         echo json_encode($sesion);
//         exit;
 
//          if($session== true){
 
//              echo json_encode([
//                  'codigo'=> '1'
//              ]);
//              exit;
//          }
//          else{
 
//              echo json_encode([
 
//                  'codigo'=>'2'
//              ]);
//              exit;
//         }
//     }
 
// }