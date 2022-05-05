import { getSession } from "next-auth/react";

const axios =  require('axios').default;

export default function Employee({employee}){

    return <h1>{`${employee.firstname} ${employee.lastname1}`}</h1>
}

export async function getServerSideProps(ctx){
    const session = await getSession(ctx);
    const {employeeName} = ctx.query;

    if(!session)
        return {
            redirect: {
                destination: "/landing",
                permanent: false
            }
        }

    const response =  await axios.get(`${process.env.BASE_URL}/api/employees/${employeeName}`);

    return {
        props: {
            user: session ? session.user : null,
            employee: response.data
        }
    }
}