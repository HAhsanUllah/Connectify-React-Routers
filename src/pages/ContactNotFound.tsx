import { Link } from 'react-router-dom';

export const ContactNotFoundPage = () => {
  return <>
    <h1>Contact not found</h1>
    <Link to="/contacts">Back to contacts</Link>
  </>
}
