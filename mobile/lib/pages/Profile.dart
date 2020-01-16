

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:mobile/controllers/ProfileController.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:io';
class Profile extends StatefulWidget {
  @override
  _ProfileState createState() => _ProfileState();
}

class _ProfileState extends State<Profile> {
  
  String name = "";
  TextEditingController nameController = TextEditingController();
  TextEditingController descriptionController = TextEditingController();
  
  var _image;
  ProfileController controller = ProfileController();
  _getProfileData() async {
    SharedPreferences preferences = await SharedPreferences.getInstance();
    name = await preferences.getString('username');
    setState(() {
      name = name;
    });
  }

  
  _pickImage() async {
    var image = await ImagePicker.pickImage(source: ImageSource.gallery);
    print("Tipo = ");
    print(image.runtimeType);
    setState(() {
      _image = image;
    });

    
    
  }

  _showDialogModal() async {
    showDialog(
      context: context,
      
      builder: (context) {
        return AlertDialog(
          content: Scaffold(
            body: Column(
              mainAxisSize: MainAxisSize.min,
              children: <Widget>[
                TextField(
                  decoration: InputDecoration(
                    labelText: 'Nome',
                    labelStyle: TextStyle(color: Color(0xffe60023)),
                    hintStyle: TextStyle(color: Color(0xffe60023)),
                    focusedBorder: UnderlineInputBorder(
                      borderSide: BorderSide(color: Color(0xffe60023))
                    )
                  ),
                  controller: nameController,
                  onChanged: (String e) {
                    controller.name = e;
                  },
                ),
                TextField(
                  decoration: InputDecoration(
                    labelText: 'Descrição',
                    labelStyle: TextStyle(color: Color(0xffe60023)),
                    hintStyle: TextStyle(color: Color(0xffe60023)),
                    focusedBorder: UnderlineInputBorder(
                      borderSide: BorderSide(color: Color(0xffe60023))
                    )
                  ),
                  controller: descriptionController,
                  onChanged: (String e) {
                    controller.description = e;
                  },
                ),
                RaisedButton(
                  child: Text("Imagem"),
                  color: Colors.white,
                  onPressed: () async {
                    await _pickImage();
                    Navigator.pop(context);
                    _showDialogModal();
                  },
                ),
                _image != null ? Image.file(_image, width: 300, height: 200,) : Text(""),
              ],
            ),
          ),
          actions: <Widget>[
            FlatButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: Text("Cancelar", style: TextStyle(color: Color(0xffe60023)),),
            ),
            FlatButton(
              onPressed: () async {
                Navigator.pop(context);
                
                await controller.sendData(_image);
                
              },
              child: Text("Cadastrar imagem",  style: TextStyle(color: Color(0xffe60023))),
            ),
          ],
        );
      }
    );
  }

  @override
  Widget build(BuildContext context) {
    _getProfileData();
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        title: Image.asset("images/logo.png", width: 40, height: 40,),
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.close, color: Colors.black,),
            onPressed: () {
              Navigator.of(context)
              .pushNamedAndRemoveUntil('/feed', (Route<dynamic> route) => false);
            },
          )
        ],
      ),
      body: Column(
        children: <Widget>[
          Center(child: Text("$name", style: TextStyle(fontSize: 20),),),
          IconButton(
            padding: EdgeInsets.all(10),
            icon: Icon(Icons.image),
            onPressed: _showDialogModal,
          )
        ],
      ),
    );
  }
}