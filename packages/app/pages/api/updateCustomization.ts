import { initializeApp } from 'firebase/app';
import { collection, doc, setDoc, getFirestore } from 'firebase/firestore/lite';
import type { NextApiRequest, NextApiResponse } from 'next'
import { firebaseConfig } from '../../components/constants';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "POST":
            const app = initializeApp(firebaseConfig);
            const db = getFirestore(app);
            const urlCol = collection(db, 'customizations');
            const contractDoc = doc(urlCol, req.body.data['contractAddr']);
            setDoc(contractDoc, req.body.data)
                .then(() => {
                    res.status(200).json({});
                });
            break;
        default:
            res.setHeader("Allow", ["POST"]);
            res.status(405).end(`Method ${req.method} Not Allowed`);
            break;
    }
}