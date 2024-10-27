# API Service Project

## Overview

This project is an API service that integrates with dummy CRM and Marketing platforms to fetch lead and campaign data, process it through an ETL pipeline, generate PDF/CSV reports, and send email notifications based on specific alerts.

## Features

- Fetch and store data from CRM and Marketing platforms.
- Generate PDF and CSV reports.
- Send email notifications based on alert conditions.
- API endpoints for report generation and data handling.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [MongoDB](https://www.mongodb.com/)
- [Nodemailer](https://nodemailer.com/about/) configured with a Gmail account (requires App Password setup for Gmail)

### Setting Up Gmail App Password

1. Go to your [Google Account Security Settings](https://myaccount.google.com/security).
2. Ensure 2-Step Verification is enabled.
3. Under **"Signing in to Google"**, go to **App Passwords** and create an App Password for your API.
4. Use this password in your Nodemailer configuration in the `.env` file.

## Installation

1. Clone the repository:

   git clone https://github.com/your-username/api-service.git
   cd api-service

2.Install dependencies:
npm install
3.Create a .env file in the root directory and add your environment variables
4.Start the server:
npm run server

# API Endpoints

## 1. Fetch and Store Data

GET /api/fetch-data
Fetches dummy data from CRM and Marketing platforms and stores it in MongoDB.

### Response:

200 OK - Successfully fetched and stored data.
500 Internal Server Error - Error fetching data.

## 2. Generate Reports

GET /api/report/pdf
Generates a PDF report of the fetched data.

### Response:

200 OK - PDF report is generated and returned.
500 Internal Server Error - Error generating report.

## 3. Send Email Notifications

Email notifications are sent when certain conditions are met (e.g., specific data alerts).

Automatically triggered upon data fetching or processing events

## Technologies Used

-Node.js & Express.js for server and routing.
-MongoDB for data storage.
-Nodemailer for sending email notifications.
-pdfkit for generating PDF reports.
