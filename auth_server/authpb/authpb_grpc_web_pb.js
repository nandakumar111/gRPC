/**
 * @fileoverview gRPC-Web generated client stub for authpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.authpb = require('./authpb_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.authpb.AuthServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.authpb.AuthServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.authpb.CheckServerStatusRequest,
 *   !proto.authpb.CheckServerStatusResponse>}
 */
const methodInfo_AuthService_CheckServerStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.authpb.CheckServerStatusResponse,
  /** @param {!proto.authpb.CheckServerStatusRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.authpb.CheckServerStatusResponse.deserializeBinary
);


/**
 * @param {!proto.authpb.CheckServerStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.authpb.CheckServerStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.authpb.CheckServerStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.authpb.AuthServiceClient.prototype.checkServerStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/authpb.AuthService/CheckServerStatus',
      request,
      metadata || {},
      methodInfo_AuthService_CheckServerStatus,
      callback);
};


/**
 * @param {!proto.authpb.CheckServerStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.authpb.CheckServerStatusResponse>}
 *     A native promise that resolves to the response
 */
proto.authpb.AuthServicePromiseClient.prototype.checkServerStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/authpb.AuthService/CheckServerStatus',
      request,
      metadata || {},
      methodInfo_AuthService_CheckServerStatus);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.authpb.RegisterAccountRequest,
 *   !proto.authpb.RegisterAccountResponse>}
 */
const methodInfo_AuthService_RegisterAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.authpb.RegisterAccountResponse,
  /** @param {!proto.authpb.RegisterAccountRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.authpb.RegisterAccountResponse.deserializeBinary
);


/**
 * @param {!proto.authpb.RegisterAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.authpb.RegisterAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.authpb.RegisterAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.authpb.AuthServiceClient.prototype.registerAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/authpb.AuthService/RegisterAccount',
      request,
      metadata || {},
      methodInfo_AuthService_RegisterAccount,
      callback);
};


/**
 * @param {!proto.authpb.RegisterAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.authpb.RegisterAccountResponse>}
 *     A native promise that resolves to the response
 */
proto.authpb.AuthServicePromiseClient.prototype.registerAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/authpb.AuthService/RegisterAccount',
      request,
      metadata || {},
      methodInfo_AuthService_RegisterAccount);
};


module.exports = proto.authpb;

