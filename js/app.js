angular.module('track-chat.3rdparty', ['ngRoute', 'ngResource', 'ui.router', 'ui.bootstrap', 'ngAnimate', 'uiGmapgoogle-maps']);

angular.module('track-chat', ['config', 'track-chat.common', 'track-chat.3rdparty', 'track-chat.home', 'track-chat.ping', 'track-chat.login','track-chat.register', 'track-chat.dashboard']);