import { addNewContact,
        getContacts,
        getContactWithID,
        updateContact,
        deleteContact
} from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
        // GET ALL CONTACTS
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContacts)
        
        // POST ENDPOINT
        .post(addNewContact);

    app.route('/contact/:contactID')
        // GET A SPECIFIC CONTACT
        .get(getContactWithID)

        //UPDATE A SPECIFIC CONTACT
        .put(updateContact)

        // DELETE A SPECIFIC CONTACT
        .delete(deleteContact);
}

export default routes;