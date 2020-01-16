import 'package:flutter/material.dart';
import 'package:mobile/components/LoginForm.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          child: Center(
            child: Column(
              children: <Widget>[
                Padding(
                  padding: EdgeInsets.all(20),
                  child: Image.asset('images/logo.png', width: 80, height: 80,),
                ),
                Padding(
                  padding: EdgeInsets.only(top: 10),
                  child: Text("Seja bem vindo", style: TextStyle(color: Colors.black, fontSize: 20),),
                ),
                LoginForm(),
              ],
            ),
          ),
        )
      )
    );
  }
}