import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ContactsPage from "./pages/Contacts";
import NotFoundPage from "./pages/NotFound";
import RootLayout from "./pages/Root";
import HomePage, { homePageLoader } from "./pages/Home";
import ContactDetailPage from "./pages/ContactDetail";
import {contactsLoader} from "./pages/Contacts";
import {contactsDetailLoader} from "./pages/ContactDetail";
import { ContactNotFoundPage } from "./pages/ContactNotFound";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path=""
      element={<RootLayout />}
      errorElement={<NotFoundPage />}>
        
      <Route index = {true} element={<HomePage />} loader = {homePageLoader} />

      <Route path="contacts" element={<ContactsPage />} loader = {contactsLoader} />
      
      <Route path="contacts/:contactId" element={<ContactDetailPage />} loader = {contactsDetailLoader} 
      errorElement={<ContactNotFoundPage />} />

    </Route>
  )
);

export default appRouter;

