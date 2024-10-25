import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../resources/css/shared.css'

export default function PageNotFound() {
    const [UserData, setUserData] = useState(null)

    useEffect(() => {
        console.log('Calling userData Api')
        axios
            .get('/users/getUserData')
            .then((res) => {
                console.log(res)
                setUserData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    if (UserData) {
        return (
            <div className="FullPageError">
                <h1>{UserData.Name}</h1>
                <h1>{UserData.Address}</h1>
                <h1>{UserData.DOB}</h1>
            </div>
        )
    } else {
        return (
            <div style={{ textAlign: 'center', color: 'white' }}>
                <h1>Loading...........</h1>
            </div>
        )
    }
}
