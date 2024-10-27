import express from 'express'
const router = express.Router()

import { getDummyCampaigns,getDummyLeads } from '../dummyData/dummy.js'

router.get("/dummy-leads",getDummyLeads)
router.get("/dummy-campaigns",getDummyCampaigns)

export {router};