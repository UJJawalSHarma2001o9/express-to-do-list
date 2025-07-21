const {
  apiSuccessResponse,
  apiErrorResponse,
} = require("../utils/apiResponse");

const path = require("path");

const testUserController = (req, res) => {
  const demoUserList = {
    quiz: {
      sport: {
        q1: {
          question: "Which one is correct team name in NBA?",
          options: [
            "New York Bulls",
            "Los Angeles Kings",
            "Golden State Warriros",
            "Huston Rocket",
          ],
          answer: "Huston Rocket",
        },
      },
      maths: {
        q1: {
          question: "5 + 7 = ?",
          options: ["10", "11", "12", "13"],
          answer: "12",
        },
        q2: {
          question: "12 - 8 = ?",
          options: ["1", "2", "3", "4"],
          answer: "4",
        },
      },
    },
  };
  return res.status(200).json({ data: demoUserList });
};

const testApiResponse = (req, res) => {
  return apiSuccessResponse(res, true, "hello", 200);
};

const testBodyRequest = (req, res) => {
  if (!req.body) {
    return apiErrorResponse(res, false, "request body not allow empty", 404, {
      empty: "empty request body ",
    });
  }
  const { email, name } = req.body;

  if (!email || !name) {
    return apiErrorResponse(res, false, "request body not allow empty", 404, {
      email: "email is required",
      name: "name is required",
    });
  }

  return apiSuccessResponse(res, true, "hello", 200, {
    inputs: {
      email: email,
      name: name,
    },
  });
};

const testFormDataRequest = (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return apiErrorResponse(res, false, "request body not allow empty", 404, {
      email: "email is required",
      name: "name is required",
    });
  }

  return apiSuccessResponse(res, true, "hello", 200, {
    inputs: {
      email: email,
      name: name,
    },
  });
};
const testFormDataImageRequest = (req, res) => {
  const { name, email } = req.body;
  const file = req.file;

  if (!file) {
    return res.status(400).json({
      status: false,
      message: "File not uploaded",
    });
  }

  const filePath = path.relative(process.cwd(), file.path); // Relative path from root

  return res.status(200).json({
    status: true,
    message: "File uploaded successfully",
    data: {
      name,
      email,
      filePath,
    },
  });
};
module.exports = {
  testUserController,
  testApiResponse,
  testBodyRequest,
  testFormDataRequest,
  testFormDataImageRequest,
};
