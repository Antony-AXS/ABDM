import dotenv from "dotenv";
import request from "superagent";
dotenv.config()

function generateAceessToken() {
  return new Promise((resolve, reject) => {
    try {
      request
        .post("https://dev.abdm.gov.in/gateway/v0.5/sessions")
        .send({
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET_ID,
        })
        .set("Content-Type", "application/json")
        .then((response) => {
          resolve({ status: 200, message: "Success", data: response.body });
        })
        .catch((error) => {
          reject({
            status: 500,
            message: "Error fetching data:",
            data: error.toString(),
          });
        });
    } catch (error) {
      reject({
        status: 500,
        message: "Error",
        data: error.toString(),
      });
    }
  });
}

export default {
  generateAceessToken: generateAceessToken,
};
