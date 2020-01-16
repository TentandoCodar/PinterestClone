
import 'dart:convert';
import 'dart:io';
import 'package:dio/dio.dart';
import 'package:dio/adapter.dart';
import 'package:mobile/config/Consts.dart';
import 'package:mobx/mobx.dart';
import 'package:shared_preferences/shared_preferences.dart';
part 'ProfileController.g.dart';

class ProfileController = _Profile with _$ProfileController;
abstract class _Profile with Store {
  @observable
  String name = "";

  @observable
  String description = "";
  @action
  Future sendData(var file) async {
    
    SharedPreferences preferences = await SharedPreferences.getInstance();
    int ownerId = preferences.getInt("user_id");
    final finalFile = await MultipartFile.fromFile(file.path, filename: "file.png");
    Map<String, dynamic> data = {
      "name": this.name,
      "description": this.description,
      "file": finalFile,
      "owner_id": ownerId
    };
    FormData formData = FormData.fromMap(data);

    Dio dio = Dio();
    await dio.post("${DEFAULT_URL}/picture", data: formData);
    return true;
  }
}