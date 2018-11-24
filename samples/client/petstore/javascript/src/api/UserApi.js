/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/User'));
  } else {
    // Browser globals (root is window)
    if (!root.OpenApiPetstore) {
      root.OpenApiPetstore = {};
    }
    root.OpenApiPetstore.UserApi = factory(root.OpenApiPetstore.ApiClient, root.OpenApiPetstore.User);
  }
}(this, function(ApiClient, User) {
  'use strict';

  /**
   * User service.
   * @module api/UserApi
   * @version 1.0.0
   */

  /**
   * Constructs a new UserApi. 
   * @alias module:api/UserApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createUser operation.
     * @callback module:api/UserApi~createUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create user
     * This can only be done by the logged in user.
     * @param {module:model/User} user Created user object
     * @param {module:api/UserApi~createUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createUser = function(user, callback) {
      var postBody = user;

      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling createUser");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/user', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createUsersWithArrayInput operation.
     * @callback module:api/UserApi~createUsersWithArrayInputCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates list of users with given input array
     * @param {Array.<User>} user List of user object
     * @param {module:api/UserApi~createUsersWithArrayInputCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createUsersWithArrayInput = function(user, callback) {
      var postBody = user;

      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling createUsersWithArrayInput");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/createWithArray', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createUsersWithListInput operation.
     * @callback module:api/UserApi~createUsersWithListInputCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates list of users with given input array
     * @param {Array.<User>} user List of user object
     * @param {module:api/UserApi~createUsersWithListInputCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createUsersWithListInput = function(user, callback) {
      var postBody = user;

      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling createUsersWithListInput");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/createWithList', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUser operation.
     * @callback module:api/UserApi~deleteUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete user
     * This can only be done by the logged in user.
     * @param {String} username The name that needs to be deleted
     * @param {module:api/UserApi~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUser = function(username, callback) {
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deleteUser");
      }


      var pathParams = {
        'username': username
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/{username}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserByName operation.
     * @callback module:api/UserApi~getUserByNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user by user name
     * @param {String} username The name that needs to be fetched. Use user1 for testing.
     * @param {module:api/UserApi~getUserByNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.getUserByName = function(username, callback) {
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getUserByName");
      }


      var pathParams = {
        'username': username
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/xml', 'application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/user/{username}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the loginUser operation.
     * @callback module:api/UserApi~loginUserCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Logs user into the system
     * @param {String} username The user name for login
     * @param {String} password The password for login in clear text
     * @param {module:api/UserApi~loginUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    this.loginUser = function(username, password, callback) {
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling loginUser");
      }

      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling loginUser");
      }


      var pathParams = {
      };
      var queryParams = {
        'username': username,
        'password': password,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/xml', 'application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/user/login', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the logoutUser operation.
     * @callback module:api/UserApi~logoutUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Logs out current logged in user session
     * @param {module:api/UserApi~logoutUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.logoutUser = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/logout', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUser operation.
     * @callback module:api/UserApi~updateUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updated user
     * This can only be done by the logged in user.
     * @param {String} username name that need to be deleted
     * @param {module:model/User} user Updated user object
     * @param {module:api/UserApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateUser = function(username, user, callback) {
      var postBody = user;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling updateUser");
      }

      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling updateUser");
      }


      var pathParams = {
        'username': username
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/{username}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
