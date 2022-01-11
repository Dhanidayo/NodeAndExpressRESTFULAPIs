import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model('Contact', ContactSchema);

// POST
export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

// GET ALL
export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

// GET ONE
export const getContactWithID = (req, res) => {
    Contact.findById(req.params.contactID, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

// PUT
// "_id" was gotten from the response body in postman
export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id: req.params.contactID }, req.body, { new: true, useFindAndModify: false }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

// DELETE
export const deleteContact = (req, res) => {
    Contact.remove({ _id: req.params.contactID }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'contact successfully deleted'});
    });
}