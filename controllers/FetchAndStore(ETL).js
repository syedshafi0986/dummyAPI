// import { router as dummyrouter  } from './routes/dummyRoutes.js';
import axios from 'axios';
import Campaign from '../models/campaignSchema.js';
import Lead from '../models/leadSchema.js';




const fetchData = async (req,res)=>{

    try{
        // extract data
const fetchLeads = await axios.get("http://localhost:3000/api/dummy-leads")
const fetchCampaigns = await axios.get("http://localhost:3000/api/dummy-campaigns");

 const leadsData = fetchLeads.data;
 const CampaignsData = fetchCampaigns.data;

//  transform data 

const transformedLeads = leadsData.map((lead)=>({
    ...lead,
    status:lead.status.toUpperCase()
}))
const transformedCampaigns = CampaignsData.map((campaign) => ({
    ...campaign,
    budget: campaign.budget * 0.8 //change in budget 
  }));

//   loadData
// check for duplicates
const loadLeads = transformedLeads.map(async (lead)=>{
    await Lead.updateOne(
       { leadId:lead.leadId},
       {$set :lead},
       {upsert:true}

    )
})

const loadCampaigns = transformedCampaigns.map(async(camp)=>{
    await Campaign.updateOne(
        {campaignId: camp.campaignId},
        {$set: camp},
        {upsert:true}
    )
})


// wait for all promises to complete 
await Promise.all(loadLeads)
await Promise.all(loadCampaigns)

 res.status(200).json({"msg":"fetched and stored successfully",leads:transformedLeads,campaign:transformedCampaigns});
    }
catch(e){
    console.log(e);
    res.status(500).json({"msg":"unable to fetch "})
    
}
}


export {fetchData}