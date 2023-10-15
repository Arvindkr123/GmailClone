import { addDoc, collection, doc } from "firebase/firestore";
import { auth, database } from "../firebase/setup";

class DatabaseService {
  async sendMailToAnyPerson(message) {
    const userDoc = doc(database, "Users", `${auth?.currentUser?.email}`);
    const messageRef = collection(userDoc, "Send");
    try {
      await addDoc(messageRef, {
        email: message,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async inbox(mailId, message) {
    const userDoc = doc(database, "Users", `${mailId}`);
    const messageRef = collection(userDoc, "Inbox");

    try {
      await addDoc(messageRef, {
        email: message,
        sender: auth?.currentUser?.displayName,
      });
      this.sendMailToAnyPerson(message);
    } catch (error) {
      console.log(error);
    }
  }
}

export const databaseService = new DatabaseService();
