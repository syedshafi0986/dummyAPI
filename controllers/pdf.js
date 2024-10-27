import PDFDocument from 'pdfkit';
import Lead from '../models/leadSchema.js';
import Campaign from '../models/campaignSchema.js';
import { application } from 'express';
import { sednNotification } from './emailNotify.js';

const generatePDFReport = async (req, res) => {
    try {
        const leads = await Lead.find()
        const campaigns = await Campaign.find()

        res.setHeader("content-Disposition",'attachment;filname-"report.pdf')
        res.setHeader('content-type','application.pdf')


        const doc = new PDFDocument();

        doc.pipe(res)

        doc.fontSize(20).text("Lead and Campaign Report",{align:'center'})

        doc.fontSize(18).text("Leads Data :",{underline:true})

        leads.forEach((lead,index)=>{
            doc.fontSize(13).text(
                `${index + 1}. Name: ${lead.name}, Email: ${lead.email}, Phone: ${lead.phone}, Source: ${lead.source}, Status: ${lead.status}, Location: ${lead.location}`
            )
            doc.moveDown(0.5)
        })

        doc.addPage().fontSize(18).text("Campaigns Data:",{underline:true})
        campaigns.forEach((campaign,index)=>{
            doc.fontSize(13).text(
                `${index + 1}. Campaign Name: ${campaign.name}, Budget: ${campaign.budget}, Status: ${campaign.status}`
            )
            doc.moveDown(0.5)
        });

        doc.end();
        // res.status(200).json({"msg":"successfully generated pdf"})
            const subject = "PDF Report Generated";
            const text = "The PDF report has been generated and downloaded.";
            const recipient = "shafii52612@gmail.com";

            await sednNotification(subject,text,recipient);
    }
    catch(e){
        console.log(e)
        res.status(500).json({"msg":"unable to generate the pdf","err":e})
    }
}

export {generatePDFReport}