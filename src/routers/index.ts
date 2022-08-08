import { Request, Response, Router } from "express";
import swaggerUi from "swagger-ui-express";

const routes = Router();

routes.use("/api-docs", swaggerUi.serve);

routes.get("/", (req: Request, res: Response) => {
  res.send("Hello!");
});

export default routes;
