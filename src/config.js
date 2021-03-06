var APP_URL = 'https://oqyoobgoxltpkbs.form.io';
var API_URL = 'https://api.form.io';

// Parse query string
var query = {};
location.search.replace(/^[^a-z]+/, '').split("&").forEach(function(item) {
    query[item.split("=")[0]] = item.split("=")[1] && decodeURIComponent(item.split("=")[1]);
});

var appUrl = query.appUrl || APP_URL;
var apiUrl = query.apiUrl || API_URL;
angular.module('formioAppCniSupplier').constant('AppConfig', {
  appUrl: appUrl,
  apiUrl: apiUrl,
  forms: {
    userForm: appUrl + '/user',
    userLoginForm: appUrl + '/user/login',
    userRegisterForm: appUrl + '/user/register',
    cniSupplier: appUrl + '/cnisupplier',
    memberRegistrationForm: appUrl + '/member-registration'
    memberForm: appUrl + '/member',
    memberOrgForm: appUrl + '/member-org'
  }
});
