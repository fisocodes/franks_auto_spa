import { useRouter } from 'next/router';

import { Button } from '@mantine/core';

import { MdPersonAddAlt1 } from 'react-icons/md';

const NewEmployeeButton = () => {
    const router = useRouter();
    return <Button fullWidth leftIcon={<MdPersonAddAlt1/>} onClick={() => router.push("/employees/new")}>Nuevo</Button>
}

export default NewEmployeeButton;