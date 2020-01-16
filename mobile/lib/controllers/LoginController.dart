import 'package:mobile/config/Consts.dart';
import 'package:mobx/mobx.dart';
import 'package:http/http.dart' as http;
class LoginController {
  var nameOrEmail = Observable("");
  var password = Observable("");
  var name = Observable("");
  Action login;
  Action create;

  LoginController() {
    login = Action(_login);
    create = Action(_create);
  }

  Future _login() async {
    http.Response response = await http.post("${DEFAULT_URL}/login", body: {
      'nameOrEmail': nameOrEmail.value,
      'password': password.value
    });

    return response.body;

    
  }

  Future _create() async {
    http.Response response = await http.post("${DEFAULT_URL}/user", body: {
      'email': nameOrEmail.value,
      'password': password.value,
      'name': name.value,
    });

    return response.body;

    
  }

}