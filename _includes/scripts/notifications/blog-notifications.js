login = function(url) {
    $("#message").html("כניסה והרשמה לעדכונים");
    $("#message").toggleClass('unsubscribe',false);
    $("#message").toggleClass('subscribe',false);
    $("#message").toggleClass('login',true);
    $("#message").attr('data-href',url);
}
subscribed = function(key) {
    $("#message").html("הסרת הרשמה לעדכונים");
    $("#message").toggleClass('unsubscribe',true);
    $("#message").toggleClass('subscribe',false);
    $("#message").toggleClass('login',false);
    $("#message").attr('data-key',key);
}
unsubscribed = function() {
    $("#message").html("הרשמה לעדכונים")
    $("#message").toggleClass('unsubscribe',false);
    $("#message").toggleClass('subscribe',true);
    $("#message").toggleClass('login',false);
}
subscribe = function() {
    window.hn.subscribe(
             "http://blog.obudget.org/rss.xml",
             null,
             null,
             null,
             3600,
             function( key ) {
                 subscribed(key);
             },
             function( url ) {
                 login(url);
             } );
}
check_issubscribed = function() {
      window.hn.issubscribed(
               "http://blog.obudget.org/rss.xml",
               null,
               null,
               function( result, key ) {
                   if ( result ) {
                       subscribed(key);
                   } else {
                       unsubscribed();
                       if ( logging_in ) {
                           logging_in = false;
                           subscribe();
                       }
                   }
               },
               function( url ) {
                   login(url);
               } );
}
var logging_in = false;
$( function() {
  $(document).on("click", ".subscribe", function() {
    subscribe();
    return false;
  } );
  $(document).on("click", ".unsubscribe", function() {
    key = $(this).attr("data-key");
    window.hn.unsubscribe( key,
                           function() {
                               unsubscribed();
                           },
                           function( url ) {
                             login(url);
                           } );
    return false;
  } );
  $(document).on("click", ".login", function() {
    href = $(this).attr("data-href");
    window.open(href,'_blank');
    logging_in = true;
    return false;
  } );
  check_issubscribed();
  $(window).focus( function() {
      check_issubscribed();
  });
});
