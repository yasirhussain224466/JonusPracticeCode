// const fs = require("fs");

const Tour = require("../Models/TourModel");

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../DevData/Data/SimpleTours.json`)
// );

// exports.checkId = (req, res, next, val) => {
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: "Fail",
//       message: "Invalid ID",
//     });
//   }
//   next();
// };

exports.getAllTours = async (req, res) => {
  try {
    // filtering
    const queryObj = { ...req.query };
    const excludeQuery = ["limit", "page", "sort", "fields"];
    excludeQuery.forEach((currElem) => delete queryObj[currElem]);
    console.loh(queryObj)

    // Advance filtering




    // Execute query 
    query = Tour.find(queryObj);
    const Tours = await query;
    
    // res query
    res.status(200).json({
      status: "success",
      Items: `${Tours.length}`,
      Data: {
        Tours,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: `${err}`,
    });
  }
};

exports.getTour = async (req, res) => {
  // const ID = req.params.id * 1;
  // const TourFilter = tours.find((currElem) => {
  //   return currElem.id === ID;
  // });

  // // console.log(TourFilter)
  // res.status(200).json({
  //   status: "success",
  //   tour: TourFilter,
  // });
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: `${err}`,
    });
  }
};

exports.UpdateTour = async (req, res) => {
  try {
    const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        tour: updatedTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: `${err}`,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    const DeleteTour = await Tour.findOneAndRemove(req.params.id);
    res.status(204).json({
      status: "success",
      data: DeleteTour,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: `${err}`,
    });
  }
};

// exports.deleteAll = async (req, res) => {
//   try {
//     const DeleteTourAll = await Tour.deleteMany(req.params.id);
//     res.status(204).json({
//       status: "success",
//       data: DeleteTourAll,
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: "fail",
//       message: `${err}`,
//     });
//   }
// };

exports.createTour = async (req, res) => {
  // const tourId = tours[tours.length - 1].id + 1;
  // const newTour = Object.assign({ id: tourId }, req.body);
  // if (req.body.name && req.body.price) {
  //   tours.push(newTour);
  //   fs.writeFile(
  //     `${__dirname}/../DevData/Data/SimpleTours.json`,
  //     JSON.stringify(tours),
  //     (err) => {
  //       res.status(201).json({
  //         status: "success",
  //         data: {
  //           tours,
  //         },
  //       });
  //     }
  //   );
  // }
  // else {
  //   console.log("Please Gi
  // ve the name and price also this is complusary");
  //   res.send("Error");
  // }

  try {
    // const newTour = new Tour({})
    // newTour.save()

    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
