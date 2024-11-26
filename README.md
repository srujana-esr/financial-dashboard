Financial Dashboard
This Financial Dashboard project is a user-centric web application designed to provide a seamless experience for financial management. It includes a variety of features like transaction tracking, quick transfers, balance history visualization, and user settings management. The application emphasizes clean UI/UX design, responsiveness, and scalability.

Features
1. Dashboard Overview
Displays an overview of the user’s financial status.
Widgets include:
Quick Transfer: Easily transfer money to frequently contacted profiles.
Balance History: Visualizes monthly balance trends using a smooth, gradient-filled line chart.
2. Quick Transfer
Displays a scrollable list of frequently contacted profiles with their name and designation.
Features:
Profile Selection: Highlights the selected profile and enables the input field for transfer amount.
Amount Transfer: Alerts the user after successfully transferring an amount.
Responsive design for desktop and mobile screens.
3. Balance History
A line chart visualizes the balance trend over the last 7 months.
Features:
Smooth curves with a gradient fill (linear-gradient(180deg, rgba(45, 96, 255, 0.25) 0%, rgba(45, 96, 255, 0) 100%)).
Customized tooltips and gridlines for better readability.
Responsive for smaller screens.
4. Settings Page
Provides a clean interface for managing user profile settings.
Features:
Tabs: Includes "Edit Profile," "Preferences," and "Security" sections.
Profile Editing:
Update personal details like name, username, email, password, address, etc.
Upload/edit profile pictures with a live preview.
Responsive design:
Desktop: Three-column layout.
Mobile: Single-column layout.
Technologies Used
React 19: The latest React version for reusable, component-driven development.
Chart.js: For rendering interactive and visually appealing charts.
Tailwind CSS: For rapid styling and responsiveness.
FileReader API: For dynamic profile picture upload.
Mock APIs: Simulated APIs for profile data and financial statistics.
How to Run the Project
Clone this repository:

bash
Copy code
git clone https://github.com/srujana-esr/financial-dashboard.git
cd financial-dashboard
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open your browser at http://localhost:3000 to view the application.

Components Overview
QuickTransfer
Purpose: Enables users to transfer money to frequently contacted profiles.
Features:
Smooth transitions between profile lists.
Amount input validation and disabled state for unselected profiles.
Alerts on successful transfers.
Techniques:
useState for state management of profiles and transfer amount.
Conditional rendering for interactivity.
BalanceHistory
Purpose: Visualizes monthly financial trends.
Features:
Gradient-filled line charts with smooth curves.
Custom tooltips and axis ticks for user-friendly readability.
Techniques:
Chart.js for chart rendering.
Mock data integration for development testing.
SettingsPage
Purpose: Allows users to manage their profile and account settings.
Features:
Profile picture upload using FileReader API.
Editable input fields for personal information.
Responsive layout with three tabs: Edit Profile, Preferences, Security.
Techniques:
Modular components for better reusability (e.g., ProfilePicture, FormField).
Conditional rendering for mobile and desktop layouts.
Responsive Design
Fully responsive across all devices.
Desktop: Multi-column layouts for better utilization of screen space.
Mobile: Single-column layouts with stacked components for usability.
Future Improvements
Performance
Code Splitting:
Use React.lazy and Suspense for dynamic imports of less critical components.
State Management:
Replace local state with Redux or Zustand for better scalability.
Optimization:
Debounce input handlers to reduce re-renders during typing.
Lazy load images for better performance.
Usability
Form Validation:
Add inline validation for email, password, and other fields using libraries like Formik or Yup.
Tab Persistence:
Remember the last active tab using localStorage or URL parameters.
Internationalization:
Add support for multiple languages using libraries like react-i18next.
Scalability
API Integration:
Replace mock APIs with real backend services.
Micro-Frontend Architecture:
Break the application into smaller, independent frontend modules for scalability.
File Structure
The project is organized for readability and maintainability:



Author
Srujana ESR

License
This project is licensed under the MIT License.
