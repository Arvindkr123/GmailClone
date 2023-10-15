export const firebaseConfigImp = {
  apiKey: String(import.meta.env.VITE_api_Key),
  authDomain: String(import.meta.env.VITE_auth_domain),
  projectId: String(import.meta.env.VITE_project_id),
  storageBucket: String(import.meta.env.VITE_storageBucket),
  messagingSenderId: String(import.meta.env.VITE_messagingSenderId),
  appId: String(import.meta.env.VITE_appId),
};
