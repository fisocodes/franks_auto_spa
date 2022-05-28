import { getSession } from "next-auth/react";
import { useEffect } from "react";

const axios =  require('axios').default;

export default ({setTitle, washes}) => {

    useEffect(() => {
        setTitle('Lavados');
        console.log(washes);
    }, []);

    return <h1>Washes page</h1>
}

export async function getServerSideProps(ctx){
    const session = await getSession(ctx);
    
    const washesResponse =  await axios.get(`${process.env.BASE_URL}/api/ongoing`);
    const employeesresponse =  await axios.get(`${process.env.BASE_URL}/api/employees`);
    

    if(!session)
        return {
            redirect: {
                destination: "/landing",
                permanent: false
            }
        }

    return { props: {washes: washesResponse.data.washes}}
}