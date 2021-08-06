import React, {useState} from 'react'
import './Login.css'
import { Flex, Box, Heading, Button } from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input
  } from "@chakra-ui/react"
import {Link, useHistory} from  'react-router-dom'
import axios  from 'axios'
import swal from 'sweetalert'


const Login = ()  => {

    const history = useHistory()

   const [loginInput, setLoginInput]    = useState({

        email     : '',
        password  : '',
        error_list: []

   })


   const handleInput = (e) => {

        e.persist();

        setLoginInput({...loginInput, [e.target.name] : e.target.value })

   }


    const submitHandler = (e) => {

        e.preventDefault()

        const data = {

            email    : loginInput.email,

            password : loginInput.password
 
        }

        axios.get('/sanctum/csrf-cookie').then(response => {

            axios.post(`api/login`, data).then(response => {

                if(response.data.status === 200){

                    localStorage.setItem('auth_token', response.data.token)

                    localStorage.setItem('auth_item', response.data.username)

                    history.push('/dashboard')

                    swal("Success", response.data.message,  "success")

                }else if(response.data.status === 401){

                    swal("Warning", response.data.message,  "warning")
                    
                }else{

                    setLoginInput({...loginInput, error_list : response.data.validation_errors })

                }

            })

        })

    }


    return(
        
        <div className="loginform">

            <Flex  justifyContent = "center" flexDirection = "row" mt = {3}>

                <Link to ="/">
                     <img src ="images/logo2.png" alt = "logo"/> 
                </Link>

            </Flex>

            <Flex alignItems = "center" justifyContent="center" width = "full"  margin = {4}>

                <Box width = "30%" p = {2}  p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">

                    <Box my ={4} w="100%" textAlign = "left">

                        <form onSubmit = {submitHandler}>

                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input type="email"  name ="email" placeholder = "Email Address" onChange = {handleInput} value = {loginInput.email} />
                                <span className="loginError">{loginInput.error_list.email}</span>
                               
                            </FormControl>

                            <FormControl id="Password" mt = {6}>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" name ="password" placeholder = "Password" onChange = {handleInput} value ={loginInput.password}/>
                                <span className="loginError">{loginInput.error_list.password}</span>
                            </FormControl>

                            <Button colorScheme="blue" mt ={4} width ="full" type ="submit">SIGN IN</Button>

                        </form>

                    </Box>

                </Box>

              </Flex>

        </div>
    )

}


export default Login