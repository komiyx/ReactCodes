import {useEffect, useState} from 'react'


export default function Test() 
{

    const [isOnline, setisOnline] = useState(true);

    function handleOnline ()
    {
        setisOnline(true);
    }

    function handleOffline ()
    {
        setisOnline(false);
    }

    function handleSave()
    {
        console.log('Progress saved');

    }

    return (
        
        <button disabled={!isOnline} onClick={handleSave}>{isOnline ? 'save progress' : 'Reconnecting...'}</button>
    )

}
