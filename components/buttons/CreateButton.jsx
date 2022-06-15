import { useState } from 'react';

import { Button } from '@mantine/core';

import { MdCreate } from 'react-icons/md'

const CreateButton = ({onClick}) => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        onClick();
    }

    return <Button color="yellow" leftIcon={<MdCreate/>} onClick={handleClick} loading={loading}>Create</Button>
}

export default CreateButton;