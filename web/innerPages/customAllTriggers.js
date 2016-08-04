$(function(){



   // var googleLogged = false;
    //var twitterLogged = false;

    $(document).ready(function()
    {

//        $('#googleLogoON').hide();
//        $('#googleLogoOFF').show();
//        $('#twitterLogoON').hide();
//        $('#twitterLogoOFF').show();


        //$('[data-toggle="popover"]').popover();

        /*
         *  GOOGLE AUTHENTICATION FUNCTIONS
         */
        /*
        $("#google-auth-btn").click(function(e){

            var googleCredentials = {
                email: $('#inputEmailGoogle').val(),
                password: $('#inputPasswordGoogle').val()
            };

            $.ajax({

                url: "/MyServlet",
                type: "POST",
                data: googleCredentials,

                success: function(data){
                    //alert(data);
                    $('#loginGoogleModal').modal('hide');
                    $("#notificationsWrapper").notify(
                        "Logged with Google",
                        {
                            className: 'success',
                            position: 'bottom right'
                        }
                    );
                    $('#googleLogoON').show();
                    $('#googleLogoOFF').hide();

                    googleLogged = true;
                    //console.log(googleLogged);
                },
                error: function(data)
                {
                    //alert(JSON.stringify(data));
                    $('#loginGoogleModal').modal('hide');
                    googleLogged = false;
                    $("#notificationsWrapper").notify(
                        "Failed to login with Google",
                        {
                            className: 'error',
                            position: 'bottom right'
                        }
                    );
                    $('#googleLogoON').hide();
                    $('#googleLogoOFF').show();
                    console.log(googleLogged);
                }
            });

        });

        $("#googleLogoON").click(function(e){

            var requestLogout = {
                requestLogout: 'Google'
            };

            $.ajax({

                url: "/MyServlet",
                type: "POST",
                data: requestLogout,

                success: function(data){
                    //alert(data);
                    $('#googleLogoON').hide();
                    $('#googleLogoOFF').show();
                    $("#notificationsWrapper").notify(
                        "Logged out with Google",
                        {
                            className: 'warning',
                            position: 'bottom right'
                        }
                    );
                    googleLogged = false;
                },
                error: function(data){
                    //alert(JSON.stringify(data));
                    googleLogged = true;

                    $('#googleLogoON').show();
                    $('#googleLogoOFF').hide();

                }
            });

        });
        */

        /*
         *  TWITTER AUTHENTICATION FUNCTIONS
         */
        $("#twitter-auth-btn").click(function(e){

            var twitterCredentials = {
                email: $('#inputEmailtwitter').val(),
                password: $('#inputPasswordtwitter').val()
            };

            $.ajax({

                url: "/MyServlet",
                type: "POST",
                data: twitterCredentials,

                success: function(data){
                    //alert(data);
                    $('#loginTwitterModal').modal('hide');
                    $("#notificationsWrapper").notify(
                        "Logged with Twitter",
                        {
                            className: 'success',
                            position: 'bottom right'
                        }
                    );
                    $('#twitterLogoON').show();
                    $('#twitterLogoOFF').hide();

                    twitterLogged = true;
                },
                error: function(data){
                    //alert(JSON.stringify(data));
                    $('#loginTwitterModal').modal('hide');
                    twitterLogged = false;
                    $("#notificationsWrapper").notify(
                        "Failed to login with Twitter",
                        {
                            className: 'error',
                            position: 'bottom right'
                        }
                    );
                    $('#twitterLogoON').hide();
                    $('#twitterLogoOFF').show();

                }
            });

        });
        $("#twitterLogoON").click(function(e){

            var requestLogout = {
                requestLogout: 'Twitter'
            };

            $.ajax({

                url: "/MyServlet",
                type: "POST",
                data: requestLogout,

                success: function(data){
                    //alert(data);
                    $('#twitterLogoON').hide();
                    $('#twitterLogoOFF').show();
                    $("#notificationsWrapper").notify(
                        "Logged out with Twitter",
                        {
                            className: 'warning',
                            position: 'bottom right'
                        }
                    );
                    twitterLogged = false;
                },
                error: function(data){
                    //alert(JSON.stringify(data));
                    twitterLogged = true;

                    $('#twitterLogoON').show();
                    $('#twitterLogoOFF').hide();

                }
            });

        });

        console.log(googleLogged);

    });



});


