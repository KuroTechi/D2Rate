import SettingsIcon from "../../../UI/icons/Settings";

const SettingsButton = () => {
  return (
    <button className="button--interactive" aria-label="Settings">
      <SettingsIcon className="icon--interactive icon--default-color" />
    </button>
  );
};
export default SettingsButton;
