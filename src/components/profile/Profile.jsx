import React from "react";

function UserProfile() {
  const user = {
    name: "Amir Khan",
    email: "amir@example.com",
    phone: "+92 300 1234567",
    address: "Karachi, Pakistan",
  };

  return (
    <div className="bg-white w-70 rounded-2xl shadow-2xl p-4 transition hover:scale-105 duration-300">

        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full bg-[#7f4f2a] text-white flex items-center justify-center text-3xl font-bold shadow-md">
            {user.name.charAt(0)}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          User Profile
        </h2>

        {/* Info */}
        <ProfileItem label="Name" value={user.name} />
        <ProfileItem label="Email" value={user.email} />
        <ProfileItem label="Phone" value={user.phone} />
        <ProfileItem label="Address" value={user.address} />

        {/* Button */}
        <button className="w-full mt-6 bg-[#7f4f2a] text-white py-2 rounded-lg font-semibold hover:bg-[#532e10] transition">
          Logout
        </button>

      </div>
  );
}

function ProfileItem({ label, value }) {
  return (
    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg mb-3 hover:bg-indigo-50 transition">
      <span className="font-normal text-gray-700 text-[12px]">{label}</span>
      <span className="text-gray-600 text-[12px]">{value}</span>
    </div>
  );
}

export default UserProfile;