/*
var result;
var foreresult;
var temperature;
var icon;
var weather;
var locality;
var jsonurl;
var forejsonurl;
var deg;
var idCity=0;

var flagThmaxCheck = "1";
var flagThminCheck = "1";
var flagPeriodCheck = "1";
var flagTimeZoneCheck = "1";



var getToDate=function(time){
    var date = new Date(time*1000);
    var day=date.getDate();
    var month=1+date.getMonth();
    var year=date.getFullYear();
    return month+"/"+day+"/"+year;
};

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        jsonurl="http://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid=444a5c5b0f4846dd7465cb680a94caf1"
        $.ajax({method: "GET",
            url: jsonurl,
            success: function(presentlocation){
                result=presentlocation;
                updateView(result);



            }

        });
        forejsonurl="http://api.openweathermap.org/data/2.5/forecast/daily?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid=444a5c5b0f4846dd7465cb680a94caf1"
        $.ajax({method: "GET",
            url: forejsonurl,
            success: function(forepresentlocation){
                var foreresult=forepresentlocation;


                updateBox3(foreresult);
            }

        });


    });
} /// end of weather update based on Location...



function updateView(result){



    if(result.cod==="404"){
        $('#temper').hide();
        //alert("No City found Try Again!!....");
    }
    else {

        var k = result.weather[0].icon;
        var back = {
            "01d": "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/3448F05E20.jpg",
            "01n": "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/7BY01H9BDT.jpg",
            "02d": "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/AKZRN2XPK8.jpg",
            "02n": "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/D0080781B6.jpg",
            "03d": "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/V85UKOJEHQ.jpg",
            "03n": "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/8JP8NFU0I2.jpg",
            "04d": "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/UV542Y42CW.jpg",
            "04n": "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/Y9HHFJBM33.jpg",
            "09d": "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/YPN7LYZR7E.jpg",
            "09n": "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/LNFMTJGFKD.jpg",
            "10d": "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/C3E239A4B9.jpg",
            "10n": "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/C3E239A4B9.jpg",
            "11d": "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/FRVILTXU9R.jpg",
            "11n": "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F39CBA21BE.jpg",
            "13d": "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/P0NXH7XVCS.jpg",
            "13n": "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/DABC9B899F.jpg",
            "50d": "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/9XDH29XSFK.jpg",
            "50n": "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/F97C70F16D.jpg"

        };


        temperature = result.main.temp - 273.15;
        temperature = temperature.toFixed(1);
        weather = result.weather[0].description;
        icon = result.weather[0].icon;
        locality = result.name + ' - ' + result.sys.country;


        //temp-board

        $("#temp").html(temperature + ' &deg;C');
        $("#weather-desc").text(weather);
        $("#icon").attr("src", "http://openweathermap.org/img/w/" + icon + ".png");
        $("#locality").text(locality);
        //temp board

        //box1
        $("#wind-speed").text(result.wind.speed);
        $("#wind-deg").text(result.wind.deg.toFixed(1));
        $("#clouds-all").text(result.clouds.all);
        $("#rain-3h").text("0");
        $("#snow-3h").text("0");
        if (result.rain) {

            $("#rain-3h").text(result.rain[Object.keys(result.rain)[0]]);
        }
        if (result.snow) {
            $("#snow-3h").text(result.snow[Object.keys(result.snow)[0]]);
        }
        //box1

        //box-2
        $("#main-temp").html(temperature);
        $("#main-pressure").text(result.main.pressure);
        $("#main-humidity").text(result.main.humidity);
        var temperature_min = result.main.temp_min - 273.15;
        temperature_min = temperature_min.toFixed(1);
        var temperature_max = result.main.temp_max - 273.15;
        temperature_max = temperature_max.toFixed(1);
        $("#main-temp_min").text(temperature_min);
        $("#main-temp_max").text(temperature_max);
        $("#main-sea_level").text("N.A");
        $("#main-grnd_level").text("N.A");
        if (result.main.sea_level) {
            $("#main-sea_level").text(result.main.sea_level);
        }
        if (result.main.grnd_level) {
            $("#main-grnd_level").text(result.main.grnd_level);
        }

        //box-2


        //box4
        $("#main-name").text(result.name);
        $("#sys-id").text(result.id);
        $("#coord-lon").text(result.coord.lon);
        $("#coord-lat").text(result.coord.lat);
        $("#sys-country").text(result.sys.country);







};
var searchEnter=function(){
    var city=$("#search-input").val();

    jsonurl="http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=444a5c5b0f4846dd7465cb680a94caf1"
    $.ajax({method: "GET",
        url: jsonurl,
        success: function(presentlocation){
            result=presentlocation;

            updateView(result);



        }});
    forejsonurl="http://api.openweathermap.org/data/2.5/forecast/daily?q="+city+"&appid=444a5c5b0f4846dd7465cb680a94caf1"
    $.ajax({method: "GET",
        url: forejsonurl,
        success: function(forepresentlocation){
            var foreresult=forepresentlocation;



          //  updateBox3(foreresult);
        }});


}
$("#search-input").keyup(function (e) {
    if ( e.which == 13 ){
        $('#temper').fadeOut("fast");
        $('#temper').fadeIn("slow");
        $("#deg").animate({"left":"0px"});
        deg="true";
        $("#deg").html("&deg;C");
        searchEnter();

    }

});
$("button").on("click",function(){
    $('#temper').fadeOut("fast");
    $('#temper').fadeIn("slow");
    $("#deg").animate({"left":"0px"});
    deg="true";
    $("#deg").html("&deg;C");
    searchEnter();
});
deg="true";

$("#deg").on("click",function(){
    if(deg==="true")
    {$("#deg").animate({"left":"26px"});
        deg="false";
        $("#deg").html("&deg;F");
        temperature=result.main.temp - 273.15;

        temperature=temperature.toFixed(1);
        temperature=1.8*(temperature) + 32;
        $("#temp").html(temperature+' &deg;F');
    }

    else if(deg==="false"){
        $("#deg").animate({"left":"0px"});
        deg="true";
        $("#deg").html("&deg;C");
        temperature=result.main.temp - 273.15;
        temperature=temperature.toFixed(1);
        $("#temp").html(temperature+' &deg;C');
    }
});


$("#but").on("click", function updateView(){
    //alert(idCity);
    flagThmaxCheck = "1";
    flagThminCheck = "1";
    flagPeriodCheck = "1";
    flagTimeZoneCheck = "1";


    if (idCity == '0')
    {
        //$scope.errorButton= "Almost a field must be completed";
        alert("You have not found you ciry");
    }
    else
    {
        triggerChose=9;
        //Brute force resolution
        /*thmaxidcheckbox    thminidcheckbox   checktimeZonevar        DONE
           0                0               0                   *
           0                0               1                   *
           0                1               0                   *
           0                1               1                   *
           1                0               0
           1                0               1
           1                1               0
           1                1               1
        */

            //  sunset


