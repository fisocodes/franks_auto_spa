import { getSession } from "next-auth/react";

import LandingHeader from "../components/LandingHeader"

export default ({user}) => {
    return <LandingHeader/>
}

export async function getServerSideProps(ctx){
    const session = await getSession(ctx);

    if(session)
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }

    return {
        props: {
            user: session ? session.user : null
        }
    }
}