import 'dart:html';

import 'package:flutter/material.dart';

void main() {
  runApp(const MaterialApp(
    title: 'Test App',
    home: FirstRoute()
    //theme: const ThemeData( primarySwatch: Colors.grey),
  ));
}

class FirstRoute extends StatelessWidget {
  const FirstRoute({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('First Page'),
        centerTitle: true,
      ),
      body: GridView.count(
        primary: false,
        padding: const EdgeInsets.all(20),
        crossAxisSpacing: 10,
        mainAxisSpacing: 10,
        crossAxisCount: 2,
        children: <Widget>[  
          Container(
          padding: const EdgeInsets.all(8),
          child: ElevatedButton(
          style: ButtonStyle(
            foregroundColor: MaterialStateProperty.all<Color>(Colors.white)
          ),
          onPressed: () {
            Navigator.push(
            context, 
            MaterialPageRoute(builder: (context) => const SecondRoute()),
          );
          },
          child: const Text('Button1'),
          ),
          color: Colors.teal[100],
          ),
          Container(
          padding: const EdgeInsets.all(8),
            child: ElevatedButton(
            style: ButtonStyle(
              foregroundColor: MaterialStateProperty.all<Color>(Colors.white)
            ),
            onPressed: () {
              Navigator.push(
              context, 
              MaterialPageRoute(builder: (context) => const SecondRoute()),
          );
          },
          child: const Text('Button1'),
          ),
          color: Colors.teal[100],
          ),
        ]
        
        ),
    );
  }
}

class SecondRoute extends StatelessWidget {
  const SecondRoute({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Second Page'),
        ),
        body: Column(
          children: <Widget>[
             const Text(
               'Second Page Text'
               ),
             Center(
              child: ElevatedButton(
                style: ButtonStyle(
                  foregroundColor: MaterialStateProperty.all<Color>(Colors.white)
                ),
                onPressed: () {
                  Navigator.pop(context);
                },
                child: const Text('Button1'),
              ),
            ),
          ]
        ),
    );
  }
}