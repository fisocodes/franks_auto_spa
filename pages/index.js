import { getSession } from "next-auth/react";

export default ({user}) => {

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