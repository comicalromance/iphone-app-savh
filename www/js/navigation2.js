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


$("#home").click(function() {
    history.back(-1);
});

$("#backpage").click(function() {
    var page = $(".instructions:visible")[0].id.substring(12,13);
    var newpage = (parseInt(page) - 1);
    if(page>1) {
        $("#instructions" + page).hide();
        $("#instructions" + newpage).show();
        $("#pageno").text('Page ' + newpage + ' of 2');
        if(page==2 || page==3) {
            $("#action1").toggle();
            $("#action2").toggle();
        }
        if(page==3) {
            $("#nextpage").toggle();
            $("#nextlesson").toggle();
        }
    }
})

$("#nextpage").click(function() {
    var page = $(".instructions:visible")[0].id.substring(12,13);
    var newpage = (parseInt(page) + 1);
    if(page<3) {
        $("#instructions" + page).hide();
        $("#instructions" + newpage).show();
        $("#pageno").text('Page ' + newpage + ' of 2');
        if(page==2 || page==1) {
            $("#action1").toggle();
            $("#action2").toggle();
        }
        if(page==2) {
            $("#pageno").text('');
            $("#nextpage").toggle();
            $("#nextlesson").toggle();
        }
    }
})

$("#nextlesson").click(function() {
    var stateObj = { foo: "bar" };
    history.replaceState(stateObj, "page", "navigation3.html");
    window.location.href = "navigation3.html";
})
