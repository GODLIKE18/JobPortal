import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title."],
    minLength: [3, "Title must contain at least 3 Characters!"],
    maxLength: [30, "Title cannot exceed 30 Characters!"],
    validate: {
      validator: function(v) {
        return /^[a-zA-Z\s]*$/.test(v);
      },
      message: props => `${props.value} is not a valid title!.`
    }
  },
  description: {
    type: String,
    required: [true, "Please provide decription."],
    minLength: [10, "Description must contain at least 10 Characters!"],
    maxLength: [500, "Description cannot exceed 500 Characters!"],
    validate: {
      validator: function(v) {
        return /^[a-zA-Z\s]*$/.test(v);
      },
      message: props => `${props.value} is not a valid description!.`
    }
  },
  category: {
    type: String,
    required: [true, "Please provide a category."],
  },
  country: {
    type: String,
    required: [true, "Please provide a country name."],
    validate: {
      validator: function(v) {
        return /^[a-zA-Z]+$/.test(v);
      },
      message: props => `${props.value} is not a valid country name!.`
    }
  },
  city: {
    type: String,
    required: [true, "Please provide a city name."],
    validate: {
      validator: function(v) {
        return /^[a-zA-Z]+$/.test(v);
      },
      message: props => `${props.value} is not a valid city name!.`
    }
  },
  location: {
    type: String,
    required: [true, "Please provide location."],
    minLength: [3, "Location must contian at least 3 characters!"],
  },
  fixedSalary: {
    type: Number,
    minLength: [4, "Salary must contain at least 4 digits"],
    maxLength: [9, "Salary cannot exceed 9 digits"],
    validate: {
      validator: function(v) {
        return v >= 0;
      },
      message: props => `${props.value} is not a valid salary! Salary cannot be negative.`
    }
  },
  salaryFrom: {
    type: Number,
    minLength: [4, "Salary must contain at least 4 digits"],
    maxLength: [9, "Salary cannot exceed 9 digits"],
    validate: [
      {
        validator: function(v) {
          return v >= 0;
        },
        message: props => `${props.value} is not a valid salary! Salary cannot be negative.`
      },
      // {
      //   validator: function(v) {
      //     // Access the document context using `this`
      //     return v <= this.salaryTo;
      //   },
      //   message: props => `Salary from (${props.value}) must be less than or equal to Salary to (${this.salaryTo}).`
      // }
    ]
  },
  salaryTo: {
    type: Number,
    minLength: [3, "Salary must contain at least 3 digits"],
    maxLength: [9, "Salary cannot exceed 9 digits"],
    validate: {
      validator: function(v) {
        return v >= 0;
      },
      message: props => `${props.value} is not a valid salary! Salary cannot be negative.`
    }
    
  },
  expired: {
    type: Boolean,
    default: false,
  },
  jobPostedOn: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Job = mongoose.model("Job", jobSchema);
