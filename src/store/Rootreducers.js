import { combineReducers } from "redux";
import CustomizerReducer from "./customizer/CustomizerReducer";
import chatReducer from "./chats/ChatReducer";
import notesReducer from "./notes/NotesReducer";
import emailReducer from "./email/EmailReducer";
import authReducer from "./auth/authReducer";

const RootReducers = combineReducers({
  CustomizerReducer,
  chatReducer,
  notesReducer,
  emailReducer,
  authReducer,
});

export default RootReducers;
