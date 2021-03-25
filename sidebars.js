/*
  This represents the tree structure of the sidebar for the documentation
  section of the website.
  Note that branches only display on the website if they have child documents 
  (i.e. leaf nodes). While we finish populating the full tree with actual 
  documents, I have created a template document (doc ID: XXX-000) to be used 
  as a placeholder for branches awaiting child documents.
*/
module.exports = {
  docs: {
    "Introduction to Sense-i": ["INT-000", 
								"TBA-101", 
								"TBA-102",
								"INT-001",
								"TBA-103",
								"TBA-104",
								"TBA-105",
								"TBA-106",								
								"TBA-107"],	
    "Roles": [{
      "Business Owner / Board Member": ["XXX-000"],
      "Financial Director": ["XXX-000"],	
      "Operations Director": ["XXX-000"],
      "Production Manager": ["XXX-000"],
      "Scheduler": ["XXX-000"],	
      "Purchasing / Procurement": ["XXX-000"],	
      "Stock Control": ["XXX-000"],	
      "Finished Goods": ["XXX-000"],	
      "Delivery / Logistics": ["XXX-000"],	
      "Marketing": ["XXX-000"],	
      "Sales": ["XXX-000"],
      "Product Design & Costing": ["XXX-000"],
      "H.R.": ["XXX-000"],
      "Customer Services": ["XXX-000"],
      "Issue Manager": ["XXX-000"],
      "Business Consultant": ["XXX-000"],	  
	  "ERP Implementation": ["XXX-000"]},  		
      ],
    "Business Processes": [{
      "Operations Management": ["OPMO-001", 
        {"Product / Service Costing": ["XXX-000"]},
        {"Sales Quote & Order Entry": ["SQO-001", 
										"SAF-1202", 
										"SAF-441", 
										"SAF-502", 
										"SAF-154", 
										"SAF-1204"]},
        {"Internal Order Management": ["XXX-000"]},
        {"Production Control": ["XXX-000"]},		
        {"Material Cost Control": ["XXX-000"]},
        {"Labour Cost Control": ["XXX-000"]},
        {"Product Quality Management": ["XXX-000"]},
        {"Inventory Management": ["XXX-000"]},
        {"Retail Management": ["XXX-000"]},		
        {"Delivery Management": ["XXX-000"]},
        {"Site Item Management": ["XXX-000"]},
        {"Sales Delivery": ["XXX-000"]},		
      ],
      "Financial Management": ["FMO-001", 
        {"Accounts Payable": ["FMAP-001", 
							"SAF-720", 
							"SAF-1203", 
							"SAF-149", 
							"SAF-152", 							
							"SAF-153", 								
							"SAF-4050", 							
							"SAF-4053", 	
							"SAF-4051", 								
							"SAF-4030", 							
							"SAF-4014", 
							"SAF-4054", 
							"SAF-4056", 
							"SAF-4057", 
							"SAF-4058"]},
        {"Accounts Receivable": ["FMAR-001", 
							"SAF-710", 
							"SAF-1202",
							"SAF-4040", 	
							"SAF-4043", 								
							"SAF-4041CL",
							"SAF-4010",							
							"SAF-4041CS"]},
        {"Employee Payroll": ["XXX-000"]},		
        {"Cashbook Management": ["SAF-4001",
							"SAF-4061",							
							"SAF-4015"]},
        {"Cash Flow Management": ["XXX-000"]},
        {"Fixed Asset Management": ["XXX-000"]},
        {"Lease & Loan Management": ["XXX-000"]},
        {"Share Capital Management": ["XXX-000"]},		
        {"General Ledger & Financial Reporting": ["FMGL-001", 
							"SAF-1916"]},		
      ],
      "Performance Management": [
        {"Budget Planning": ["XXX-000"]},
        {"Performance Reporting": ["XXX-000"]},
        {"Incentive Management": ["XXX-000"]},		
      ],
    }],
    "Setup & Implementation": ["DOWNLOAD", "LAUNCH", "SAF-1218"],	
  },
};
