/**
 * Created by kazuhira on 22/07/16.
 */

var iftttApp = angular.module('iftttApp', ['ngRoute']);
var triggerChose = 0;
var actionChose =  0;

/*GmailTriggerController  Tn 1*/
var sender_GmailTriggerController = ""; //sender
var subject_GmailTriggerController = ""; //subject

/* GmailActionController  An 1*/
var sender_GmailActionController = "";
var subject_GmailActionController = "";
var receiver_GmailActionController = "";
var body_GmailActionController = "";

/* Trigger1GcalendarController Tn 2 */
var title_Trigger1GcalendarController = "";
var description_Trigger1GcalendarController = "";
var place_Trigger1GcalendarController = "";

/*Trigger2GcalendarController Tn 3 */
var title_Trigger2GcalendarController = "";
var description_Trigger2GcalendarController = "";
var place_Trigger2GcalendarController = "";

/*action1GcalendarController An 2 */ //--> si doveva finire
var title_action1GcalendarController = "";
var subjectReceive_action1GcalendarController = "";
var place_action1GcalendarController = "";
var  yearVector_action1GcalendarController = "";
var monthVector_action1GcalendarController = "";
var dayVector_action1GcalendarController = "";


/* action1TwitterController An 3 */
var subject_action1TwitterController = "";

/* action2TwitterController An 4 */
var title_action2TwitterController = "";
var subjec_action2TwitterController = "";

/* trigger1TwitterController  Tn 4*/
var username_sender_trigger1TwitterController ="";
var hashtag_text_trigger1TwitterController = "";

/* trigger2TwitterController Tn 5 */
var username_sender_trigger2TwitterController = "";
var  hashtag_text_trigger2TwitterController = "";

/* customWeatherActionControllerTrigger1 Tn 6 */
var idCity_customWeatherActionControllerTrigger1 ="";
var timezone_customWeatherActionControllerTrigger1 = "";
var ora_customWeatherActionControllerTrigger1 = "";

/*  customWeatherActionControllerTrigger2 Tn 7 */
var     idCity_customWeatherActionControllerTrigger2 = "";
var     pweather_customWeatherActionControllerTrigger2 = "";
var     pperiod_customWeatherActionControllerTrigger2 = "";
var     pzone_customWeatherActionControllerTrigger2 = "";

/* customWeatherActionControllerTrigger3  Tn 8 */
var  idCity_customWeatherActionControllerTrigger3 = "";
var  timezone_customWeatherActionControllerTrigger3 = "";
var  sunset_customWeatherActionControllerTrigger3 = "";
var  sunrise_customWeatherActionControllerTrigger3 = "";

/* customWeatherActionControllerTrigger4  Tn 9 */

var idCity_customWeatherActionControllerTrigger4 = "";
var ptimezone_customWeatherActionControllerTrigger4 ="";
var pthmax_customWeatherActionControllerTrigger4 = "";
var pthmin_customWeatherActionControllerTrigger4 ="";
var period_customWeatherActionControllerTrigger4 = "";

/* NAVIGATION */

var navPages = [0,0,0,0,0,0];
var count=0;
var url1back = "";
//var url2back = "";
var flagTriggerDone = "0";

//Variabile per protegere le pagine da quello che ho visto devono essere globali.
var googleLogin ="0";   //-> $scope.googleLogged
var twitterLogin = "0"; //-> $scope.twitterLogged
var iftttLogin = false; //-> $scope.iftttLogged







// sendingToServerAll();

/* prova */

var prova1 ="";

iftttApp.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/', {
        templateUrl: 'innerPages/home.html',
        controller: 'homeController'
    });

    $routeProvider.when('#', {
        templateUrl: 'innerPages/home.html',
        controller: 'homeController'
    });

    $routeProvider.when('/home', {
        templateUrl: 'innerPages/home.html',
        controller: 'homeController'
    });


    $routeProvider.when('/index/createIF', {
        templateUrl: 'innerPages/triggers.html',
        controller: 'ifCreatorController'
    });


    $routeProvider.when('/createDO', {
        templateUrl: 'innerPages/actions.html',
        controller: 'doCreatorController'
    });

    $routeProvider.when('/createRecipe', {
        templateUrl: 'innerPages/createRecipe.html',
        controller: 'createRecipeController'
    });

    $routeProvider.when('/chooseChannel', {
        templateUrl: 'innerPages/choose-channel.html'
        //controller: 'chooseChannelController'
    });

    $routeProvider.when('/loginPage', {
        templateUrl: 'innerPages/loginPage.html',
        controller: 'loginPageController'
    });

    $routeProvider.when('/index/myRecipes', {
        templateUrl: 'innerPages/myRecipes.html',
        controller: 'myRecipesController'
    });

    $routeProvider.when('/index/createAccount', {
        templateUrl: 'innerPages/createAccount.html',
        controller: 'createAccountController'
    });


    $routeProvider.when('/about', {
        templateUrl: 'innerPages/about.html'
    });

    $routeProvider.when('/index/about', {
        templateUrl: 'innerPages/about.html'
    });

    $routeProvider.when('/aboutSite', {
        templateUrl: 'innerPages/about-the-site.html'
    });

    $routeProvider.when('/ourTeam', {
        templateUrl: 'innerPages/ourTeam.html'
    });

    $routeProvider.when('/gMailTrigger', {
        templateUrl: 'innerPages/gmailChannel/gMail_Trigger.html',
        controller: 'GmailTriggerController' //o.k.
    });


    $routeProvider.when('/gMailAction', {
        templateUrl: 'innerPages/gmailChannel/gMail_Action.html',
        controller: 'GmailActionController' //o.k.
    });

    $routeProvider.when('/gMailSucces', {
        templateUrl: 'innerPages/gmailChannel/gmailSuccess.html',
        controller: 'SuccessController'
    });


    $routeProvider.when('/choseTriggerActionWeather', {
        templateUrl: 'innerPages/weatherChannel/weatherChooseTriggerAction.html'
    });



    $routeProvider.when('/WeatherTrigger1', {
        templateUrl: 'innerPages/weatherChannel/WeatherTrigger1.html',
        controller: 'customWeatherActionControllerTrigger1'
    });

    $routeProvider.when('/WeatherTrigger2', {
        templateUrl: 'innerPages/weatherChannel/WeatherTrigger2.html',
        controller: 'customWeatherActionControllerTrigger2'
    });

    $routeProvider.when('/WeatherTrigger3', {
        templateUrl: 'innerPages/weatherChannel/WeatherTrigger3.html',
        controller: 'customWeatherActionControllerTrigger3'
    });


    $routeProvider.when('/WeatherTrigger4', {
        templateUrl: 'innerPages/weatherChannel/WeatherTrigger4.html',
        controller: 'customWeatherActionControllerTrigger4'
    });

    $routeProvider.when('/choseTriggerGcalendar', {
        templateUrl: 'innerPages/gcalendarChannel/choseTrigger.html'
    });

    $routeProvider.when('/Trigger1Gcalendar', {
        templateUrl: 'innerPages/gcalendarChannel/gcalendar_Trigger1.html',
        controller: 'Trigger1GcalendarController'
    });

    $routeProvider.when('/Trigger2Gcalendar', {
        templateUrl: 'innerPages/gcalendarChannel/gcalendar_Trigger2.html',
        controller: 'Trigger2GcalendarController'
    });


    $routeProvider.when('/action1Gcalendar', {
        templateUrl: 'innerPages/gcalendarChannel/gcalendar_Action1.html',
        controller: 'action1GcalendarController'
    });

    $routeProvider.when('/choseTriggerTwitter', {
        templateUrl: 'innerPages/twitterChannel/choseTrigger.html'
    });

    $routeProvider.when('/choseActionTwitter', {
        templateUrl: 'innerPages/twitterChannel/choseAction.html'
    });

    $routeProvider.when('/Action1Twitter', {
        templateUrl: 'innerPages/twitterChannel/twitter_Action1.html',
        controller: 'action1TwitterController'
    });


    $routeProvider.when('/Action2Twitter', {
        templateUrl: 'innerPages/twitterChannel/twitter_Action2.html',
        controller: 'action2TwitterController'
    });


    $routeProvider.when('/Trigger1Twitter', {
        templateUrl: 'innerPages/twitterChannel/twitter_Trigger1.html',
        controller: 'trigger1TwitterController'

    });


   $routeProvider.when('/Trigger2Twitter', {
       templateUrl: 'innerPages/twitterChannel/twitter_Trigger2.html',
       controller: 'trigger2TwitterController'

   });

   $routeProvider.when('/SuccessTwitter', {
       templateUrl: 'innerPages/twitterChannel/twitterSuccess.html',
       controller: 'SuccessController'
   });

   $routeProvider.when('/allTriggers', {
       templateUrl: 'innerPages/triggers.html',
       controller: 'ifCreatorController'
   });

   $routeProvider.when('/allActions', {
       templateUrl: 'innerPages/actions.html'
   });

   $routeProvider.when('/createRecipeAction', {
       templateUrl: 'innerPages/createRecipeAction.html'
   });

    $routeProvider.otherwise({redirectTo: '/home'});
}]);

