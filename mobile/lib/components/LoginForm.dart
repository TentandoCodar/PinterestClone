import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../controllers/LoginController.dart';
import 'dart:convert';
class LoginForm extends StatefulWidget {
  @override
  _LoginFormState createState() => _LoginFormState();
}

class _LoginFormState extends State<LoginForm> {
  bool _renderCondition = false;
  LoginController controller = LoginController();
  _changeStateOfScreen() {
    setState(() {
      this._renderCondition = !this._renderCondition;
    });
  }

  _userIsLogued() async {
    SharedPreferences preferences = await SharedPreferences.getInstance();
    await preferences.remove('user_id');
    int id = await preferences.getInt('user_id');
    if(id != null) {
      Navigator.of(context)
      .pushNamedAndRemoveUntil('/feed', (Route<dynamic> route) => false);
    }
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _userIsLogued();
  }
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: <Widget>[
          _renderCondition ? 
          //If condition is true
          TextField(
            decoration: InputDecoration(
              labelText: 'Nome',
              labelStyle: TextStyle(color: Color(0xffe60023)),
              hintStyle: TextStyle(color: Color(0xffe60023)),
              focusedBorder: UnderlineInputBorder(
                borderSide: BorderSide(color: Color(0xffe60023))
              )
            ),
            onChanged: (String e) {
              controller.name.value = e;
            },
          ) : Text(""),
          TextField(
            decoration: InputDecoration(
              labelText: _renderCondition ? 'Email' : 'E-mail ou Username',
              labelStyle: TextStyle(color: Color(0xffe60023)),
              hintStyle: TextStyle(color: Color(0xffe60023)),
              focusedBorder: UnderlineInputBorder(
                borderSide: BorderSide(color: Color(0xffe60023))
              )
            ),
            onChanged: (String e) {
              controller.nameOrEmail.value = e;
            },
          ),
          TextField(
            obscureText: true,
            decoration: InputDecoration(
              labelText: 'Senha',
              labelStyle: TextStyle(color: Color(0xffe60023)),
              hintStyle: TextStyle(color: Color(0xffe60023)),
              focusedBorder: UnderlineInputBorder(
                borderSide: BorderSide(color: Color(0xffe60023))
              )
            ),
            onChanged: (String e) {
              controller.password.value = e;
            },
          ),
          Padding(
            padding: EdgeInsets.only(top: 20),
            child: RaisedButton(
              child: Text(_renderCondition ? "Criar" : "Entrar", style: TextStyle(color: Colors.white),),
              onPressed: () async {
                if(_renderCondition) {
                  var response = await controller.create();
                  setState(() {
                    _renderCondition = false;
                  });
                }
                else {
                  String token = "";
                  var response = await controller.login();
                  var decodedResponse = jsonDecode(response);
                  token = decodedResponse['token'];
                  
                  if(token != null) {
                    Map<String, dynamic> user = decodedResponse['user'];
                    SharedPreferences preferences = await SharedPreferences.getInstance();
                    await preferences.setString("username", user['name']);
                    await preferences.setInt('user_id', user['id']);
                    Navigator.of(context)
                    .pushNamedAndRemoveUntil('/feed', (Route<dynamic> route) => false);
                  }
                  else {
                    
                  }

                  
                }
              },
              color: Color(0xffe60023),
              padding: EdgeInsets.symmetric(horizontal: 60, vertical: 10),
              splashColor: Color(0xffd50c22),
            ),
          ),
          Padding(
            padding: EdgeInsets.only(top: 10),
            child: Text("Ou"),
          ),
          Padding(
            padding: EdgeInsets.only(top: 10),
            child: RaisedButton(
              child: Text(_renderCondition ? "Entrar" : "Criar", style: TextStyle(color: Colors.black),),
              onPressed: _changeStateOfScreen,
              color: Colors.white,
              padding: EdgeInsets.symmetric(horizontal: 62, vertical: 10),
              splashColor: Colors.grey,
            ),
          )
        ],
      ),
    );
  }
}