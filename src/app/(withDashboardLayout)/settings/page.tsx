'use client'
import { useState } from "react";

export default function SettingsPage() {
  const [siteName, setSiteName] = useState("MovieHub");
  const [siteDescription, setSiteDescription] = useState("Download your favorite movies in high quality");
  const [contactEmail, setContactEmail] = useState("contact@moviehub.com");

  const [facebookLink, setFacebookLink] = useState("https://facebook.com/yourusername");
  const [twitterLink, setTwitterLink] = useState("https://twitter.com/yourusername");
  const [instagramLink, setInstagramLink] = useState("https://instagram.com/yourusername");

  const handleSaveGeneral = () => {
    // Save General Settings (Mocked here)
    alert("General settings saved!");
  };

  const handleSaveSocial = () => {
    // Save Social Media Settings (Mocked here)
    alert("Social media links saved!");
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-gray-500">Manage your website settings and preferences.</p>
        </div>
      </div>

      {/* General Settings */}
      <div className="bg-white border rounded-xl p-6 shadow-sm space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">General</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Site Name</label>
            <input
              type="text"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Site Description</label>
            <textarea
              value={siteDescription}
              onChange={(e) => setSiteDescription(e.target.value)}
              placeholder="Description of your website"
              className="w-full mt-1 px-4 py-2 border rounded-lg min-h-[100px]"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Contact Email</label>
            <input
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSaveGeneral}
            className="bg-[#e11d48] hover:bg-[#e11d47d3] text-white px-6 py-2 rounded-lg"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Social Media Settings */}
      <div className="bg-white border rounded-xl p-6 shadow-sm space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Social Media</h2>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Facebook</label>
            <input
              type="url"
              value={facebookLink}
              onChange={(e) => setFacebookLink(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Twitter</label>
            <input
              type="url"
              value={twitterLink}
              onChange={(e) => setTwitterLink(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Instagram</label>
            <input
              type="url"
              value={instagramLink}
              onChange={(e) => setInstagramLink(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSaveSocial}
            className="bg-[#e11d48] hover:bg-[#e11d47d3] text-white px-6 py-2 rounded-lg"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
