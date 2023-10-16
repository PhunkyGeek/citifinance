import { useNavigate } from "react-router-dom"


// const navigate = useNavigate();

// // Define the base URL for your API server
// const BASE_URL = "http://your-api-server-url"; // Replace with your API server URL

// // Function to fetch user data from the API
// export const fetchUserData = async (userId) => {
//   try {
//     const response = await fetch(`${BASE_URL}/api/user/${userId}`);
//     if (!response.ok) {
//       throw new Error("Failed to fetch user data");
//     }
//     const userData = await response.json();
//     return userData;
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     throw error;
//   }
// };


export const registerUser = async (event) => {
    event.preventDefault()
    
    const response = await fetch("https://citizens-032f6032f3a1.herokuapp.com/api/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text,
            email,
            password
        }),
    })

    const data = await response.json()
    console.log(data)

    if(data.status === 'ok'){
        navigate('/dashboard')
    }
}

export const loginUser = async (event) => {
    event.preventDefault()

    const response = await fetch("https://citizens-032f6032f3a1.herokuapp.com/api/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })

    const data = await response.json()
    console.log(data)

    if(data.user){
        localStorage.setItem('token', data.user)
        alert("Login Successful")
        window.location.href = '/dashboard'
    }
    else{
        alert("Incorrect Credentials")
    }
}

export const populateBalance = async() => {

    const req = await fetch('https://citizens-032f6032f3a1.herokuapp.com/api/balance', {
        headers: {
            'x-access-token': localStorage.getItem('token')
        },
    })

    const data = await req.json()
    if (data.status === 'ok') {
        setBalance(data.balance)
    }
    else {
        alert(data.error)
    }
}

export const populateInfo = async() =>  {

    const req = await fetch('https://citizens-032f6032f3a1.herokuapp.com/api/user', {
        headers: {
            'x-access-token': localStorage.getItem('token')
        },
    })

    const data = await req.json()
    if (data.status === 'ok') {
        setName(data.name)
        setEmail(data.email)
    }
    else {
        alert(data.error)
    }
}

export const updateBalance = async(event) => {
    event.preventDefault()

    const req = await fetch('https://citizens-032f6032f3a1.herokuapp.com/api/balance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('token')
        },
        body: JSON.stringify({

            balance: tempBalance

        })
    })

    const data = await req.json()
    console.log(data.status)
    if (data.status === 'ok') {

        setBalance(tempBalance)
        setTempBalance(0)
    }
    else {
        alert("error")
    }
}


export const transferMoney = async(event) => {
    event.preventDefault()

    const req = await fetch('https://citizens-032f6032f3a1.herokuapp.com/api/transaction', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('token')
        },
        body: JSON.stringify({
            balance: sendBalance,
            email: receiverEmail,
        })
    })

    const data = await req.json()
    console.log(data)
    if(data.status === 'ok'){
        navigate('/transaction')
    }
}


export const fixedDeposit = async(event) => {
    event.preventDefault()

    const req = await fetch('https://citizens-032f6032f3a1.herokuapp.com/api/fd', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('token')
        },
        body: JSON.stringify({
            fd: addFd,
            duration: duration,
        })
    })

    const data = await req.json()
    console.log(data)
    if(data.status === 'ok'){
        navigate('/fixedeposit')
    }
}

