import React, { useState } from "react";
import { mockProfiles } from "../../api/mockProfiles";

const QuickTransfer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [amount, setAmount] = useState("");
  const profilesPerPage = 3;

  const handleNavigation = () => {
    if (currentIndex + profilesPerPage >= mockProfiles.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + profilesPerPage);
    }
  };

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
    setAmount("");
  };

  const handleSend = () => {
    if (amount && selectedProfile) {
      alert(`Amount ${amount} transferred to ${selectedProfile.name}.`);
      setAmount("");
    }
  };

  const visibleProfiles = mockProfiles.slice(
    currentIndex,
    currentIndex + profilesPerPage
  );

  return (
    <>
      <h2 className="text-lg font-bold text-[#343C6A] mb-4">Quick Transfer</h2>
      <div className="p-6 bg-white rounded-2xl shadow-md max-w-md relative">
        <div className="flex items-center">
          {/* Profiles */}
          <div className="flex-1 overflow-hidden relative">
            <div
              className="flex transition-transform duration-300"
              style={{
                transform: `translateX(-${currentIndex * 80}px)`,
              }}
            >
              {mockProfiles.map((profile) => (
                <div
                  key={profile.id}
                  onClick={() => handleProfileClick(profile)}
                  className="text-center items-center justify-center cursor-pointer flex-shrink-0 w-[120px]"
                >
                  <img
                    src={profile.img}
                    alt={profile.name}
                    className="w-16 h-16 m-auto rounded-full mb-2"
                  />
                  <p
                    className={`${
                      selectedProfile?.id === profile.id
                        ? "font-bold text-[#232323]"
                        : "font-normal text-[#232323]"
                    }`}
                  >
                    {profile.name}
                  </p>
                  <p
                    className={`text-sm ${
                      selectedProfile?.id === profile.id
                        ? "font-bold text-[#718EBF]"
                        : "text-[#718EBF]"
                    }`}
                  >
                    {profile.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrow */}
          <button
            onClick={handleNavigation}
            className="ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-[#EDF1F7] shadow-md transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 text-[#343C6A] transform ${
                currentIndex + profilesPerPage >= mockProfiles.length
                  ? "rotate-180"
                  : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Input and Send Button */}
        <div className="mt-6">
          <div className="flex items-center ml-5">
            <input
              id="amount"
              type="text"
              placeholder="Write Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              disabled={!selectedProfile}
              className={`flex-1 bg-[#EDF1F7] h-12 px-4 text-[#718EBF] rounded-full placeholder-[#718EBF] focus:outline-none ${
                !selectedProfile && "cursor-not-allowed"
              }`}
            />
            <button
              onClick={handleSend}
              disabled={!selectedProfile || !amount}
              className={`bg-[#232323] text-white h-12 px-6 rounded-full flex items-center justify-center transition-opacity ${
                (!selectedProfile || !amount) && "opacity-50 cursor-not-allowed"
              }`}
            >
              Send
              <svg
                width="26"
                height="23"
                viewBox="0 0 26 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.9824 0.923369C26.1091 0.333347 25.5307 -0.164153 24.9664 0.0511577L0.490037 9.39483C0.195457 9.50731 0.000610804 9.78965 1.43342e-06 10.105C-0.000607937 10.4203 0.193121 10.7034 0.487294 10.817L7.36317 13.4726V21.8369C7.36317 22.1897 7.60545 22.4963 7.94873 22.5779C8.28972 22.659 8.64529 22.4967 8.80515 22.1796L11.6489 16.5364L18.5888 21.6868C19.011 22.0001 19.6178 21.8008 19.7714 21.2974C26.251 0.0528342 25.9708 0.97674 25.9824 0.923369ZM19.9404 3.60043L8.01692 12.092L2.88664 10.1106L19.9404 3.60043ZM8.8866 13.3428L19.2798 5.94118C10.3366 15.3758 10.8037 14.8792 10.7647 14.9317C10.7067 15.0096 10.8655 14.7058 8.8866 18.6327V13.3428ZM18.6293 19.8197L12.5206 15.2862L23.566 3.63395L18.6293 19.8197Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickTransfer;
