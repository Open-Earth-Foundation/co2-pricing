import { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'

import BaseLayout from 'src/layouts/BaseLayout'


const NotFound = () => {
    const router = useRouter()
    const [counter, setCounter] = useState(3);

    useEffect(() => {
        let _timeout: ReturnType<typeof setTimeout>;
        if (counter <= 0) {

            router.push('/')
        } else {
            _timeout = setTimeout(() => setCounter(counter - 1), 1000);
        }
        return () => clearTimeout(_timeout)
    }, [router, counter]);

    return <>
        <h1>404 - Page Not Found</h1>
        <Link href="/">
            <Button variant='contained'>
                Go back home (In {counter} seconds...)
            </Button>
        </Link>
    </>
}

NotFound.getLayout = BaseLayout

export default NotFound
