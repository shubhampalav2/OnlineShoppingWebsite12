const express=require("express");
const { route } = require("../app");
const { getUserDetails, updatePassword, updateProfile, getAllUser, getSingleUser, updateUserRole, deleteUser } = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
// const { route } = require("../app")
const { registerUser, loginUser, logout, forgotPassword, resetPassword } = require("../controllers/userController");
const { updateProduct } = require("../controllers/productController");
const router=express.Router()
router.route('/register').post(registerUser)
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword)
router.route("/password/reset/:token").put(resetPassword)
router.route("/logout").get(logout)

// User Routes

// Get User Details
router.route("/me").get(isAuthenticatedUser,getUserDetails)
//Update User password
router.route("/password/update").put(isAuthenticatedUser,updatePassword)
//Update User Profile
router.route("/me/update").put(isAuthenticatedUser,updateProfile)
// Get all users(admin)
router.route("/admin/users").get(isAuthenticatedUser,authorizeRoles("admin"),getAllUser)
// Get single user (admin)
router.route("/admin/user/:id").get(isAuthenticatedUser, authorizeRoles("admin"),getSingleUser)
// update User Role -- Admin
router.route("/admin/user/:id").put(isAuthenticatedUser, authorizeRoles("admin"),updateUserRole)

// Delete User --Admin
router.route("/admin/user/:id").delete(isAuthenticatedUser, authorizeRoles("admin"),deleteUser)

module.exports=router