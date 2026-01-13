"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
  city: string;
  university: string;
  status: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    const isAuth = sessionStorage.getItem("adminAuth");
    if (!isAuth) {
      router.push("/admin");
      return;
    }

    fetchContacts();
  }, [router]);

  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/admin/contacts");
      if (response.ok) {
        const data = await response.json() as { contacts: Contact[] };
        setContacts(data.contacts || []);
      } else {
        console.error("Failed to fetch contacts:", response.statusText);
        setContacts([]);
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
      setContacts([]);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: number, newStatus: string) => {
    try {
      const response = await fetch("/api/admin/contacts", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (response.ok) {
        // Update local state
        setContacts((prev) =>
          prev.map((contact) =>
            contact.id === id ? { ...contact, status: newStatus } : contact
          )
        );
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth");
    router.push("/admin");
  };

  const filteredContacts = contacts.filter((contact) =>
    filter === "all" ? true : contact.status === filter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-gray-100 text-gray-800";
      case "not_interested":
        return "bg-red-100 text-red-800";
      case "ringing":
        return "bg-yellow-100 text-yellow-800";
      case "interested":
        return "bg-blue-100 text-blue-800";
      case "admission_done":
        return "bg-orange-100 text-orange-800";
      case "wrong_number":
        return "bg-pink-100 text-pink-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const stats = {
    total: contacts.length,
    new: contacts.filter((c) => c.status === "new").length,
    not_interested: contacts.filter((c) => c.status === "not_interested").length,
    ringing: contacts.filter((c) => c.status === "ringing").length,
    interested: contacts.filter((c) => c.status === "interested").length,
    admission_done: contacts.filter((c) => c.status === "admission_done").length,
    wrong_number: contacts.filter((c) => c.status === "wrong_number").length,
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm font-medium text-gray-600">Total Leads</div>
            <div className="text-3xl font-bold text-gray-900">{stats.total}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm font-medium text-gray-600">New</div>
            <div className="text-3xl font-bold text-gray-900">{stats.new}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm font-medium text-red-600">Not Interested</div>
            <div className="text-3xl font-bold text-red-900">
              {stats.not_interested}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm font-medium text-yellow-600">Ringing</div>
            <div className="text-3xl font-bold text-yellow-900">{stats.ringing}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm font-medium text-blue-600">Interested</div>
            <div className="text-3xl font-bold text-blue-900">
              {stats.interested}
            </div>
          </div>
        </div>

        {/* Filter */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              All ({stats.total})
            </button>
            <button
              onClick={() => setFilter("new")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "new"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              New ({stats.new})
            </button>
            <button
              onClick={() => setFilter("not_interested")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "not_interested"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Not Interested ({stats.not_interested})
            </button>
            <button
              onClick={() => setFilter("ringing")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "ringing"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Ringing ({stats.ringing})
            </button>
            <button
              onClick={() => setFilter("interested")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "interested"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Interested ({stats.interested})
            </button>
            <button
              onClick={() => setFilter("admission_done")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "admission_done"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Admission Done ({stats.admission_done})
            </button>
            <button
              onClick={() => setFilter("wrong_number")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "wrong_number"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Wrong Number ({stats.wrong_number})
            </button>
          </div>
        </div>

        {/* Contacts Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    City
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    University
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created At
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredContacts.length === 0 ? (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No contacts found
                    </td>
                  </tr>
                ) : (
                  filteredContacts.map((contact) => (
                    <tr key={contact.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {contact.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {contact.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {contact.phone}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {contact.email || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {contact.city}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {contact.university}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={contact.status}
                          onChange={(e) =>
                            updateStatus(contact.id, e.target.value)
                          }
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                            contact.status
                          )}`}
                        >
                          <option value="new">New</option>
                          <option value="not_interested">Not Interested</option>
                          <option value="ringing">Ringing</option>
                          <option value="interested">Interested</option>
                          <option value="admission_done">Admission Done</option>
                          <option value="wrong_number">Wrong Number</option>
                        </select>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
