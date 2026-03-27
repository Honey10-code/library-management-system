const express = require('express');
const { users } = require("..data/users.json");

const {getAllUsers, getSingleUserById,createUser,updateUserById,deleteUserById,getSubscriptionDetailsById} = require('../controllers/user-controller');

const users = [
  {
    id: "1",
    name: "Aman",
    email: "aman@gmail.com"
  },
  {
    id: "2",
    name: "Rahul",
    email: "rahul@gmail.com"
  }
];