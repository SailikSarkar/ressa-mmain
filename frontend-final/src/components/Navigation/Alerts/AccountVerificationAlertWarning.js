import { useDispatch, useSelector } from "react-redux";
import { ExclamationIcon } from "@heroicons/react/solid";
import { accVerificationSendTokenAction } from "../../../redux/slices/accountVerification/accVerificationSlices";

export default function AccountVerificationAlertWarning() {
  const dispatch = useDispatch();
  return (
    <div className="bg-red-500 border-l-4 border-yellow-400 p-2 ">
      <div className="flex">
        <div className="">
          <ExclamationIcon
            className="h-5 w-5 text-yellow-300"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-300">
            Your account is not verified.{" "}
            <button
              onClick={() => dispatch(accVerificationSendTokenAction())}
              className="font-medium  text-green-200 hover:text-red-300"
            >
              Click here to verify
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
