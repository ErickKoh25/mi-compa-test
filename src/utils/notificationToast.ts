import { toast, ToastPromiseParams, TypeOptions } from "react-toastify";

const showToast = (severity:TypeOptions, message:string) => {
  const severityOptions = ["error", "warning", "success", "info"];

  if(!severity) {
    throw new Error(
        "TOAST ERROR: only error, warning, success and info severity options are allowed ",
      );
  }

  if (!severityOptions.includes(severity)) {
    throw new Error(
      "TOAST ERROR: only error, warning, success and info severity options are allowed ",
    );
  }

  if (typeof message !== "string") {
    throw new Error("TOAST ERROR: message should be an string");
  }
  
  toast(message, {
    type: severity,
    position: "top-right",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const promiseToast = (promise: Promise<unknown> | (() => Promise<unknown>), messages: ToastPromiseParams<unknown>) => toast.promise(promise, messages, {
  position: "bottom-left",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
});

export const closeToast = () => {
  toast.dismiss();
};

export default showToast;
