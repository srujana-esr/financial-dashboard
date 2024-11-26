import React, { useState } from "react";

// Tabs
const TABS = ["Edit Profile", "Preferences", "Security"];

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("Edit Profile");
  const [formData, setFormData] = useState({
    name: "Charlene Reed",
    username: "Charlene Reed",
    email: "charlenereed@gmail.com",
    password: "********",
    dob: "25 January 1990",
    presentAddress: "San Jose, California, USA",
    permanentAddress: "San Jose, California, USA",
    city: "San Jose",
    postalCode: "45962",
    country: "USA",
  });
  const [profilePicture, setProfilePicture] = useState(
    "https://via.placeholder.com/150" // Default profile picture
  );

  const handleTabChange = (tab) => setActiveTab(tab);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    alert("Changes saved successfully!");
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicture(e.target.result); // Update profile picture preview
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md max-w-5xl mx-auto md:mt-8">
      <h2 className="text-lg font-bold text-[#343C6A] mb-4">Setting</h2>

      {/* Tabs */}
      <div className="flex border-b mb-6">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`pb-2 px-4 border-b-2 transition-colors ${
              activeTab === tab
                ? "border-[#343C6A] text-[#343C6A]"
                : "border-transparent text-gray-400"
            }`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      {activeTab === "Edit Profile" && (
        <EditProfile
          formData={formData}
          onInputChange={handleInputChange}
          profilePicture={profilePicture}
          onProfilePictureChange={handleProfilePictureChange}
        />
      )}

      {/* Save Button */}
      <div className="mt-6 text-right">
        <button
          className="bg-[#343C6A] text-white px-6 py-2 rounded-lg"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

const EditProfile = ({
  formData,
  onInputChange,
  profilePicture,
  onProfilePictureChange,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Profile Picture Section */}
      <ProfilePicture
        profilePicture={profilePicture}
        onProfilePictureChange={onProfilePictureChange}
      />

      {/* Form Section */}
      <div className="md:col-span-2">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(formData).map(([field, value]) => (
              <div key={field}>
                <label
                  className="block text-[#343C6A] text-sm mb-2 capitalize"
                  htmlFor={field}
                >
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  id={field}
                  type={field === "password" ? "password" : "text"}
                  value={value}
                  onChange={(e) => onInputChange(field, e.target.value)}
                  className="w-full border border-[#DFEAF2] rounded-lg p-2 text-sm text-gray-500"
                />
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

const ProfilePicture = ({ profilePicture, onProfilePictureChange }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4">
      <img
        src={profilePicture}
        alt="Profile"
        className="w-full h-full object-cover"
      />
      <label
        htmlFor="profilePicture"
        className="absolute bottom-0 right-0 bg-[#343C6A] p-2 rounded-full cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.232 5H21.5V11.268M21.5 5L13 13.5M21.5 5L9.5 16.5M9.5 13.5L5.5 17.5M12.5 19.5L5.5 17.5"
          />
        </svg>
      </label>
      <input
        id="profilePicture"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onProfilePictureChange}
      />
    </div>
    <p className="text-[#343C6A] font-bold">Edit Profile Picture</p>
  </div>
);

export default SettingsPage;
