import { Link, useLoaderData } from "react-router-dom";
import { getContacts } from "../api/contactsApi"; 
import { contact } from "../types"; 

export const homePageLoader = async () => {
  const contact = await getContacts();
  const firstThreeContacts = contact.slice(0, 3); // Get only the first 3 contacts
  return { contact: firstThreeContacts }; // Return the first 3 contacts
};


const HomePage = () => {
  const { contact } = useLoaderData() as Awaited<ReturnType<typeof homePageLoader>>;

  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Welcome to Our Contact Directory
        </h1>
        <p className="text-center text-lg text-gray-600 mb-6">
          Browse through the contacts in our directory to view more details.
        </p>

        {/* Displaying first 3 contacts as cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {contact.map((contactItem: contact) => (
            <div
              key={contactItem.login.uuid}
              className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg hover:bg-gray-100 transition-colors"
            >
              <img
                src={contactItem.picture.medium}
                alt={`${contactItem.name.first} ${contactItem.name.last}`}
                className="w-24 h-24 rounded-full border-2 border-gray-300 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {`${contactItem.name.first} ${contactItem.name.last}`}
              </h3>
              <p className="text-gray-600">{contactItem.email}</p>
              <Link
                to={`/contacts/${contactItem.login.uuid}`}
                className="mt-4 btn btn-primary btn-sm"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>

        {/* Button to view all contacts */}
        <div className="text-center">
          <Link to="/contacts" className="btn btn-secondary">
            Show All Contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

