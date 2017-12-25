/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        parentElement.style.padding = "0";

        console.log('Received Event: ' + id);
    }
};


var menutext = [
    "Favourites displays a list of people in contacts who you want to call very often.",
    "Recent displays your call history. There are two sections: All, which contains incoming, outgoing, cancelled and missed calls, and the missed call section.",
    "Keypad displays the set of buttons from 1-9 for you to dial a number.",
    "Contacts displays the list of contacts that you have saved onto your phone. You can also create new contacts on this page.",
    "Voicemail displays voicemail sent to you by other parties. This is often not used in current times."
];
$("#home").click(function() {
    history.back(-1);
});

$("#backpage").click(function() {
    var page = $(".instructions:visible")[0].id.substring(12,13);
    var newpage = (parseInt(page) - 1);
    if(page>1) {
        $("#instructions" + page).hide();
        $("#instructions" + newpage).show();
        if(page==2) {
            $("#action1").toggle();
            $("#action2").toggle();
            $("#nextpage").toggle();
            $("#nextlesson").toggle();
        }
        $("#pageno").text('Page ' + newpage + ' of 2');
    }
})

$("#nextpage").click(function() {
    var page = $(".instructions:visible")[0].id.substring(12,13);
    var newpage = (parseInt(page) + 1);
    if(page<2) {
        $("#instructions" + page).hide();
        $("#instructions" + newpage).show();
        if(page==1) {
            $("#action1").toggle();
            $("#action2").toggle();
            $("#nextpage").toggle();
            $("#nextlesson").toggle();
        }
        $("#pageno").text('Page ' + newpage + ' of 2');
    }
})

$("#nextlesson").click(function() {
    var stateObj = { foo: "bar" };
    history.replaceState(stateObj, "page", "phone2.html");
    window.location.href = "phone2.html";
})

$("table").find("th").click(function() {
    $("#textbox").text(menutext[parseInt($(this)[0].id)]);
});

