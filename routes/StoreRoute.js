import express from "express"
import { fetchData } from "../controllers/FetchAndStore(ETL).js";
const AppRouter = express();

AppRouter.get("/fetch-data",fetchData)

export{AppRouter}