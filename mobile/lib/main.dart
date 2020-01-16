import 'package:flutter/material.dart';
import 'package:mobile/pages/Feed.dart';
import 'package:mobile/pages/Profile.dart';
import 'package:mobile/pages/home.dart';

void main() {
  runApp(
    MaterialApp(
      initialRoute: '/',
      debugShowCheckedModeBanner: false,
      routes: {
        '/': (context) => Home(),
        '/feed': (context) => Feed(),
        '/profile': (context) => Profile()
      },
    )
  );
}