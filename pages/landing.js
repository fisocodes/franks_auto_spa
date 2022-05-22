import { getSession } from "next-auth/react";
import { useEffect } from "react";

import LandingHeader from "../components/LandingHeader"

export default ({setTitle}) => {

    useEffect(() => setTitle("Frank's Auto Spa"), []);

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
    
    return { props: {}}
}