import mongoose from "mongoose";
import validator from "validator";

const applicationSchema = new mongoose.Schema({
  // title: {
  //   type: String,
  //   required: [true, "Please provide a title."],
  //   minLength: [3, "Title must contain at least 3 Characters!"],
  //   maxLength: [30, "Title cannot exceed 30 Characters!"],
  //   validate: {
  //     validator: function(v) {
  //       return /^[a-zA-Z]+$/.test(v);
  //     },
  //     message: props => `${props.value} is not a valid.`
  //   }
  // },
  name: {
    type: String,
    required: [true, "Please enter your Name!"],
    minLength: [3, "Name must contain at least 3 Characters!"],
    maxLength: [30, "Name cannot exceed 30 Characters!"],
    validate: {
      validator: function(v) {
        return /^[a-zA-Z]+$/.test(v);
      },
      message: props => `${props.value} is not a valid name! provide valid name.`
    }
  },
  email: {
    type: String,
    required: [true, "Please enter your Email!"],
    validate: [validator.isEmail, "Please provide a valid Email!"],
  },
  coverLetter: {
    type: String,
    required: [true, "Please provide a cover letter!"],
  },
  phone: {
    type: Number,
    required: [true, "Please enter your Phone Number!"],
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v);
      },
      message: props => `${props.value} is not a valid phone number! Please enter a 10-digit phone number.`
    }
  },
  address: {
    type: String,
    required: [true, "Please enter your Address!"],
    // validate: {
    //   validator: function(v) {
    //     return /^[a-zA-Z]+$/.test(v);
    //   },
    //   message: props => `${props.value} is not a valid address, provide valid address.`
    // }
  },
  resume: {
    public_id: {
      type: String, 
      required: true,
    },
    url: {
      type: String, 
      required: true,
    },
  },
  applicantID: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      enum: ["Job Seeker"],
      required: true,
    },
  },
  employerID: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      enum: ["Employer"],
      required: true,
    },
  },
});

export const Application = mongoose.model("Application", applicationSchema);
