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
    "Introduction to Sense-i": ["INT-001"],
    "Level of Work": ["XXX-000"],
    "Business Processes": [{
      "Operations Management": [
        {"Sales Quote & Order Entry": ["SQO-101", "CUP-004", "PRC-008", "SOE-002", "SOE-006", "EMP-001"]},
        {"Production Control": ["XXX-000"]},
        {"Material Cost Control": ["XXX-000"]},
        {"Labour Cost Control": ["XXX-000"]},
      ],
      "Financial Management": ["XXX-000"],
      "Performance Management": ["XXX-000"],
    }],
    "Reference Detail": ["SCL-000", "CRM-007"],	
  },
};