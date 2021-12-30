const express = require('express')
const TourController = require('../Controller/TourController')


// app.get('/api/v1/tours', getAllTours)
// app.post('/api/v1/tours', createTour)
// app.get('/api/v1/tours/:id', getTour)
// app.patch('/api/v1/tours/:id', UpdateTour)
// app.delete('/api/v1/tours/:id', deleteTour)

const router = express.Router();

//Midleware function 
//here we check the id is valid or not
// router.param('id', TourController.checkId)





router
    .route('/')
    .get(TourController.getAllTours)
    .post( TourController.createTour)

router
    .route('/:id')
    .get(TourController.getTour)
    .patch(TourController.UpdateTour)
    .delete(TourController.deleteTour)
    // .delete(TourController.deleteAll)

module.exports = router