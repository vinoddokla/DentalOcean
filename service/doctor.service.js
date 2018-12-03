const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

const Doctor = db.Doctor;

module.exports = {
    create,
    getAllDoctors
};

async function create(docParam) {
    const doctor = new Doctor(docParam);
    //check is required there is an issue if sent a fake data.
    doctor.docId = docParam.firstName.charAt(0).toUpperCase()
                        +docParam.lastName.charAt(0).toUpperCase()
                        +'-'
                        +Math.floor((1 + Math.random()) * 0x10000);
    await doctor.save();
}

async function getAllDoctors() {
    return Doctor.find({});
}