iftttApp.controller('indexController',  ['$scope', '$routeParams', '$window', '$http', '$rootScope',
    function ($scope, $routeParams, $window, $http, $rootscope) {

    var nextPath;

        /*
         * Queste due variabili indicano lo stato di connessione dell'utente ai servizi
         */
        $scope.iftttLogged = false;
        $scope.googleLogged = false;
        $scope.twitterLogged = false;

        /*
         * Funzione che gestisce il click per gestire l'autenticazione a Google
         */
        $scope.requestIFTTTAuth = function() {

            var iftttCredentials = {
                serviceRequested: "iftttpolito",
                email: $('#inputEmailIFTTT').val(),
                password: $('#inputPasswordIFTTT').val()
            };
            console.log(JSON.stringify(iftttCredentials));
            $http({
                url: '/MyServlet',
                method: "POST",
                data: JSON.stringify(iftttCredentials),
                dataType: 'application/json'
                //headers: {'Content-Type': 'application/json'}
            }).then(function success(response) {
                console.log(JSON.stringify(response.data.authenticated) + "locale" + response.data.authenticated.localeCompare("true"));
                if(response.data.authenticated.localeCompare("true")==0){
                    $scope.iftttLogged = true;
                    iftttLogin= true;
                    $('#loginIFTTTModal').modal('hide');
                    $("#notificationsWrapper").notify(
                        "Logged with IFTTT Polito",
                        {
                            className: 'success',
                            position: 'bottom right'
                        }
                    );
                    url = "#"+nextPath;
                    window.location.replace(url);
                } else {
                    $("#notificationsWrapper").notify(
                        "Authentication in IFTTT Polito failed",
                        {
                            className: 'error',
                            position: 'bottom right'
                        }
                    );
                }
                console.log($scope.iftttLogged);
            }, function error(response) {
                $('#loginIFTTTModal').modal('hide');
                $("#notificationsWrapper").notify(
                    "Server error, retry",
                    {
                        className: 'error',
                        position: 'bottom right'
                    }
                );
                $scope.iftttLogged = false;
                iftttLogin= false;
                console.log($scope.iftttLogged);
            });

        };

        /*
         * Funzione che gestisce il click per gestire la disconnessione da Google
         */
        $scope.logoutIFTTT = function () {
            var requestLogout = {
                requestLogout: 'iftttpolito'
            };

            $http({
                method: 'POST',
                url: '/MyServlet',
                data: requestLogout
            }).then(function success(response) {
                console.log(response.data.disconnected);
                if(response.data.disconnected.localeCompare("true")==0){
                    $scope.iftttLogged = false;
                    iftttLogin=  false;
                    $("#notificationsWrapper").notify(
                        "Logged out from IFTTT Polito",
                        {
                            className: 'warning',
                            position: 'bottom right'
                        }
                    );
                    window.location.replace('#');
                } else {
                    $("#notificationsWrapper").notify(
                        "Some problem occurred, please retry",
                        {
                            className: 'error',
                            position: 'bottom right'
                        }
                    );
                }

                console.log($scope.iftttLogged);
            }, function error(response) {
                $('#loginIFTTTModal').modal('hide');
                $("#notificationsWrapper").notify(
                    "Disconnect to IFTTT Polito failed",
                    {
                        className: 'error',
                        position: 'bottom right'
                    }
                );
                console.log($scope.iftttLogged);
            });

        };

        /*
         * Funzione che gestisce il click per gestire l'autenticazione a Google
         */
        $scope.requestGoogleAuth = function() {

            var googleCredentials = {
                serviceRequested: "google",
                email: $('#inputEmailGoogle').val(),
                password: $('#inputPasswordGoogle').val()
            };

            console.log(JSON.stringify(googleCredentials));
            $http({
                url: '/MyServlet',
                method: "POST",
                data: JSON.stringify(googleCredentials),
                dataType: 'application/json'
                //headers: {'Content-Type': 'application/json'}
            }).then(function success(response) {
                console.log(JSON.stringify(response.data.authenticated) + "locale" + response.data.authenticated.localeCompare("true"));
                if(response.data.authenticated.localeCompare("true")==0){
                    $scope.googleLogged = true;
                    googleLogin = "1";
                    $('#loginGoogleModal').modal('hide');
                    $("#notificationsWrapper").notify(
                        "Logged with Google",
                        {
                            className: 'success',
                            position: 'bottom right'
                        }
                    );
                    //FXR
                    url = "#"+nextPath;
                    window.location.replace(url);
                    //end
                } else {
                    $("#notificationsWrapper").notify(
                        "Authentication in Google failed",
                        {
                            className: 'error',
                            position: 'bottom right'
                        }
                    );
                }
                console.log($scope.googleLogged);
            }, function error(response) {
                $('#loginGoogleModal').modal('hide');
                $("#notificationsWrapper").notify(
                    "Server error, retry",
                    {
                        className: 'error',
                        position: 'bottom right'
                    }
                );
                $scope.googleLogged = false;
                googleLogin="0";
                console.log($scope.googleLogged);
            });

        };

        /*
         * Funzione che gestisce il click per gestire la disconnessione da Google
         */
        $scope.logoutGoogle = function () {
            var requestLogout = {
                requestLogout: 'google'
            };

            $http({
                method: 'POST',
                url: '/MyServlet',
                data: requestLogout
            }).then(function success(response) {
                console.log(response.data.disconnected);
                if(response.data.disconnected.localeCompare("true")==0){
                    $scope.googleLogged = false;
                    googleLogin="0";
                    $("#notificationsWrapper").notify(
                        "Logged out from Google",
                        {
                            className: 'warning',
                            position: 'bottom right'
                        }
                    );
                } else {
                    $("#notificationsWrapper").notify(
                        "Some problem occurred, please retry",
                        {
                            className: 'error',
                            position: 'bottom right'
                        }
                    );
                }

                console.log($scope.googleLogged);
            }, function error(response) {
                $('#loginGoogleModal').modal('hide');
                $("#notificationsWrapper").notify(
                    "Disconnect to Google failed",
                    {
                        className: 'error',
                        position: 'bottom right'
                    }
                );
                console.log($scope.googleLogged);
            });

        };

        /*
         * Funzione che gestisce il click per gestire l'autenticazione a Twitter
         */
        $scope.requestTwitterAuth = function() {

            var twitterCredentials = {
                serviceRequested: "twitter",
                email: $('#inputEmailTwitter').val(),
                password: $('#inputPasswordTwitter').val()
            };

            console.log(JSON.stringify(twitterCredentials));
            $http({
                url: '/MyServlet',
                method: "POST",
                data: JSON.stringify(twitterCredentials),
                dataType: 'application/json'
                //headers: {'Content-Type': 'application/json'}
            }).then(function success(response) {
                console.log(JSON.stringify(response.data.authenticated) + "locale" + response.data.authenticated.localeCompare("true"));
                if(response.data.authenticated.localeCompare("true")==0){
                    $scope.twitterLogged = true;
                    twitterLogin = "1";
                    $('#loginTwitterModal').modal('hide');
                    $("#notificationsWrapper").notify(
                        "Logged with Twitter",
                        {
                            className: 'success',
                            position: 'bottom right'
                        }
                    );
                    //console.log("#"+nextPath);
                    url = "#"+nextPath;
                    window.location.replace(url);
                } else {
                    $("#notificationsWrapper").notify(
                        "Authentication in Twitter failed",
                        {
                            className: 'error',
                            position: 'bottom right'
                        }
                    );
                }
                console.log($scope.twitterLogged);
            }, function error(response) {
                $('#loginTwitterModal').modal('hide');
                $("#notificationsWrapper").notify(
                    "Server error, retry",
                    {
                        className: 'error',
                        position: 'bottom right'
                    }
                );
                $scope.twitterLogged = false;
                twitterLogin = "0";
                console.log(""+$scope.twitterLogged);
            });

        };

        /*
         * Funzione che gestisce il click per gestire la disconnessione da Twitter
         */
        $scope.logoutTwitter = function () {
            var requestLogout = {
                requestLogout: 'twitter'
            };
            /*Non so di preciso dove mettere questa variabile che serve per "sicurizzare"
            le pagine di twitter ossia:
             if(twitterLogin == "1") tu sei loggatto;
             if(twitterLogin == "0") tu non sei loggato;
            */

            $http({
                method: 'POST',
                url: '/MyServlet',
                data: requestLogout
            }).then(function success(response) {
                console.log(response.data.disconnected);
                if(response.data.disconnected.localeCompare("true")==0){
                    $scope.twitterLogged = false;
                    twitterLogin="0";
                    $("#notificationsWrapper").notify(
                        "Logged out from Twitter",
                        {
                            className: 'warning',
                            position: 'bottom right'
                        }
                    );
                } else {
                    $("#notificationsWrapper").notify(
                        "Some problem occurred, please retry",
                        {
                            className: 'error',
                            position: 'bottom right'
                        }
                    );
                }

                console.log($scope.twitterLogged);
            }, function error(response) {
                $('#loginTwitterModal').modal('hide');
                $("#notificationsWrapper").notify(
                    "Disconnect to Twitter failed",
                    {
                        className: 'error',
                        position: 'bottom right'
                    }
                );
                console.log($scope.twitterLogged);
            });

        };

        /*
         * Funzione che gestisce il click per gestire il corretto routing delle pagine
         */
        $scope.routeListener = function (nextRoute) {
            nextPath = nextRoute;
            console.log("routeListener(nextRoute): "+nextPath);
        }



    }]);
