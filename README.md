# BloodSend

**BloodSend** is a web application that connects blood donors with patients in need of blood. The platform allows users to register as donors or request blood donations based on their location and blood type.


**bloodsend.onrender.com** (Website may take ~ 30 seconds to load)

---

## Features
- **User Registration:** Users can sign up as donors or requesters.
- **Location-Based Matching:** Find donors within a specific distance.
- **Blood Type Filtering:** Match patients with compatible donors.
- **Real-Time Updates:** Refresh the list of available donors dynamically.

---

## Tech Stack
- **Frontend:** EJS, HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Database:** MongoDB

---

## Usage
1. Open the site in your browser at **bloodsend.onrender.com**. 
2. Register as a donor or a patient in need.
3. Use the location-based filter to find nearby donors.
4. Contact a donor through the provided contact information via their account.

---

# API Endpoints

GET	`/api/users`	
Retrieves a list of all users with their first name, last name, and location.

GET	`/api/near-users`
Finds nearby users based on the current user's location and filters by donor/requester membership.

GET	`/api/near-users-point`	
Finds nearby users based on latitude longitude and maximumDistance provided as query parameters.


