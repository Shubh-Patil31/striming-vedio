// import { asyncHandler } from "../utils/asyncHandler.js";

// const registerUser = asyncHandler(async (req, res) => {
//   res.status(200).json({
//     message: "ok",
//   });
// });

// export { registerUser };
// import { asyncHandler } from "../utils/asyncHandler.js";

// const registerUser = asyncHandler(async (req, res) => {
//   console.log("Request received:", req.body); // Debugging line
//   res.status(200).json({
//     message: "User registered successfully!",
//   });
// });

// export { registerUser };

import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  console.log("Request received:", req.body); // Debugging line
  res.status(200).json({
    message: "User registered successfully!",
  });
});

export { registerUser };
