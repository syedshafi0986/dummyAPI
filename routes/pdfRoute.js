import express from "express"

const pdfRouter = express.Router()

import { generatePDFReport } from "../controllers/pdf.js"

pdfRouter.get("/report/pdf",generatePDFReport)

export {pdfRouter}