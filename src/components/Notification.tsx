import React, { FC } from "react";
type NotificationProps = {
  message: string;
  failure?: boolean;
};
export const Notification: FC<NotificationProps> = ({ message, failure }) => {
  return (
   <>
   {message.length>0 && <div className="p-6 m-6 bg-white rounded">
      <p
        className={
          failure
            ? `text-sm text-red-800 font-bold`
            : `text-sm text-green-800 font-bold`
        }
      >
        {message}
      </p>
    </div>}
   </>
  );
};
