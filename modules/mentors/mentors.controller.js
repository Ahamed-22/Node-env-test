const mentorRouter = require("express").Router();
const mentor = require("./mentors.model.js");
const { Types } = require("mongoose");

// 1.Add a User
//http://localhost:3000/mentors/create
mentorRouter.post("/create", async (req, res) => {
  const newMentor = new mentor(req.body);
  try {
    const response = await mentor.create(newMentor);
    console.log(response);
    return res.status(201).json({
      message: "Mentor create Success!",
    });
  } catch (error) {
    return res.status(404).json({
      message: "Mentor create failed",
      error,
    });
  }
});
// 2.Get all users
// http://localhost:3000/mentors/

mentorRouter.get("/", async (req, res) => {
  try {
    const response = await mentor.find();
    console.log(response);
    return res.json({
      message: "Mentor list Success",
      data: response,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Mentor list failed",
      error,
    });
  }
});

// 3.Get Single User
// http://localhost:3000/mentors/mentor/:mentorId
mentorRouter.get("/mentor/:mentorId", async (req, res) => {
  const { mentorId } = req.params;
  try {
    const response = await mentor.findOne({
      _id: new Types.ObjectId(mentorId),
    });
    if (response) {
      return res.status(200).json({
        message: "Mentor found",
        data: response,
      });
    } else {
      return res.status(404).json({
        message: "Mentor not found",
        data: {},
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
});
// 4.Update a User
// http://localhost:3000/mentors/update/:mentorId
mentorRouter.patch("/update/:mentorId", async (req, res) => {
  const { mentorId } = req.params;
  try {
    const response = await mentor.updateOne(
      {
        _id: new Types.ObjectId(mentorId),
      },
      {
        $set: req.body,
      },
      {
        new: true,
        projection: {
          _id: 0,
        },
      }
    );
    if (response) {
      return res.status(200).json({
        message: "Mentor updated",
        data: response,
      });
    } else {
      return res.status(404).json({
        message: "Mentor not found",
        data: {},
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
});

// 5.Delete a User
// http://localhost:3000/mentors/delete/:mentorId
mentorRouter.delete("/delete/:mentorId" , async(req,res) => {
    const { mentorId } = req.params;
    try{
        const response = await mentor.findOneAndDelete({
            _id : new Types.ObjectId(mentorId)
        });
        if(!response){
            return res.status(404).json({
                message : "Failed deleting user! No User found",    
            })
        }else{
            return res.json({
                massage : "User deleted successfully",
                data : response
            })
        }
    }catch(error){
        return res.status(500).json({
            message : "Internal server error"
        })
    }
})

module.exports = mentorRouter;
