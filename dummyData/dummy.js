import express from 'express';
const app = express();

export const getDummyLeads = (req, res) => {
    const dummyLeads = [
        { leadId: "L001", name: 'John Doe', email: 'johnbhs@example.com', phone: '+1234567890', source: 'LinkedIn', location: 'New York', status: 'Interested', createdAt: new Date().toISOString() },
        { leadId: "L002", name: 'Jane Smith', email: 'janeasklncd@example.com', phone: '+0987654321', source: 'Google Ads', location: 'Los Angeles', status: 'Contacted', createdAt: new Date().toISOString() },
        { leadId: "L003", name: 'Alice Brown', email: 'alicekals@example.com', phone: '+1122334455', source: 'Facebook', location: 'Chicago', status: 'Qualified', createdAt: new Date().toISOString() },
    ];
    res.json(dummyLeads);
};

export const getDummyCampaigns = (req, res) => {
    const dummyCampaigns = [
        { campaignId: "C001", name: 'Summer Sale', budget: 5000, status: 'active', startDate: '2023-06-01', endDate: '2023-08-31', leadsGenerated: 120, conversionRate: 0.25, location: 'USA' },
        { campaignId: "C002", name: 'Winter Campaign', budget: 3000, status: 'completed', startDate: '2023-11-01', endDate: '2023-12-31', leadsGenerated: 80, conversionRate: 0.18, location: 'Canada' },
        { campaignId: "C003", name: 'Spring Launch', budget: 7000, status: 'inactive', startDate: '2024-03-01', endDate: '2024-05-31', leadsGenerated: 150, conversionRate: 0.32, location: 'UK' },
    ];
    res.json(dummyCampaigns);
};