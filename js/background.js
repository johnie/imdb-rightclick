(function() {

  'use strict';

  var IMDbRightClick = {

    init: function() {

      chrome.contextMenus.onClicked.addListener(IMDbRightClick.selectText);

      chrome.runtime.onInstalled.addListener(function() {
        var context = 'selection';
        var title = 'Search on IMDb';
        var id = chrome.contextMenus.create({
          'title': title, 
          'contexts': [context],
          'id': 'context' + context
        });
      });

    },

    selectText: function(info) {
      var phrase = info.selectionText;
      IMDbRightClick.openIMDb(phrase);
    },

    openIMDb: function(phrase) {
      var encodedQuery = encodeURIComponent(phrase);
      var url = 'http://www.imdb.com/find?q=' + encodedQuery + '&s=all';
      window.open(url, '_blank');
    }

  };

  document.addEventListener('DOMContentLoaded', function() { 
    IMDbRightClick.init();
  });

}());
