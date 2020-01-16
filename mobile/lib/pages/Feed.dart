import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:mobile/config/Consts.dart';
import 'package:mobile/controllers/FeedController.dart';
import 'package:shared_preferences/shared_preferences.dart';

class Feed extends StatefulWidget {
  @override
  _FeedState createState() => _FeedState();
}

class _FeedState extends State<Feed> {
  String name = "";
  FeedController controller = FeedController();
  Future _getUserData() async {
    SharedPreferences preferences = await SharedPreferences.getInstance();
    String namePlaceholder = await preferences.getString('username');
    setState(() {
      name = namePlaceholder;
    });
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _getUserData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        title: Image.asset("images/logo.png", width: 40, height: 40,),
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.people),
            onPressed: () {
              Navigator.of(context)
              .pushNamedAndRemoveUntil('/profile', (Route<dynamic> route) => false);
            },
            color: Colors.black,
          )
        ],
      ),
      body: SafeArea(
        child: Column(
          children: <Widget>[
            Observer(
              builder:(context) {
                return (
                  FutureBuilder(
                    future: controller.getPictures(),
                    builder: (BuildContext context, snapshot) {
                      
                      switch(snapshot.connectionState) {
                        
                        case ConnectionState.none:
                          return Text("Carregando");
                          break;
                        case ConnectionState.waiting:
                          return Center(
                            child: Padding(
                              padding: EdgeInsets.only(top: MediaQuery.of(context).size.height / 2.5),
                              child: CircularProgressIndicator(
                                backgroundColor: Color(0xffe60023),
                                valueColor: new AlwaysStoppedAnimation<Color>(Colors.red),
                              ),
                            )
                          );
                          break;
                        case ConnectionState.active:
                          return Text("Carregoudo");
                          break;
                        case ConnectionState.done:
                          List items = snapshot.data['pictures'];
                          return Expanded(
                            child: ListView(
                          
                              shrinkWrap: true,
                              padding: EdgeInsets.all(20),
                              children: List.generate(snapshot.data['pictures'].length > 0 ? snapshot.data['pictures'].length : 0, (index) {
                                //List items = List();
                                String path = items[index]['path'];
                                String realPath = path.replaceAll("localhost:5000",DEFAULT_URL);
                                
                                
                                return GestureDetector(
                                  onTap: () {
                                    print(index);
                                  },
                                  child: Center(
                                    child: Padding(
                                      padding: EdgeInsets.all(20),
                                      child: Container(
                                        width: MediaQuery.of(context).size.width * 0.8,
                                        height: 200,
                                        decoration: BoxDecoration(
                                          image: DecorationImage(
                                            image: NetworkImage(realPath),
                                            fit: BoxFit.cover
                                          )
                                        ),
                                      ),
                                    )
                                  ),
                                );
                              }),
                            ),
                          );
                          
                          break;

                        default:
                          
                      }
                    },
                  )
                );
              }
            )
          ],
        ),
      ),
      
    );
  }
}