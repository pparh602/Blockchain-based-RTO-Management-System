# Blockchain-based-RTO-Management-System
Electronic Vehicle records the need for innovation. The way owner vehicle records are stored and secured today do not showcase our technological advancement in this area in the past decade, and R.T.O continue to use age-old data management systems for vehicle owner data. This is partly due to strict regulations around privacy and security of vehicle data, which has stifled the use of latest technology to make Vehicle data management more transparent and useful for both vehicle owner and government.

This architecture showcases a Vehicle data/access management platform built using blockchain. The application shows the platform from the point of view of 4 stakeholders – The State Transport admin is the admin of a State Transport system of the state, and has the highest of access levels in the hierarchy. They have the ability to onboard a new R.T.O to the system and manage particular R.T.O admins on their dashboard. Particular R.T.O admin is the admin of a particular R.T.O which is part of the state Transport System. They have the ability to onboard new vehicle users with the role of add or remove a vehicle user and its document. Particular R.T.O  is a user in the system with the appropriate role and has the ability to upload documents for their new vehicle owner or update and view documents of existing vehicle owner to which they have been granted access. The vehicle owner is a user in the transport system with the appropriate role and has the ability to view and verify documents with the official government officer in the R.T.O, and also view the document access logs on their dashboard.

# Architecture flow

![Architecture flow](docs/arch-flow.png?raw=true)

### Login flow
1.	All the stakeholders of the application (State Transport, R.T.O Registration Officer, Vehicle Owner and Traffic police) begin the user flow by logging into their respective dashboards.
2.	Clicking the login button leads to the login portal of the Blockchain Solution Manager, hosted on the IBM cloud.
3.	The login portal uses custom API Connect and allows the user the login through any onboarded identity system (in our example, for vehicle owner and traffic police we have on-boarded RFID system). Successful authentication leads to the JWT credentials for the user.
State Transport dashboard
4.	The State Transport flow begins at the State Transport component, and requires the  user to authenticate themselves through the login flow described above.
5.	After successful authentication, the user can access the solution admin dashboard. They are able to view the R.T.O Registration, and add/remove R.T.O from the solution using the State Transport API's.
6.	All the State Transport API's connect with the Blockchain Solution Manager through REST to process the user queries.
7.	The Blockchain Solution Manager connects with the IBM Blockchain Platform and updates the ledger appropriately.
### R.T.O dashboard
8.	The R.T.O flow begins at the R.T.O component, and requires the user to authenticate themselves through the login flow described above.
9.	After successful authentication, the user can access the R.T.O dashboard. They are able to add/remove/edit any Vehicle owner documents in their respective R.T.O using the organization API's.
10.	All the R.T.O API's connect with the Blockchain Solution Manager through REST to process the user queries.
11.	The Blockchain Solution Manager connects with the IBM Blockchain Platform and updates the ledger appropriately.
### Traffic Police dashboard
12.	The Traffic police flow begins at the Traffic police component, and requires the user to authenticate themselves through the login flow described above.
13.	After successful authentication, the user can access the Traffic Police dashboard. They are able to view a Vehicle record for a vehicle owner who is part of transport system and report any vehicle record associated with a vehicle owner to which they have access to, using the Traffic Police API's. The ACL's for all the vehicle documents is application level and is maintained through the Document ACL flow described below.
14.	All the Traffic Police API's connect with the Blockchain Document Store through REST to process the user queries.
15.	The Blockchain Document Store connects with the IBM Blockchain Platform and updates the ledger appropriately.
### Vehicle Owner dashboard
16.	The Vehicle owner flow begins at the Vehicle owner component, and requires the user to authenticate themselves through the login flow described above.
17.	After successful authentication, the user can access the vehicle dashboard. They are able to view record for themselves, download any of their vehicle records, view the access logs of their documents. The ACL's for all the documents is application level and is maintained through the document ACL flow described below.
18.	All the patient API's connect with the Blockchain Document Store through REST to process the user queries.
19.	The Blockchain Document Store connects with the IBM Blockchain Platform and updates the ledger appropriately.
### Document access control list (ACL) flow
20.	The Traffic Police and Vehicle owner component are connected with the Redis API's that invoke methods to manage the document level access control across hospitals.
21.	The Redis API's talk to a NodeJS server deployed in a Docker container in a Kubernetes cluster on the IBM Cloud.
22.	The server talks to two Redis databases which hold the access-per-document and access-per-user permissions.

