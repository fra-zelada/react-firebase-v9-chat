import { UserCredential } from "firebase/auth";
import { FC } from "react";

interface Props {
    message?: string;
    uid?: string;
    photoURL?: string;
    user: UserCredential | undefined;
}

const ChatMessage: FC<Props> = ({ message, uid, photoURL, user }) => {
    const messageClass = uid === user?.user.uid ? "sent" : "received";

    return (
        <>
            <div className={`message ${messageClass}`}>
                <img src={photoURL} />
                <p>{message}</p>
            </div>
        </>
    );
};

export default ChatMessage;
