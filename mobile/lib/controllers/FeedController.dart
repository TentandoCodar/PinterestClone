
import 'dart:convert';

import 'package:mobile/config/Consts.dart';
import 'package:mobx/mobx.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:http/http.dart' as http;
class FeedController {
  Observable username = Observable("");
  Action getPictures;

  FeedController() {
    getPictures = Action(_getPictures);
    
  }

  

  Future _getPictures() async {
    http.Response response = await http.get("${DEFAULT_URL}/picture");
    var jsonResponse = jsonDecode(response.body);
    return jsonResponse;
  }
}