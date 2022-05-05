import { getSession } from "next-auth/react";

export default ({user, ongoing}) => {
    return <h1>WASHES PAGE</h1>
}

export async function getServerSideProps(ctx){

    if(!session)
        return {
            redirect: {
                destination: "/landing",
                permanent: false
            }
        }

    return {
        props: {
            user: session ? session.user : null,
            ongoing,
        }
    }
}