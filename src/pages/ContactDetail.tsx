import { getContactById } from "../api/contactsApi";
import { useLoaderData } from "react-router-dom";

export const contactsDetailLoader = async ({ params }) => {
  const contact = await getContactById(params.contactId);

  if (!contact) {
    throw new Error('Contact not found');
  }

  return {
    contact
  };
};

const ContactDetailPage = () => {
  const { contact } = useLoaderData() as Awaited<ReturnType<typeof contactsDetailLoader>>;

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center py-10">
      <div className="w-full max-w-2xl p-6 bg-white shadow-lg rounded-lg">
        {/* Header with Profile Picture and Name */}
        <div className="flex items-center mb-6">
          <img
            src={contact?.picture.medium} // Smaller profile picture
            alt={`${contact?.name.first} ${contact?.name.last}`}
            className="w-20 h-20 rounded-full border-2 border-gray-300 mr-6" // Smaller profile image
          />
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">{contact?.name.first} {contact?.name.last}</h1>
            <p className="text-lg text-gray-600">{contact?.email}</p>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Phone:</h2>
            <p className="text-gray-600">{contact?.phone}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700">Location:</h2>
            <p className="text-gray-600">{contact?.location.city}, {contact?.location.state}, {contact?.location.country} - {contact?.location.postcode}</p>
          </div>

          {/* Adding Additional Details */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700">UUID:</h2>
            <p className="text-gray-600">{contact?.login.uuid}</p>
          </div>
        </div>

        {/* Contact Button */}
        <div className="mt-6 text-center">
          <a
            href={`mailto:${contact?.email}`}
            className="btn btn-primary"
          >
            Contact {contact?.name.first}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailPage;
