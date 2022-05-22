import { getSession } from "next-auth/react";
import { useEffect } from 'react';

export default ({setTitle}) => {

    useEffect(() => setTitle('Panel'), []);

    return (
        <>
            <h1>DASHBOARD PAGE</h1>
        </>
    );
}

export async function getServerSideProps(ctx){
    const session = await getSession(ctx);

    if(!session)
        return {
            redirect: {
                destination: "/landing",
                permanent: false
            }
        }

    return {
        props: {
            user: session ? session.user : null
        }
    }
}