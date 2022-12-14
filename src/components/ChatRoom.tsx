import { FirebaseApp } from "firebase/app";
import { UserCredential } from "firebase/auth";
import {
    addDoc,
    collection,
    getFirestore,
    limit,
    orderBy,
    query,
    serverTimestamp,
} from "firebase/firestore";
import React, { FC, useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";

interface Props {
    app: FirebaseApp;
    user: UserCredential | undefined;
}

const ChatRoom: FC<Props> = ({ app, user }) => {
    const messageRef = collection(getFirestore(app), "messages");
    const appQuery = query(messageRef, orderBy("createdAt", "desc"), limit(40));
    const [value, loading, error, snapshot] = useCollectionData(appQuery, {
        snapshotListenOptions: { includeMetadataChanges: true },
    });
    const [formValue, setFormValue] = useState("");
    const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { uid, photoURL } = user!!.user;

        let message = formValue;
        setFormValue("");

        await addDoc(messageRef, {
            uid,
            photoURL,
            text: message,
            createdAt: serverTimestamp(),
        });
        if (dummy.current !== null)
            dummy.current!.scrollIntoView({ behavior: "smooth" });
    };

    const dummy = useRef<HTMLHeadingElement>(null);
    return (
        <div>
            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && <span>Collection: Loading...</span>}
            {value && (
                <>
                    <main>
                        {value.map((doc) => {
                            return (
                                <ChatMessage
                                    key={doc.id}
                                    message={doc.text}
                                    uid={doc.uid}
                                    photoURL={doc.photoURL}
                                    user={user}
                                />
                            );
                        })}
                    </main>
                    <span ref={dummy}></span>
                    <form onSubmit={(e) => sendMessage(e)}>
                        <input
                            value={formValue}
                            onChange={(e) => setFormValue(e.target.value)}
                        />
                        <button type="submit">Send</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default ChatRoom;
