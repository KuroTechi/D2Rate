import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";

export const initDevMessages = () => {
  loadDevMessages();
  loadErrorMessages();
};
