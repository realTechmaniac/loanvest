import React, {useState} from 'react'
import './Register.css'
import { Flex, Box, Heading, Button, Spacer } from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
    Input
  } from "@chakra-ui/react"
  import {Link, useHistory} from  'react-router-dom'
import axios from 'axios'
import swal  from 'sweetalert'

const Register = ()  => {

    const history = useHistory()
    const [firstname, setFirstname]     = useState("")
    const [lastname, setLastname]       = useState("")
    const [email, setEmail]             = useState("")
    const [phonenumber,setPhonenumber] = useState("")
    const [password, setPassword]       = useState("")
    const [errorList,setErrorList]     = useState([])
    
    const registerSubmit = (e) => {

        e.preventDefault()

        const data = {
            firstname  : firstname,
            lastname   : lastname,
            email      : email,
            password   : password,
            phonenumber: phonenumber
        }


        axios.get('https://apiloanvest.sproutpay.net/sanctum/csrf-cookie').then(response => {
            
            axios.post(`/api/register`, data).then( response => {

                if(response.data.status === 200){

                    localStorage.setItem('auth_token', response.data.token)

                    localStorage.setItem('auth_item', response.data.username)

                    swal("Success", response.data.message,"success")

                    history.push('/dashboard')
                    
                }else{

                    let errors = response.data.validation_errors

                    setErrorList(errors)

                }

            })
        });
      
    }

    return(
        
        <div className = "registerform">

            <Flex  justifyContent = "center" flexDirection = "row" mt = {3}>

                <Link to ="/">

                     <img src ="images/logo2.png" alt = "logo"/> 
                     
                </Link>

            </Flex>

            <Flex alignItems = "center" justifyContent="center" width = "full"  margin = {1}>

                <Box width = "30%" p = {2}  p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">

                    <Box my ={4} w="100%" textAlign = "left">

                        <form onSubmit = {registerSubmit}>

                            <FormControl id="firstname" >
                                <FormLabel>First name</FormLabel>
                                <Input placeholder="First name" onChange = {(e) => setFirstname(e.target.value)} value ={firstname} />
                                <span className="errortext">{errorList.firstname} </span>
                            </FormControl>
                            <FormControl id="lastname" mt = {3}>
                                <FormLabel>Last name</FormLabel>
                                <Input placeholder="Last name" onChange = { (e) => setLastname(e.target.value)} value = {lastname} />
                                <span className="errortext">{errorList.lastname}</span>
                            </FormControl>
                            <FormControl mt = {3} id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" placeholder = "Email Address" onChange = {(e) => setEmail(e.target.value)}  value = {email}/>
                                <span className="errortext">{errorList.email}</span>
                            </FormControl>

                            <FormControl id="Phonenumber" mt = {3}>
                                <FormLabel>Phone Number</FormLabel>
                                <Input type="phonenumber" placeholder = "Phone Number" onChange =  { (e) => setPhonenumber(e.target.value)} value = {phonenumber} />
                                <span className="errortext">{errorList.phonenumber}</span>
                            </FormControl>

                            <FormControl id="Password" mt = {3}>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" placeholder = "Password"  onChange = {(e) => setPassword(e.target.value)} value = {password} />
                                <span className="errortext">{errorList.password}</span>
                            </FormControl>
                          
                            <Button colorScheme="blue" mb = {4} mt ={4} width ="full" type = "submit">CREATE ACCOUNT</Button>

                        </form>
                        <Box as = "span">Already have an account ?  <Link to= "/login">LOG IN</Link></Box>
                    </Box>

                </Box>

              </Flex>

        </div>
    )

}


export default Register