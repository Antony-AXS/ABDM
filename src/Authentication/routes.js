import Router from "express";
import UserCtrl from "./index.js";
const routes = Router();

const getAccessToken = (request, response) => {
  UserCtrl.generateAccessToken(request.body)
    .then((res) => {
      return response.status(200).json(res);
    })
    .catch((err) => {
      return response.status(500).json(err);
    });
};

routes.post("/getAcessToken", getAccessToken);

export default routes;
