$(function() {

  // Load event information stored in JSON
  try {
    $.getJSON("json/events.json", function(json) {
      var eventHtml = ["_event-odd", "_event-even"];
      var evCount = 0;
      var $evHolder = $("#event-holder");
      for (var evName in json) {
        $evHolder.append("<div id='" + evName + "'></div>");
        $ev = $("#" + evName);
        $ev.load("html/" + eventHtml[evCount%2] + ".html", populateEvent($ev,json[evName]));
        evCount++;
      }
    });
  } catch (e) {}

  function populateEvent(ev, json) {
    return function() {
      for (var evInfo in json) {
        ev.find("." + evInfo).html(json[evInfo]);
      }
    }
  }
});