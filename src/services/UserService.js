const { apiSuccessResponse } = require("../utils/apiResponse");

function testUserService( res) {
  exampleDate = {
    data: [
      {
        type: "articles",
        id: "1",
        attributes: {
          title: "JSON:API paints my bikeshed!",
          body: "The shortest article. Ever.",
        },
        relationships: {
          author: {
            data: { id: "42", type: "people" },
          },
        },
      },
    ],
    included: [
      {
        type: "people",
        id: "42",
        attributes: {
          name: "John",
        },
      },
    ],
  };

  return apiSuccessResponse(res, true, "Get example data successfully", 200, {
    users: exampleDate,
  }
);
}

module.exports = {
  testUserService,
};
