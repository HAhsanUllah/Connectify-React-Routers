import { contact } from "../types";

const apiUrl = 'https://api.randomuser.me/';
const apiSeed = 'codeWithAhsan';
const resultsCount = 50;

export const getContacts =  async () => {
	const response = await fetch(`${apiUrl}?results=${resultsCount}&seed=${apiSeed}`);
    const data = await response.json();
    return data.results as contact[];
}

export const getContactById = async (uuid: string) => {
    const contacts = await getContacts();
    return contacts.find(contact => contact.login.uuid === uuid);
    }