iftttApp.controller('SuccessController',  ['$scope', '$routeParams',
    function ($scope, $rootscope, $routeParams, $http, $resource) {

        if (flagTriggerDone == "1")
        {
            alert("Warning you must compile before the action form");
            var url = "#createRecipeAction";
            window.location.replace(url);
        }
        if (count==7) count=0;
        else
        {
            url = "#createDO";
            window.location.replace(url);
        }

    }]);


iftttApp.controller('homeController',  ['$scope', '$routeParams',
    function ($scope, $rootscope, $routeParams, $http, $resource) {

        $scope.loadHome = function()
        {
            console.log("homeController: loaded");
        }

    }]);

iftttApp.controller('createRecipeController',  ['$scope', '$routeParams',
    function ($scope, $rootscope, $routeParams, $http, $resource) {

        $scope.loadHome = function()
        {
            console.log("createRecipeController: loaded");
        }

    }]);

iftttApp.controller('ifCreatorController',  ['$scope', '$routeParams', '$window',
    function ($scope, $rootscope, $window, $routeParams, $http, $resource) {

    $scope.NGgoogleLogged = false;

    // A
        $scope.$watch(
            function () {
                console.log("angular: "+$window.googleLogged);
                return $window.googleLogged
            }, function(n,o){
                console.log("changed ",n);
            },
            true
        );

    // B

    }]);

iftttApp.controller('doCreatorController',  ['$scope', '$routeParams',
    function ($scope, $rootscope, $routeParams, $http, $resource) {

        $scope.loadHome = function()
        {
            console.log("createRecipeController: loaded");
        }

    }]);

iftttApp.controller('doCreatorController',  ['$scope', '$routeParams',
    function ($scope, $rootscope, $routeParams, $http, $resource) {


    }]);


iftttApp.controller('myRecipesController',  ['$scope', '$routeParams',
    function ($scope, $rootscope, $routeParams, $http, $resource) {

        $scope.faq = [
            {key: "Question 1",
                value: "Answer1"},

            {key: "Question 2",
                value: "Answer2"}
        ];




    }]);

iftttApp.controller('createAccountController',  ['$scope', '$routeParams',
    function ($scope, $rootscope, $routeParams, $http, $resource) {

        $scope.createAccountFunc = function(user, email, pws1, pws2)
        {

            if (angular.isDefined(email) && angular.isDefined(user) && angular.isDefined(pws1) && angular.isDefined(pws2)){
                if(pws1==pws2)
                {
                    //console.log(user + " " + email + " " + " " + pws1);

                    var loginDataSend =
                    {
                        "user": user,
                        "email": email,
                        "pws1": pws1
                    };
                    //console.log(loginDataSend.user);
                    $.ajax
                    ({
                        method: "post",
                        url: "/MyServlet",
                        data: loginDataSend,
                        dataType: "json",
                        success: function() {
                            console.log("la post ha avuto successo");
                            window.location.replace('#');
                        },
                        error: function(){
                            alert("some error occurred");
                        }
                    });

                }

            }


        }


    }]);



//Update
iftttApp.controller('GmailTriggerController', ['$scope', '$rootScope', '$routeParams', '$http', '$location',
    function ($scope, $rootscope, $routeParams, $http, $resource, $location) {

        //Bug stringa null

        $scope.flagEmail="email is empty";
        $scope.gmailinput = [];
        $scope.triggerGmail = function()
        {
            var sender = "";
            var subject = "";
            var flag = "1";
            triggerChose=1;
            //console.log($scope.gmailinput.email + " "  + $scope.gmailinput.subjectReceive);

            sender_GmailTriggerController="";
            subject_GmailTriggerController="";

            if($scope.checkedEmail == true || $scope.checkedSubject == true) {
                //Firt variable
                if ($scope.checkedEmail == true) {
                    if (angular.isDefined($scope.gmailinput)) {
                        if (angular.isDefined($scope.gmailinput.email)) {
                            sender = $scope.gmailinput.email;
                            if (validateEmail(sender));
                            else
                            {
                                $scope.flagEmail="not valid";
                                flag = "0";
                            }



                        }
                        else {
                            sender = "";
                            $scope.flagEmail="is empty";
                        }
                    }
                    else {
                        sender = "";
                        $scope.flagEmail="is empty";
                    }

                }
                else {
                    sender = "null";
                }

                //Second variable
                if ($scope.checkedSubject == true) {
                    if (angular.isDefined($scope.gmailinput)) {
                        if (angular.isDefined($scope.gmailinput.subjectReceive)) {
                            subject = $scope.gmailinput.subjectReceive;
                        }
                        else {
                            subject = "";
                        }
                    }
                    else {
                        subject = "";
                    }

                }
                else {
                    subject = "null";
                }

                if(flag=="1")
                {
                    flagTriggerDone = "1";
                    sender_GmailTriggerController = sender;
                    subject_GmailTriggerController = subject;
                    url = "#createRecipeAction";
                    window.location.replace(url);
                }
            }
            else
            {
                //url = "#gMailTrigger";
                //window.location.replace(url);

            }
            //Test done o.k.
            /*
            var loginDataSend =
            {
                l1:  sender_GmailTriggerController,
                l2: subject_GmailTriggerController
            }
            $.ajax
            ({
                method: "post",
                url: "/MyServlet",
                data: loginDataSend,
                dataType: "json",
                success: console.log("la post ha avuto successo")
            });
            */
        };

        // $scope.checkedtitle = true;
        $scope.checkedEmail = false;
        $scope.checkedSubject = false;

        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }


    }]);

//Update done
iftttApp.controller('GmailActionController', ['$scope', '$rootScope', '$routeParams', '$http', '$location',
    function ($scope, $rootscope, $routeParams, $http, $resource, $location) {

        //Bug stringa null

        $scope.test = "void";
        $scope.gmailActionvar = [];

        $scope.actionGmail = function()
        {
           
            var receiver ="";
            var subject = "";
            var body = "";
            var flag = "1";
            actionChose=1;
            //sender_GmailActionController = "";


            receiver_GmailActionController = "";
            subject_GmailActionController = "";
            sender_GmailActionController= "";
            body_GmailActionController = "";


            if(googleLogin == "1")  {


                    if (angular.isDefined($scope.gmailActionvar))
                    {
                        if (angular.isDefined($scope.gmailActionvar.email))
                        {
                            receiver = $scope.gmailActionvar.email;

                            if (validateEmail(receiver));
                            else
                            {
                                flag = "0";
                                alert("Your e.mail is not right . . .1");
                            }
                        }
                        else {
                            receiver = "";
                            flag = "0";
                            alert("Your e.mail is not right . . .2");
                        }
                    }
                    else {
                        receiver = "";
                        flag = "0";
                        alert("Your e.mail is not right . . .3");
                    }



                if ($scope.checkedSubject == true)
                {
                    if (angular.isDefined($scope.gmailActionvar))
                    {
                        if (angular.isDefined($scope.gmailActionvar.subjectReceive))
                        {
                            subject = $scope.gmailActionvar.subjectReceive;
                        }
                        else
                        {
                            subject = "";
                        }
                    }
                    else
                    {
                        subject  = "";
                    }

                }
                else
                {
                    subject = "null";
                }


                if ($scope.checkedBody == true)
                {
                    if (angular.isDefined($scope.gmailActionvar))
                    {
                        if (angular.isDefined($scope.gmailActionvar.checkedBody))
                        {
                            body = c.gmailActionvar.checkedBody;
                        }
                        else
                        {
                            body = "";
                        }
                    }
                    else
                    {
                        body  = "";
                    }

                }
                else
                {
                    body = "null";
                }



                if(flag == "1")
                {

                    flagTriggerDone = "0";
                    count=7;


                    receiver_GmailActionController = receiver;
                    subject_GmailActionController = subject;
                    sender_GmailActionController= $scope.gmailActionvar.sender;
                    body_GmailActionController = body;


                    sendingToServerAll();
                    var url = "#gMailSucces";
                    window.location.replace(url);
                }
            }
            else
            {
                alert("You are not logged in google");
                url = "#createDO";
                window.location.replace(url);
            }

            /*
            var loginDataSend =
            {
                l3:  sender_GmailActionController,
                l4: subject_GmailActionController
            }
            $.ajax
            ({
                method: "post",
                url: "/MyServlet",
                data: loginDataSend,
                dataType: "json",
                success: console.log("la post ha avuto successo")
            });
            */

        };
        $scope.checkedEmail = false;
        $scope.checkedSubject = false;
        $scope.checkedbody=false;
        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }


    }]);



