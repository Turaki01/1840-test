import storage from "./storage";

//logout functionality
export const handleLogout = () => {
  storage.clear();
  window.location.reload();
};
