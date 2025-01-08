import { Link, useLoaderData } from "react-router-dom";
import { getContacts } from "../api/contactsApi";
import { useState } from "react";

export const contactsLoader = async () => {
  const contact = await getContacts();
  return { contact };
};

const ContactsPage = () => {
  const { contact } = useLoaderData() as Awaited<ReturnType<typeof contactsLoader>>;

  // State for search query
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Function to filter contacts based on the search query
  const filteredContacts = contact.filter((contactItem: any) => {
    const fullName = `${contactItem.name.first} ${contactItem.name.last}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-base-100 py-10">
      <div className="w-full max-w-4xl px-4 sm:px-6 md:px-8 mx-auto">
        
        {/* Title and Search Bar in the Same Line */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-center text-white-800">
            Contacts List
          </h1>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by name..."
            className="p-3 w-1/2 md:w-1/3 bg-inherit border border-gray-300 rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Contact List */}
        <ul className="space-y-6">
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contactItem: any) => (
              <li
                key={contactItem.login.uuid}
                className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-4 hover:bg-gray-200 transition-colors duration-200"
              >
                <img
                  src={contactItem.picture.medium}
                  alt={`${contactItem.name.first} ${contactItem.name.last}`}
                  className="w-16 h-16 rounded-full border border-gray-300 mb-4 md:mb-0 md:mr-6"
                />
                <div className="text-center md:text-left">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {`${contactItem.name.first} ${contactItem.name.last}`}
                  </h2>
                  <p className="text-sm text-gray-600">{contactItem.email}</p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-auto">
                  <Link
                    to={`/contacts/${contactItem.login.uuid}`}
                    className="btn btn-primary btn-sm"
                  >
                    View Details
                  </Link>
                </div>
              </li>
            ))
          ) : (
            <li className="text-center text-gray-600">No contacts found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ContactsPage;