iftttApp.controller('customWeatherActionControllerTrigger1',  ['$scope', '$routeParams',
    function ($scope, $rootscope, $routeParams, $http, $resource) {
        $scope.loadHome = function()
        {
        }

        $scope.trigger1input = {
            value1: 0,
            value2: 0,
            value3: 0
        };



        $scope.errorButton = 'cia';
        $scope.checkadvisetimevar = 'NO';
        $scope.checktimeZonevar = 'NO'
        $scope.checkadvisetimefunc = function(name)
        {
            if($scope.checkadvisetimevar === "YES")
                $scope.checkadvisetimevar = 'NO';
            else
                $scope.checkadvisetimevar = 'YES';
            //console.log(name);
        };

        $scope.checktimeZonefunc = function(name)
        {
            if($scope.checktimeZonevar === "YES")
                $scope.checktimeZonevar = 'NO';
            else
                $scope.checktimeZonevar = 'YES';
            //console.log(name);
        };



    }]);

iftttApp.controller('customWeatherActionControllerTrigger2', ['$scope', '$rootScope', '$routeParams', '$http', '$location',
    function ($scope, $rootscope, $routeParams, $http, $resource, $location)
    {
        $scope.trigger1input = {
            value1: 0,
            value2: 0,
            value3: 0,
            value4: 0
        };



        $scope.data =
        {
            availableOptions:
                [
                        {id: '200', name: 'thunderstorm with light rain'},
                        {id: '300', name: 'light intensity drizzle'},
                        {id: '500', name: '500	light rain'}
                    ],
                    selectedOption: {id: '200', name: 'thunderstorm with light rain'} //This sets the default value of the select in the ui

        }

        /* Code available --> http://openweathermap.org/weather-conditions

         Weather condition codes

         Group 2xx: Thunderstorm
         ID	Meaning	Icon
         200	thunderstorm with light rain	 11d
         201	thunderstorm with rain	 11d
         202	thunderstorm with heavy rain	 11d
         210	light thunderstorm	 11d
         211	thunderstorm	 11d
         212	heavy thunderstorm	 11d
         221	ragged thunderstorm	 11d
         230	thunderstorm with light drizzle	 11d
         231	thunderstorm with drizzle	 11d
         232	thunderstorm with heavy drizzle	 11d

         Group 3xx: Drizzle
         ID	Meaning	Icon
         300	light intensity drizzle	 09d
         301	drizzle	 09d
         302	heavy intensity drizzle	 09d
         310	light intensity drizzle rain	 09d
         311	drizzle rain	 09d
         312	heavy intensity drizzle rain	 09d
         313	shower rain and drizzle	 09d
         314	heavy shower rain and drizzle	 09d
         321	shower drizzle	 09d

         Group 5xx: Rain
         ID	Meaning	Icon
         500	light rain	 10d
         501	moderate rain	 10d
         502	heavy intensity rain	 10d
         503	very heavy rain	 10d
         504	extreme rain	 10d
         511	freezing rain	 13d
         520	light intensity shower rain	 09d
         521	shower rain	 09d
         522	heavy intensity shower rain	 09d
         531	ragged shower rain	 09d

         Group 6xx: Snow
         ID	Meaning	Icon
         600	light snow	[[file:13d.png]]
         601	snow	[[file:13d.png]]
         602	heavy snow	[[file:13d.png]]
         611	sleet	[[file:13d.png]]
         612	shower sleet	[[file:13d.png]]
         615	light rain and snow	[[file:13d.png]]
         616	rain and snow	[[file:13d.png]]
         620	light shower snow	[[file:13d.png]]
         621	shower snow	[[file:13d.png]]
         622	heavy shower snow	[[file:13d.png]]

         Group 7xx: Atmosphere
         ID	Meaning	Icon
         701	mist	[[file:50d.png]]
         711	smoke	[[file:50d.png]]
         721	haze	[[file:50d.png]]
         731	sand, dust whirls	[[file:50d.png]]
         741	fog	[[file:50d.png]]
         751	sand	[[file:50d.png]]
         761	dust	[[file:50d.png]]
         762	volcanic ash	[[file:50d.png]]
         771	squalls	[[file:50d.png]]
         781	tornado	[[file:50d.png]]

         Group 800: Clear
         ID	Meaning	Icon
         800	clear sky	[[file:01d.png]] [[file:01n.png]]
         Group 80x: Clouds
         ID	Meaning	Icon
         801	few clouds	[[file:02d.png]] [[file:02n.png]]
         802	scattered clouds	[[file:03d.png]] [[file:03d.png]]
         803	broken clouds	[[file:04d.png]] [[file:03d.png]]
         804	overcast clouds	[[file:04d.png]] [[file:04d.png]]

         Group 90x: Extreme
         ID	Meaning
         900	tornado
         901	tropical storm
         902	hurricane
         903	cold
         904	hot
         905	windy
         906	hail

         Group 9xx: Additional
         ID	Meaning
         951	calm
         952	light breeze
         953	gentle breeze
         954	moderate breeze
         955	fresh breeze
         956	strong breeze
         957	high wind, near gale
         958	gale
         959	severe gale
         960	storm
         961	violent storm
         962	hurricane



         */



    }]);


iftttApp.controller('customWeatherActionControllerTrigger3', ['$scope', '$rootScope', '$routeParams', '$http', '$location',
    function ($scope, $rootscope, $routeParams, $http, $resource, $location)
    {
        $scope.trigger1input = {
            value3: 0
        };




        $scope.checkadvisesunsetvar = 'NO';
        $scope.checkadvisetsunrisevar = 'NO';
        $scope.checktimeZonevar = 'NO';

        $scope.checkadvisesunrisefunc = function(name)
        {
            if($scope.checkadvisetsunrisevar === "YES")
                $scope.checkadvisetsunrisevar = 'NO';
            else
                $scope.checkadvisetsunrisevar = 'YES';
            //console.log(name);
        };

        $scope.checkadvisetsunsetfunc = function(name)
        {
            if($scope.checkadvisesunsetvar === "YES")
                $scope.checkadvisesunsetvar = 'NO';
            else
                $scope.checkadvisesunsetvar = 'YES';
            //console.log(name);
        };

        $scope.checktimeZonefunc = function(name)
        {
            if($scope.checktimeZonevar === "YES")
                $scope.checktimeZonevar = 'NO';
            else
                $scope.checktimeZonevar = 'YES';
            //console.log(name);
        };




    }]);


iftttApp.controller('customWeatherActionControllerTrigger4', ['$scope', '$rootScope', '$routeParams', '$http', '$location',
    function ($scope, $rootscope, $routeParams, $http, $resource, $location)
    {
        $scope.trigger1input = {
            value1: 0,
            value2: 0,
            value3: 0,
            value4: 0
        };

    }]);

// loginPageController
iftttApp.controller('loginPageController',  ['$scope', '$routeParams',
    function ($scope, $rootscope, $routeParams, $http, $resource) {

        $scope.loginfunc = function(pass, email)
        {
            if (angular.isDefined(email) && angular.isDefined(pass))
            {
                var loginDataSend =
                {
                    "password:": pass,
                    "email:": email
                };
                //console.log(loginDataSend.pssword);
                $.ajax({
                    method: "post",
                    url: "/MyServlet",
                    data: loginDataSend,
                    dataType: "json",
                    success: console.log("la post ha avuto successo ")
                });
            }
        }

    }]);


//Update
iftttApp.controller('Trigger1GcalendarController', ['$scope', '$rootScope', '$routeParams', '$http', '$location',
    function ($scope, $rootscope, $routeParams, $http, $resource, $location)
    {

        $scope.trigger1GcalendarVar = [];
        $scope.trigger1Gcalendar = function()
        {
            triggerChose = 2;
            var title;
            var subject;
            var place;


            if($scope.checkedtitle == true ||  $scope.checkedSubject == true ||  $scope.checkedplace == true) {

                //First variable
                if ($scope.checkedtitle == true) {
                    if (angular.isDefined($scope.trigger1GcalendarVar)) {
                        if (angular.isDefined($scope.trigger1GcalendarVar.title)) {
                            title = $scope.trigger1GcalendarVar.title;
                        }
                        else {
                            title = "";
                        }
                    }
                    else {
                        title = "";
                    }
                }
                else {
                    title = "null";
                }

                //Second variable
                if ($scope.checkedSubject == true) {
                    if (angular.isDefined($scope.trigger1GcalendarVar)) {
                        if (angular.isDefined($scope.trigger1GcalendarVar.subjectReceive)) {
                            subject = $scope.trigger1GcalendarVar.subjectReceive;
                        }
                        else {
                            subject = "";
                        }
                    }
                    else {
                        subject = "";
                    }

                }
                else {
                    subject = "null";
                }

                //Third variable
                if ($scope.checkedplace == true) {
                    if (angular.isDefined($scope.trigger1GcalendarVar)) {
                        if (angular.isDefined($scope.trigger1GcalendarVar.place)) {
                            place = $scope.trigger1GcalendarVar.place;
                        }
                        else {
                            place = "";
                        }
                    }
                    else {
                        place = "";
                    }

                }
                else {
                    place = "null";
                }

                title_Trigger1GcalendarController = title;
                description_Trigger1GcalendarController = subject;
                place_Trigger1GcalendarController = place;


                flagTriggerDone = "1";
                url = "#createRecipeAction";
                window.location.replace(url);
            }
            else
            {
                //url = "#Trigger1Gcalendar";
                //window.location.replace(url);

            }
            /*
            var loginDataSend =
            {
                title : title_Trigger1GcalendarController,
                description: description_Trigger1GcalendarController,
                place: place_Trigger1GcalendarController
            }
            $.ajax
            ({
                method: "post",
                url: "/MyServlet",
                data: loginDataSend,
                dataType: "json",
                success: console.log("la post ha avuto successo")
            });
            */

        };


        $scope.checkedtitle = false;
        $scope.checkedSubject= false;
        $scope.checkedplace=false;



}]);



