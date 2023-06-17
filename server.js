const express = require('express');
const app = express();

// API part
app.get("/api", (req, res) => {
  res.json({ add: ["परिवार समग्र Id", "आधार कार्ड", "मोबाइल नं", "ग्राम", "वार्ड न", "भवन कर", "प्रकाश कर", "स्वच्छ कर", "विकास शुल्क","राशि / जमा / बाकि", "Upload Photo", "HouseNo." ] });
});
app.get("/api", (req, res) => {
  res.json({Admin:["Name", "Number", "Password"]});
})

app.get("/api", (req, res) => {
  res.json({Welcomeback:["Email address", "Password"]});
})

// code to maybe control access of the website
// const authenticateUser = (req, res, next) => {
//   // Check if user is authenticated and retrieve user role (e.g., from token or session)
//   const userRole = req.headers.authorization;

//   // Grant or deny access based on user role
//   if (userRole === 'superadmin') {
//     // Superadmin has access to all routes
//     next();
//   } else if (userRole === 'admin') {
//     // Admin has access to certain routes (e.g., data editing routes)
//     if (req.path === '/secured-route') {
//       res.status(403).json({ message: 'Access denied. Admin cannot access this route.' });
//     } else {
//       next();
//     }
//   } else if (userRole === 'user') {
//     // User has restricted access (viewing data routes)
//     if (req.path === '/edit-data' || req.path === '/admin-dashboard') {
//       res.status(403).json({ message: 'Access denied. User cannot access this route.' });
//     } else {
//       next();
//     }
//   } else {
//     // User is not authenticated
//     res.status(401).json({ message: 'Authentication required.' });
//   }
// };

// // Secured routes
// app.get('/secured-route', authenticateUser, (req, res) => {
//   // Only accessible to authenticated users (superadmin and admin)
//   res.json({ message: 'Secured route accessed successfully.' });
// });

// app.get('/edit-data', authenticateUser, (req, res) => {
//   // Only accessible to authenticated users (superadmin and admin)
//   res.json({ message: 'Edit data route accessed successfully.' });
// });

// app.get('/admin-dashboard', authenticateUser, (req, res) => {
//   // Only accessible to authenticated users 
//   res.json({ message: 'Admin dashboard route accessed successfully.' });
// });

// app.get('/', (req, res) => {
//   res.json({ message: 'Public route accessed successfully.' });
// });

// Start the server
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
