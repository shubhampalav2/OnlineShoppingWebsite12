// We are extending from node default error class
class ErrorHander extends Error{
constructor(message,statusCode){
super(message);
this.statusCode=statusCode
Error.captureStackTrace(this,this.constructor);
}
}
module.exports=ErrorHander