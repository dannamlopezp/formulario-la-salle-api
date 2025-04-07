
var admin = require("firebase-admin");

var serviceAccount = require("../formulario-la-salle.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const db = admin.firestore();