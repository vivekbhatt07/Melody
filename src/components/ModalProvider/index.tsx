import { FC, ReactNode } from "react";
import { Modal } from "@mui/material";
import { Close } from "@mui/icons-material";
import { IconAction } from "../../components";

interface ModalProviderType {
  children: ReactNode;
  OpenAction: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
  title: string;
}

const ModalProvider: FC<ModalProviderType> = (props) => {
  const { children, OpenAction, isOpen, closeModal, title } = props;
  return (
    <div>
      {OpenAction}
      <Modal open={isOpen} onClose={closeModal}>
        <div className="text-800 bg-[#ddd] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-400px xl:w-[800px] bg-200 p-4 flex flex-col gap-4 rounded dark:text-50 dark:bg-800">
          <div className="flex justify-between items-center">
            <span className="font-medium">{title}</span>
            <IconAction
              onClick={() => closeModal()}
              className="text-950 dark:text-50 hover:text-950 hover:dark:text-950"
            >
              <Close className="text-50" />
            </IconAction>
          </div>
          <div className="bg-[#fff] rounded-md dark:bg-900 overflow-hidden p-4">
            {children}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalProvider;
