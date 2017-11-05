onDeviceReady: function() {
    FastClick.attach(document.body);
    // 300ms 터치속도 향상
    show_SplashScreen();
    // 시작화면 처리
    app.receivedEvent('deviceready');
}