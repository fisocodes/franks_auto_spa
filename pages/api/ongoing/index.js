const washes = [];

export default async (req, res) => {
    if(req.method === 'GET')
    {
        res.json({washes});
    }

    if(req.method === 'POST')
    {
        washes.push(req.body);
        console.log(washes);
        res.json({washes});
    }

}