iftttApp.controller('Trigger2GcalendarController', ['$scope', '$rootScope', '$routeParams', '$http', '$location',
    function ($scope, $rootscope, $routeParams, $http, $resource, $location)
    {

        $scope.trigger2GcalendarVar = [];
        $scope.trigger2Gcalendar = function() {
            triggerChose = 3;
            var title;
            var subject;
            var place;

            if( $scope.checkedtitle == true || $scope.checkedSubject == true || $scope.checkedplace == true)
            {

                //first variable
                if ($scope.checkedtitle == true) {
                    if (angular.isDefined($scope.trigger2GcalendarVar)) {
                        if (angular.isDefined($scope.trigger2GcalendarVar.title)) {
                            title = $scope.trigger2GcalendarVar.title;
                        }
                        else {
                            title = "";
                        }
                    }
                    else {
                        title = "";
                    }

                }
                else {
                    title = "null";
                }

                //second variable
                if ($scope.checkedSubject == true) {
                    if (angular.isDefined($scope.trigger2GcalendarVar)) {
                        if (angular.isDefined($scope.trigger2GcalendarVar.subject)) {
                            subject = $scope.trigger2GcalendarVar.subject;
                        }
                        else {
                            subject = "";
                        }
                    }
                    else {
                        subject = "";
                    }

                }
                else {
                    subject = "null";
                }


                //third variable
                if ($scope.checkedplace == true) {
                    if (angular.isDefined($scope.trigger2GcalendarVar)) {
                        if (angular.isDefined($scope.trigger2GcalendarVar.place)) {
                            place = $scope.trigger2GcalendarVar.place;
                        }
                        else {
                            place = "";
                        }
                    }
                    else {
                        place = "";
                    }

                }
                else {
                    place = "null";
                }

                flagTriggerDone = "1";
                title_Trigger2GcalendarController = title;
                description_Trigger2GcalendarController = subject;
                place_Trigger2GcalendarController = place;

                url = "#createRecipeAction";
                window.location.replace(url);

            }
            else
            {
                //url = "#createRecipeAction";
                //window.location.replace(url);
            }
            /*
             var loginDataSend =
             {
             "eventAction": 1,
             "title": title,
             "description": subject,
             "location": place

             };

             $scope.sedingServer(loginDataSend);
             */


        };


        $scope.sedingServer = function(loginDataSend)
        {
            $.ajax({
                method: "post",
                url: "/MyServlet",
                data: loginDataSend,
                dataType: "json",
                success: console.log("la post ha avuto successo n 9")
            });
        };

        $scope.checkedtitle = false;
        $scope.checkedSubject= false;
        $scope.checkedplace=false;



    }]);


iftttApp.controller('action1GcalendarController', ['$scope', '$rootScope', '$routeParams', '$http', '$location',
    function ($scope, $rootscope, $routeParams, $http, $resource, $location) {


        $scope.gcalendarinput = [];
        //gcalendarinput,  yearVector, monthVector, dayVector
        $scope.actiongcalendar = function(yearVector, monthVector, dayVector) {
            var title = "";
            var subjectReceive = "";
            var place = "";
            var  yearVector = "";
            var monthVector = "";
            var dayVector = "";
            var flag = "1";

            actionChose =  2;

            if (($scope.checkedtitle == true ||
                $scope.checkedSubject == true ||
                $scope.checkedplace == true    ||
                $scope.checkdata == true) && googleLogin == "1")
            {


                if ($scope.checkedtitle == true) {
                    if (angular.isDefined($scope.gcalendarinput)) {
                        if (angular.isDefined($scope.gcalendarinput.title)) {
                            title = $scope.gcalendarinput.title;
                        }
                        else {
                            title = "";
                        }
                    }
                    else {
                        title = "";
                    }

                }
                else {
                    title = "null";
                }

                //Second variable
                if ($scope.checkedSubject == true) {
                    if (angular.isDefined($scope.gcalendarinput)) {
                        if (angular.isDefined($scope.gcalendarinput.subjectReceive)) {
                            subjectReceive = $scope.gcalendarinput.subjectReceive;
                        }
                        else {
                            subjectReceive = "";
                        }
                    }
                    else {
                        subjectReceive = "";
                    }

                }
                else {
                    subjectReceive = "null";
                }

                //Third variable
                if ($scope.checkedplace == true) {
                    if (angular.isDefined($scope.gcalendarinput)) {
                        if (angular.isDefined($scope.gcalendarinput.place)) {
                            place = $scope.gcalendarinput.place;
                        }
                        else {
                            place = "";
                        }
                    }
                    else {
                        place = "";
                    }

                }
                else {
                    place = "null";
                }


                //Fourth variable
                if ($scope.checkdata == true)
                {
                    if (angular.isDefined($scope.gcalendarinput))
                    {
                        dayVector = $('#selectDay').val();
                        yearVector = $('#selectYear').val();
                        monthVector = $('#selectMonth').val();
                    }

                        else
                        {
                            place = "null";
                            dayVector = "null";
                            yearVector = "null";
                            monthVector = "null";
                            flag=0;
                        }



                }
                else {
                    place = "null";
                    dayVector = "null";
                    yearVector = "null";
                    monthVector = "null";
                    flag=0;
                }



                title_action1GcalendarController = title;
                subjectReceive_action1GcalendarController = subjectReceive;
                place_action1GcalendarController = place;
                yearVector_action1GcalendarController = dayVector;
                monthVector_action1GcalendarController = monthVector;
                dayVector_action1GcalendarController = yearVector;



                if (flag == "1")
                {
                    if (monthVector === "1" ||
                        monthVector === "3" ||
                        monthVector === "5" ||
                        monthVector === "7" ||
                        monthVector === "8" ||
                        monthVector === "10" ||
                        monthVector === "12") {
                        if (dayVector > "0" && dayVector < "32");
                        else {
                            flag = "3";
                            console.log("Your date is not right plase verify the day");
                        }
                    }
                    if (monthVector === "2" ||
                        monthVector === "4" ||
                        monthVector === "6" ||
                        monthVector === "9" ||
                        monthVector === "11")
                    {
                        if (dayVector > "0" && dayVector < "31");
                        else
                        {
                            flag = "3";
                            console.log("Your date is not right plase verify the day");
                        }

                    }
                    //Anni bisestili
                    if (yearVector === "2016" ||
                        yearVector === "2020" ||
                        yearVector === "2024" ||
                        yearVector === "2028" ||
                        yearVector === "2032" ||
                        yearVector === "2036" ||
                        yearVector === "2040" ||
                        yearVector === "2044"
                    ) {
                        if (monthVector === "2")
                            if (dayVector > 28) {
                                flag = "3";
                                console.log("Thi is a leap year");
                            }


                    }

                    if(monthVector == "2" && dayVector >29 && flag != "3")
                    {
                        console.log("Febrary has not " + dayVector + " days, please check" );
                        flag = "3";
                    }

                }

                if (flag != "3") {
                    flagTriggerDone = "0";
                    count=7;
                    sendingToServerAll();
                    url = "#gMailSucces";
                    window.location.replace(url);
                }

            }
            else
            {
                alert("You are not logged in google");
                url = "#createDO";
                window.location.replace(url);
            }



        };





        $scope.yearVector =
        {
            availableOptions:
                [
                    {id: '2016', year: '2016'},
                    {id: '2017', year: '2017'},
                    {id: '2018', year: '2018'},
                    {id: '2019', year: '2019'},
                    {id: '2020', year: '2020'},
                    {id: '2021', year: '2021'},
                    {id: '2022', year: '2022'},
                    {id: '2023', year: '2023'},
                    {id: '2024', year: '2024'},
                    {id: '2025', year: '2025'},
                    {id: '2026', year: '2026'},
                    {id: '2027', year: '2027'},
                    {id: '2028', year: '2028'},
                    {id: '2029', year: '2029'},
                    {id: '2030', year: '2030'},
                    {id: '2031', year: '2031'},
                    {id: '2032', year: '2032'},
                    {id: '2033', year: '2033'},
                    {id: '2034', year: '2034'},
                    {id: '2035', year: '2035'},
                    {id: '2036', year: '2036'},
                    {id: '2037', year: '2037'},
                    {id: '2038', year: '2038'},
                    {id: '2039', year: '2039'},
                    {id: '2040', year: '2040'},
                    {id: '2041', year: '2041'},
                    {id: '2042', year: '2042'},
                    {id: '2043', year: '2043'},
                    {id: '2044', year: '2044'},
                    {id: '2045', year: '2045'}

                ],
            selectedOption: {id: '2016', year: '2016'}

        };





        $scope.monthVector =
        {
            availableOptions:
                [
                    {id: '1', month: 'January'},
                    {id: '2', month: 'February'},
                    {id: '3', month: 'March'},
                    {id: '4', month: 'April'},
                    {id: '5', month: 'May'},
                    {id: '6', month: 'June'},
                    {id: '7', month: 'July'},
                    {id: '8', month: 'August'},
                    {id: '9', month: 'September'},
                    {id: '10', month: 'October'},
                    {id: '11', month: 'November'},
                    {id: '12', month: 'December'}
                ],
            selectedOption: {id: '1', month: 'January'} //This sets the default value of the select in the ui

        };







        $scope.dayVector =
        {
            availableOptions:
                [
                    {id: '1', day: '1°'},
                    {id: '2', day: '2°'},
                    {id: '3', day: '3°'},
                    {id: '4', day: '4°'},
                    {id: '5', day: '5°'},
                    {id: '6', day: '6°'},
                    {id: '7', day: '7°'},
                    {id: '8', day: '8°'},
                    {id: '9', day: '9°'},
                    {id: '10', day: '10°'},
                    {id: '11', day: '11°'},
                    {id: '12', day: '12°'},
                    {id: '13', day: '13°'},
                    {id: '14', day: '14°'},
                    {id: '15', day: '15°'},
                    {id: '16', day: '16°'},
                    {id: '17', day: '17°'},
                    {id: '18', day: '18°'},
                    {id: '19', day: '19°'},
                    {id: '20', day: '20°'},
                    {id: '21', day: '21°'},
                    {id: '22', day: '22°'},
                    {id: '23', day: '23°'},
                    {id: '24', day: '24°'},
                    {id: '25', day: '25°'},
                    {id: '26', day: '26°'},
                    {id: '27', day: '27°'},
                    {id: '28', day: '28°'},
                    {id: '29', day: '29°'},
                    {id: '30', day: '30°'},
                    {id: '31', day: '31°'}
                ],
            selectedOption: {id: '1', day: '1°'}

        };

        $scope.checkedtitle = false;
        $scope.checkedSubject = false;
        $scope.checkedplace = false;
        $scope.checkdata = false;






//action1GcalendarController

    }]);





