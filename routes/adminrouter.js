const express = require('express')

const {
    getadminlog,
    adminhomeview,
    getusers,
    search,
    deleteuser,
    edituser,
    updateuser,
    adlogout,
    adduser,
    adminaddusers
    
} = require('../controller/admincontroller')

const router =  express.Router()


router.get('/',getadminlog)
router.post('/adminhome',adminhomeview)
router.get('/getusers',getusers)
router.post('/searchusers',search)
router.get('/deleteuser/:id',deleteuser)
router.get('/edituser/:id',edituser)
router.post('/updateuser/:id',updateuser)
router.get('/adminaddusers',adminaddusers)
router.post('/adduser',adduser)
router.get('/adlogout',adlogout)




module.exports = router 