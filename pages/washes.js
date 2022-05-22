import { getSession } from "next-auth/react";
import { useEffect } from 'react';

export default ({setTitle}) => {

    useEffect(() => setTitle('Lavados'), []);

    return <h1>WASHES PAGE</h1>
}

export async function getServerSideProps(ctx){
    const session = await getSession(ctx);
    console.log(session);

    if(!session)
        return {
            redirect: {
                destination: "/landing",
                permanent: false
            }
        }

    return { props: {}}
}