iftttApp.controller('trigger1TwitterController', ['$scope', '$rootScope', '$routeParams', '$http', '$location',
    function ($scope, $rootscope, $routeParams, $http, $resource, $location)
    {

        $scope.trigger1TwitterInput = [];
        $scope.iftttLoginP = iftttLogin;

        $scope.trigger1Twitterfunc = function()
        {
            triggerChose=4;
            var title;
            var subject;

            if( ($scope.checkedtitle == true  ||  $scope.checkedSubject == true) && twitterLogin=="1")
            {

                //First variable
                if ($scope.checkedtitle == true) {
                    if (angular.isDefined($scope.trigger1TwitterInput)) {
                        if (angular.isDefined($scope.trigger1TwitterInput.title)) {
                            title = $scope.trigger1TwitterInput.title;
                        }
                        else {
                            title = "";
                        }
                    }
                    else {
                        title = "";
                    }

                }
                else {
                    title = "null";
                }


                //Second variable
                if ($scope.checkedSubject == true) {
                    if (angular.isDefined($scope.trigger1TwitterInput)) {
                        if (angular.isDefined($scope.trigger1TwitterInput.subjectReceive)) {
                            subject = $scope.trigger1TwitterInput.subjectReceive;
                        }
                        else {
                            subject = "";
                        }
                    }
                    else {
                        subject = "";
                    }

                }
                else {
                    subject = "null";
                }

                flagTriggerDone = "1";

                username_sender_trigger1TwitterController = title;
                hashtag_text_trigger1TwitterController = subject;

                url = "#createRecipeAction";
                window.location.replace(url);
            }
            if(twitterLogin == "0")
            {
                alert("You are not logged in twitter");
                url = "#allTriggers";
                window.location.replace(url);
            }



        };


        $scope.checkedtitle = false;
        $scope.checkedSubject= false;
        $scope.checkedplace=false;

    }]);






iftttApp.controller('trigger2TwitterController', ['$scope', '$rootScope', '$routeParams', '$http', '$location',
    function ($scope, $rootscope, $routeParams, $http, $resource, $location)
    {
        $scope.trigger2TwitterInput = [];

        $scope.trigger2Twitterfunc = function() {
            triggerChose = 5;
            var title;
            var subject;


            if (($scope.checkedtitle == true || $scope.checkedSubject == true) && twitterLogin == "1")
            {

                if ($scope.checkedtitle == true) {
                    if (angular.isDefined($scope.trigger2TwitterInput)) {
                        if (angular.isDefined($scope.trigger2TwitterInput.title)) {
                            title = $scope.trigger2TwitterInput.title;
                        }
                        else {
                            title = "";
                        }
                    }
                    else {
                        title = "";
                    }

                }
                else {
                    title = "null";
                }




                if ($scope.checkedSubject == true) {
                    if (angular.isDefined($scope.trigger2TwitterInput)) {
                        if (angular.isDefined($scope.trigger2TwitterInput.subjectReceive)) {
                            subject = $scope.trigger2TwitterInput.subjectReceive;
                        }
                        else {
                            subject = "";
                        }
                    }
                    else {
                        subject = "";
                    }

                }
                else {
                    subject = "null";
                }

                flagTriggerDone = "1";
                username_sender_trigger2TwitterController = title;
                hashtag_text_trigger2TwitterController = subject;
                url = "#createRecipeAction";
                window.location.replace(url);
            }

            if(twitterLogin == "0")
            {
                alert("You are not logged in twitter");
                url = "#allTriggers";
                window.location.replace(url);
            }





        };


        $scope.checkedtitle = false;
        $scope.checkedSubject= false;
        $scope.checkedplace=false;


    }]);






iftttApp.controller('action1TwitterController', ['$scope', '$rootScope', '$routeParams', '$http', '$location',
    function ($scope, $rootscope, $routeParams, $http, $resource, $location)
    {

        $scope.action1TwitterInput = [];
        $scope.twitterAction1func = function()
        {
            actionChose = 3;

            var subject;


            if ( $scope.checkedSubject == true  && twitterLogin == "1")
            {

                if ($scope.checkedSubject == true) {
                    if (angular.isDefined($scope.action1TwitterInput)) {
                        if (angular.isDefined($scope.action1TwitterInput.subjectReceive)) {
                            subject = $scope.action1TwitterInput.subjectReceive;
                        }
                        else {
                            subject = "";
                        }
                    }
                    else {
                        subject = "";
                    }

                }
                else {
                    subject = "null";
                }

                flagTriggerDone = "0";
                count=7;

                subject_action1TwitterController = subject;
                sendingToServerAll();
                //href="#SuccessTwitter"
                var url = "#SuccessTwitter";
                window.location.replace(url);
            }

            if(twitterLogin == "0")
            {
                alert("You are not logged in twitter");
                url = "#createDO";
                window.location.replace(url);
            }




        };

        /*
        $scope.sedingServer = function(loginDataSend)
        {
            $.ajax({
                method: "post",
                url: "/MyServlet",
                data: loginDataSend,
                dataType: "json",
                success: console.log("la post ha avuto successo n 9")
            });
        };
        */

        $scope.checkedtitle = false;
        $scope.checkedSubject= false;
        $scope.checkedplace=false;









    }]);

//action2TwitterController


iftttApp.controller('action2TwitterController', ['$scope', '$rootScope', '$routeParams', '$http', '$location',
    function ($scope, $rootscope, $routeParams, $http, $resource, $location)
    {

        $scope.action2TwitterInput = [];
        $scope.action2Twitterfunc = function()
        {

            actionChose = 4;
            var title;
            var subject;

            if(($scope.checkedtitle == true ||  $scope.checkedSubject== true)  && twitterLogin == "1")
            {


                    if ($scope.checkedtitle == true) {
                        if (angular.isDefined($scope.action2TwitterInput)) {
                            if (angular.isDefined($scope.action2TwitterInput.subjectReceive)) {
                                title = $scope.action2TwitterInput.title;
                            }
                            else {
                                title = "";
                            }
                        }
                        else {
                            title = "";
                        }

                    }
                    else {
                        title = "null";
                    }


                    if ($scope.checkedSubject == true) {
                        if (angular.isDefined($scope.action2TwitterInput)) {
                            if (angular.isDefined($scope.action2TwitterInput.subjectReceive)) {
                                subject = $scope.action2TwitterInput.subjectReceive;
                            }
                            else {
                                subject = "";
                            }
                        }
                        else {
                            subject = "";
                        }

                    }
                    else {
                        subject = "null";
                    }


                title_action2TwitterController = title;
                subjec_action2TwitterController = subject;
                sendingToServerAll();
                flagTriggerDone = "0";
                count=7;
                // href="#SuccessTwitter"
                url = "#SuccessTwitter";
                window.location.replace(url);


            }
            if(twitterLogin == "0")
            {
                alert("You are not logged in twitter");
                url = "#createDO";
                window.location.replace(url);
            }




        };

        /*

        $scope.sedingServer = function(loginDataSend)
        {
            $.ajax({
                method: "post",
                url: "/MyServlet",
                data: loginDataSend,
                dataType: "json",
                success: console.log("la post ha avuto successo n 9")
            });
        };
        */

        $scope.checkedtitle = false;
        $scope.checkedSubject= false;



    }]);

