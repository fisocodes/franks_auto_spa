import { getSession } from "next-auth/react";

export default () => {
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