function sendingToServerAll ()
{
    /*
    var triggerChose = 0;
    var actionChose =  0;

    GmailTriggerController  n 1
    var sender_GmailTriggerController = "";
    var subject_GmailTriggerController = "";

     GmailActionController  n 1
    var sender_GmailActionController = "";
    var subject_GmailActionController = "";

    Trigger1GcalendarController n 2
    var title_Trigger1GcalendarController = "";
    var description_Trigger1GcalendarController = "";
    var place_Trigger1GcalendarController = "";

    Trigger2GcalendarController n 3
    var title_Trigger2GcalendarController = "";
    var description_Trigger2GcalendarController = "";
    var place_Trigger2GcalendarController = "";
     */

    //Tn 9
    //An 4

    if(triggerChose==1 && actionChose == 1) {
        var loginDataSend = {
        /*
         {
         "triggerType": "gmail",
         "trigger" :
         {
         "sender": sender_GmailTriggerController,
         "subject": subject_GmailTriggerController,
         "action" :
         {
         "actionType" : "gmail",
         "sender" : sender_GmailActionController,
         "subject" : subject_GmailActionController
         }
         },
         */

        "tritterType" : "gmail",
            "trigger" : {

                //Tn 1
                "person": sender_GmailTriggerController,
                "subject": subject_GmailTriggerController,

                "action": {
                    //An 1
                    "sender": sender_GmailActionController,
                    "subject": subject_GmailActionController,
                    "receiver": receiver_GmailActionController,
                    "body": body_GmailActionController

                }
            }

    };


        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==1 && actionChose == 2)
    {
        var loginDataSend =
        {
            //Tn 1
            "person": sender_GmailTriggerController,
            "subject": subject_GmailTriggerController,

            //An 2
            "title" : title_action1GcalendarController,
            "subjectReceive" : subjectReceive_action1GcalendarController,
            "place" : place_action1GcalendarController,
            "dayVector" : yearVector_action1GcalendarController,
            "monthVector" : monthVector_action1GcalendarController,
            "yearVector" : dayVector_action1GcalendarController


        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==1 && actionChose == 3)
    {
        var loginDataSend =
        {
            //Tn 1
            "person": sender_GmailTriggerController,
            "subject": subject_GmailTriggerController,

            //An 3
            "subject" : subject_action1TwitterController



        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==1 && actionChose == 4)
    {
        var loginDataSend =
        {
            //Tn 1
            "person": sender_GmailTriggerController,
            "subject": subject_GmailTriggerController,

            //An 4
            "title" : title_action2TwitterController,
            "subject" : subjec_action2TwitterController




        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose == 2 && actionChose == 1)
    {
        var loginDataSend =
        {
            //Tn 2
           "title" : title_Trigger1GcalendarController,
            "description" : description_Trigger1GcalendarController,
            "place" : place_Trigger1GcalendarController,

            //An 1
            "sender" : sender_GmailActionController,
            "subject" : subject_GmailActionController



        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==2 && actionChose == 2)
        // Fare una prova per credere O.o nel json non ci possono essere due campi uguali
    {
        var loginDataSend =
        {
            //Tn 2
            "title1" : title_Trigger1GcalendarController,
            "description1" : description_Trigger1GcalendarController,
            "place1" : place_Trigger1GcalendarController,

            //An 2
            "title" : title_action1GcalendarController,
            "subjectReceive" : subjectReceive_action1GcalendarController,
            "place" : place_action1GcalendarController,
            "dayVector" : yearVector_action1GcalendarController,
            "monthVector" : monthVector_action1GcalendarController,
            "yearVector" : dayVector_action1GcalendarController
        };
        //console.log("ss");
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==2 && actionChose == 3)
    {
        var loginDataSend =
        {
            //Tn 2
            "title" : title_Trigger1GcalendarController,
            "description" : description_Trigger1GcalendarController,
            "place" : place_Trigger1GcalendarController,

            //An 3
            "subject" : subject_action1TwitterController



        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==2 && actionChose == 4)
    {
        var loginDataSend =
        {
            //Tn 2
            "title" : title_Trigger1GcalendarController,
            "description" : description_Trigger1GcalendarController,
            "place" : place_Trigger1GcalendarController,

            //An 4
            "title" : title_action2TwitterController,
            "subject" : subjec_action2TwitterController



        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==3 && actionChose == 1)
    {
        var loginDataSend =
        {
            //Tn 3
            "title" : title_Trigger2GcalendarController,
            "description" : description_Trigger2GcalendarController,
            "place" : place_Trigger2GcalendarController,

            //An 1
            "sender" : sender_GmailActionController,
            "subject" : subject_GmailActionController



        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==3 && actionChose == 2)
    {
        var loginDataSend =
        {
            //Tn 3
            "title" : title_Trigger2GcalendarController,
            "description" : description_Trigger2GcalendarController,
            "place" : place_Trigger2GcalendarController,

            //An 2
            "title" : title_action1GcalendarController,
            "subjectReceive" : subjectReceive_action1GcalendarController,
            "place" : place_action1GcalendarController,
            "dayVector" : yearVector_action1GcalendarController,
            "monthVector" : monthVector_action1GcalendarController,
            "yearVector" : dayVector_action1GcalendarController



        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==3 && actionChose == 3)
    {
        var loginDataSend =
        {
            //Tn 3
            "title" : title_Trigger2GcalendarController,
            "description" : description_Trigger2GcalendarController,
            "place" : place_Trigger2GcalendarController,

            //An 3
            "subject" : subject_action1TwitterController


        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==3 && actionChose == 4)
    {
        var loginDataSend =
        {
            //Tn 3
            "title" : title_Trigger2GcalendarController,
            "description" : description_Trigger2GcalendarController,
            "place" : place_Trigger2GcalendarController,

            //An 4
            "title" : title_action2TwitterController,
            "subject" : subjec_action2TwitterController





        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==4 && actionChose == 1)
    {
        var loginDataSend =
        {
            //Tn 4
            "username" : username_sender_trigger1TwitterController,
            "hashtag_text" : hashtag_text_trigger1TwitterController,

            //An 1
            "sender" : sender_GmailActionController,
            "subject" : subject_GmailActionController



        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose == 4 && actionChose == 2)
    {

        var loginDataSend =
        {
            //Tn 4
            "username" : username_sender_trigger1TwitterController,
            "hashtag_text" : hashtag_text_trigger1TwitterController,

            //An 2
            "title" : title_action1GcalendarController,
            "subjectReceive" : subjectReceive_action1GcalendarController,
            "place" : place_action1GcalendarController,
            "dayVector" : yearVector_action1GcalendarController,
            "monthVector" : monthVector_action1GcalendarController,
            "yearVector" : dayVector_action1GcalendarController



        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==4 && actionChose == 3)
    {
        var loginDataSend =
        {
            //Tn 4
            "username" : username_sender_trigger1TwitterController,
            "hashtag_text" : hashtag_text_trigger1TwitterController,

            //An 3
            "subject" : subject_action1TwitterController

        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==4 && actionChose == 4)
    {
        var loginDataSend =
        {
            //Tn 4
            "username" : username_sender_trigger1TwitterController,
            "hashtag_text" : hashtag_text_trigger1TwitterController,

            //An 4
            "title" : title_action2TwitterController,
            "subject" : subjec_action2TwitterController



        };

        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==5 && actionChose == 1)
    {
        var loginDataSend =
        {
            //Tn 5
            "username_sender" : username_sender_trigger2TwitterController,
            "hashtag_text" : hashtag_text_trigger2TwitterController,

            //An 1
            "sender" : sender_GmailActionController,
            "subject" : subject_GmailActionController



        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==5 && actionChose == 2)
    {
        var loginDataSend =
        {
            //Tn 5
            "username_sender" : username_sender_trigger2TwitterController,
            "hashtag_text" : hashtag_text_trigger2TwitterController,

            //An 2
            "title" : title_action1GcalendarController,
            "subjectReceive" : subjectReceive_action1GcalendarController,
            "place" : place_action1GcalendarController,
            "dayVector" : yearVector_action1GcalendarController,
            "monthVector" : monthVector_action1GcalendarController,
            "yearVector" : dayVector_action1GcalendarController



        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==5 && actionChose == 3)
    {
        var loginDataSend =
        {
            //Tn 5
            "username_sender" : username_sender_trigger2TwitterController,
            "hashtag_text" : hashtag_text_trigger2TwitterController,

            //An 3
            "subject" : subject_action1TwitterController


        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==5 && actionChose == 4)
    {
        var loginDataSend =
        {
            //Tn 5
            "username_sender" : username_sender_trigger2TwitterController,
           "hashtag_text" : hashtag_text_trigger2TwitterController,

            //An 4
            "title" : title_action2TwitterController,
            "subject" : subjec_action2TwitterController


        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==6 && actionChose == 1)
    {
        var loginDataSend =
        {
            //Tn 6
            "idCity"  :  idCity_customWeatherActionControllerTrigger1,
            "timezone" : timezone_customWeatherActionControllerTrigger1,
            "ora" : ora_customWeatherActionControllerTrigger1,

            //An 1
            "sender" : sender_GmailActionController,
            "subject" : subject_GmailActionController


        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==6 && actionChose == 2)
    {
        var loginDataSend =
        {
            //Tn 6
            "idCity"  :  idCity_customWeatherActionControllerTrigger1,
            "timezone" : timezone_customWeatherActionControllerTrigger1,
            "ora" : ora_customWeatherActionControllerTrigger1,

            //An 2
            "title" : title_action1GcalendarController,
            "subjectReceive" : subjectReceive_action1GcalendarController,
            "place" : place_action1GcalendarController,
            "dayVector" : yearVector_action1GcalendarController,
            "monthVector" : monthVector_action1GcalendarController,
            "yearVector" : dayVector_action1GcalendarController


        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==6 && actionChose == 3)
    {
        var loginDataSend =
        {
            //Tn 6
            "idCity"  :  idCity_customWeatherActionControllerTrigger1,
            "timezone" : timezone_customWeatherActionControllerTrigger1,
            "ora" : ora_customWeatherActionControllerTrigger1,

            //An 3
            "subject" : subject_action1TwitterController


        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==6 && actionChose == 4)
    {
        var loginDataSend =
        {
            //Tn 6
            "idCity"  :  idCity_customWeatherActionControllerTrigger1,
            "timezone" : timezone_customWeatherActionControllerTrigger1,
            "ora" : ora_customWeatherActionControllerTrigger1,

            //An 4
            "title" : title_action2TwitterController,
            "subject" : subjec_action2TwitterController

        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==7 && actionChose == 1)
    {
        var loginDataSend =
        {
            //Tn 7
            "idCity" : idCity_customWeatherActionControllerTrigger2,
            "pweather" :pweather_customWeatherActionControllerTrigger2,
            "pperiod" : pperiod_customWeatherActionControllerTrigger2,
            "pzone"   : pzone_customWeatherActionControllerTrigger2,

            //An 1
            "sender" : sender_GmailActionController,
            "subject" : subject_GmailActionController



        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==7 && actionChose == 2)
    {
        var loginDataSend =
        {
            //Tn 7
            "idCity" : idCity_customWeatherActionControllerTrigger2,
            "pweather" :pweather_customWeatherActionControllerTrigger2,
            "pperiod" : pperiod_customWeatherActionControllerTrigger2,
            "pzone"   : pzone_customWeatherActionControllerTrigger2,

            //An 2
            "title" : title_action1GcalendarController,
            "subjectReceive" : subjectReceive_action1GcalendarController,
            "place" : place_action1GcalendarController,
            "dayVector" : yearVector_action1GcalendarController,
            "monthVector" : monthVector_action1GcalendarController,
            "yearVector" : dayVector_action1GcalendarController



        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==7 && actionChose == 3)
    {
        var loginDataSend =
        {
            //Tn 7
            "idCity" : idCity_customWeatherActionControllerTrigger2,
            "pweather" :pweather_customWeatherActionControllerTrigger2,
            "pperiod" : pperiod_customWeatherActionControllerTrigger2,
            "pzone"   : pzone_customWeatherActionControllerTrigger2,

            //An 3
            "subject" : subject_action1TwitterController

        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==7 && actionChose == 4)
    {
        var loginDataSend =
        {
            //Tn 7
            "idCity" : idCity_customWeatherActionControllerTrigger2,
            "pweather" :pweather_customWeatherActionControllerTrigger2,
            "pperiod" : pperiod_customWeatherActionControllerTrigger2,
            "pzone"   : pzone_customWeatherActionControllerTrigger2,

            //An 4
            "title" : title_action2TwitterController,
            "subject" : subjec_action2TwitterController




        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==8 && actionChose == 1)
    {
        var loginDataSend =
        {
            // Tn 8
            "idCity" : idCity_customWeatherActionControllerTrigger3,
            "timezone": timezone_customWeatherActionControllerTrigger3,
            "sunset" : sunset_customWeatherActionControllerTrigger3,
            "sunrise" :  sunrise_customWeatherActionControllerTrigger3,

            //An 1
            "sender" : sender_GmailActionController,
            "subject" : subject_GmailActionController


        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==8 && actionChose == 2)
    {
        var loginDataSend =
        {
            // Tn 8
            "idCity" : idCity_customWeatherActionControllerTrigger3,
            "timezone": timezone_customWeatherActionControllerTrigger3,
            "sunset" : sunset_customWeatherActionControllerTrigger3,
            "sunrise" :  sunrise_customWeatherActionControllerTrigger3,

            //An 2
            "title" : title_action1GcalendarController,
            "subjectReceive" : subjectReceive_action1GcalendarController,
            "place" : place_action1GcalendarController,
            "dayVector" : yearVector_action1GcalendarController,
            "monthVector" : monthVector_action1GcalendarController,
            "yearVector" : dayVector_action1GcalendarController


        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==8 && actionChose == 3)
    {
        var loginDataSend =
        {
            // Tn 8
            "idCity" : idCity_customWeatherActionControllerTrigger3,
            "timezone": timezone_customWeatherActionControllerTrigger3,
            "sunset" : sunset_customWeatherActionControllerTrigger3,
            "sunrise" :  sunrise_customWeatherActionControllerTrigger3,

            //An 3
            "subject" : subject_action1TwitterController

        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==8 && actionChose == 4)
    {
        var loginDataSend =
        {
            // Tn 8
            "idCity" : idCity_customWeatherActionControllerTrigger3,
            "timezone": timezone_customWeatherActionControllerTrigger3,
            "sunset" : sunset_customWeatherActionControllerTrigger3,
             "sunrise" :  sunrise_customWeatherActionControllerTrigger3,

            //An 4
            "title" : title_action2TwitterController,
            "subject" : subjec_action2TwitterController




        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==9 && actionChose == 1)
    {
        var loginDataSend =
        {
            //Tn 9
            "idCity" : idCity_customWeatherActionControllerTrigger4,
            "ptimezone" : ptimezone_customWeatherActionControllerTrigger4,
            "pthmax" :  pthmax_customWeatherActionControllerTrigger4,
            "pthmin" :   pthmin_customWeatherActionControllerTrigger4,
            "period" :  period_customWeatherActionControllerTrigger4,

            //An 1
            "sender" : sender_GmailActionController,
            "subject" : subject_GmailActionController


        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==9 && actionChose == 2)
    {
        var loginDataSend =
        {
            //Tn 9
            "idCity" : idCity_customWeatherActionControllerTrigger4,
            "ptimezone" : ptimezone_customWeatherActionControllerTrigger4,
            "pthmax" :  pthmax_customWeatherActionControllerTrigger4,
            "pthmin" :   pthmin_customWeatherActionControllerTrigger4,
            "period" :  period_customWeatherActionControllerTrigger4,

            //An 2
           "title" : title_action1GcalendarController,
            "subjectReceive" : subjectReceive_action1GcalendarController,
            "place" : place_action1GcalendarController,
            "dayVector" : yearVector_action1GcalendarController,
            "monthVector" : monthVector_action1GcalendarController,
            "yearVector" : dayVector_action1GcalendarController


    };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==9 && actionChose == 3)
    {
        var loginDataSend =
        {
            //Tn 9
            "idCity" : idCity_customWeatherActionControllerTrigger4,
            "ptimezone" : ptimezone_customWeatherActionControllerTrigger4,
            "pthmax" :  pthmax_customWeatherActionControllerTrigger4,
            "pthmin" :   pthmin_customWeatherActionControllerTrigger4,
            "period" :  period_customWeatherActionControllerTrigger4,

            //An 3
            "subject" : subject_action1TwitterController


        };
        sedingServerAllRun(loginDataSend);
    }
    if(triggerChose==9 && actionChose == 4)
    {
        var loginDataSend =
        {
            //Tn 9
            "idCity" : idCity_customWeatherActionControllerTrigger4,
            "ptimezone" : ptimezone_customWeatherActionControllerTrigger4,
            "pthmax" :  pthmax_customWeatherActionControllerTrigger4,
            "pthmin" :   pthmin_customWeatherActionControllerTrigger4,
             "period" :  period_customWeatherActionControllerTrigger4,

            //An 4
            "title" : title_action2TwitterController,
            "subject" : subjec_action2TwitterController


    };
        sedingServerAllRun(loginDataSend);
    }





};

function sedingServerAllRun (loginDataSend)
{
    $.ajax({
        method: "post",
        url: "/MyServlet",
        data: loginDataSend,
        dataType: "json",
        success: console.log("la post ha avuto successo n 9")
    });
};

function sedingServerAllRun1  (loginDataSend)
{
    $.ajax({
        method: "post",
        url: "/MyServletJsonJson",
        data: loginDataSend,
        dataType: "json",
        success: console.log("la post ha avuto successo n 9")
    });
};