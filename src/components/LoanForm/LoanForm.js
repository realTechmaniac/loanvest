import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import axios  from 'axios';
import swal  from 'sweetalert'
import { useHistory } from 'react-router-dom'

const LoanForm = () => {

    const [ firstname , setFirstname]     = useState('')
    const [ lastname ,  setLastname]      = useState('')
    const [ gender, setGender]            = useState('')
    const [ homeAddress, setHomeAddress]  = useState('')
    const [ email, setEmail]              = useState('')
    const [ phoneNumber , setphoneNumber] = useState('')
    const [ refereeName , setRefereeName] = useState('')
    const [ refereephoneNumber , setRefereephoneNumber] = useState('')
    const [ occupation , setOccupation ] = useState('')
    const [ salary , setSalary]          = useState('')
    const [ maritalStatus , setMaritalStatus] = useState('')
    const [ bvn , setBvn]          = useState('')
    const [errorList,setErrorList]     = useState([])

    const history  = useHistory()

     
    const registerSubmit = (e) => {

        e.preventDefault()

        const data = {
            
            firstname         : firstname,
            lastname          : lastname,
            gender            : gender,
            homeAddress       : homeAddress,
            email             : email,
            phoneNumber       : phoneNumber,
            refereeName       : refereeName,
            refereePhonenumber: refereephoneNumber,
            occupation        : occupation,
            monthlySalary     : salary,
            maritalStatus     : maritalStatus,
            BVN               : bvn
        }


        axios.get('/sanctum/csrf-cookie').then(response => {
            
            axios.post(`/api/submitform`, data).then( response => {

                if(response.data.status === 200){

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

        <div className ="offset-md-3 col-md-6 offset-md-3 mt-4">

            <Form  onSubmit = {registerSubmit}>

            <div className ="row" >

                <div className="col-md-6"  >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Firstname"  value = {firstname} onChange = {(e) => setFirstname(e.target.value)} />
                        <span className="errortext">{errorList.firstname} </span>
                    </Form.Group>
                </div>

                <div className="col-md-6"  >

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Lastname" value = {lastname} onChange = { (e) => setLastname(e.target.value)} />
                        <span className="errortext">{errorList.lastname} </span>
                    </Form.Group>
                    
                </div>
            </div>

            <div className ="row" >

                <div className="col-md-6"  >
                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control type="text" placeholder="Enter Gender" value = {gender} onChange = { (e) => setGender(e.target.value)}  />
                        <span className="errortext">{errorList.gender} </span>
                    </Form.Group>
                </div>

                <div className="col-md-6"  >
                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                        <Form.Label>Home Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Home Address" value = {homeAddress} onChange = { (e) => setHomeAddress(e.target.value)} />
                        <span className="errortext">{errorList.homeAddress} </span>
                    </Form.Group>
                </div>
            </div>

            <div className ="row" >

                <div className="col-md-6"  >
                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"  value = {email} onChange = { (e) => setEmail(e.target.value)}/>
                        <span className="errortext">{errorList.email} </span>
                    </Form.Group>
                </div>

                <div className="col-md-6"  >
                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter phoneNumber"  value = {phoneNumber} onChange = { (e) => setphoneNumber(e.target.value)}/>
                        <span className="errortext">{errorList.phoneNumber} </span>
                    </Form.Group>
                </div>

            </div>


            <div className ="row" >

                <div className="col-md-6"  >
                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                        <Form.Label>Referee Name</Form.Label>
                        <Form.Control type="text" placeholder="Referee Name" value = {refereeName} onChange = { (e) => setRefereeName(e.target.value)}/>
                        <span className="errortext">{errorList.refereeName} </span>
                    </Form.Group>
                </div>

                <div className="col-md-6"  >
                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                        <Form.Label>Referee Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Referee phoneNumber" value = {refereephoneNumber} onChange = { (e) => setRefereephoneNumber(e.target.value)} />
                        <span className="errortext">{errorList.refereePhonenumber} </span>
                        
                    </Form.Group>
                </div>

            </div>


            <div className ="row" >

                <div className="col-md-6"  >
                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                        <Form.Label>Occupation</Form.Label>
                        <Form.Control type="text" placeholder="Occupation" value = {occupation} onChange = { (e) => setOccupation(e.target.value)}/>
                        <span className="errortext">{errorList.occupation} </span>
                    </Form.Group>
                </div>

                <div className="col-md-6"  >
                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                        <Form.Label>Monthly Salary</Form.Label>
                        <Form.Control type="number" placeholder="Salary Range" value = {salary} onChange = { (e) => setSalary(e.target.value)} />
                        <span className="errortext">{errorList.monthlySalary}</span>
                
                    </Form.Group>
                </div>

            </div>


            <div className ="row" >

                <div className="col-md-6"  >
                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                        <Form.Label>Marital Status</Form.Label>
                        <Form.Control type="text" placeholder="Marital Status" value = {maritalStatus} onChange = { (e) => setMaritalStatus(e.target.value)}/>
                        <span className="errortext">{errorList.maritalStatus} </span>
                    </Form.Group>
                </div>

                <div className="col-md-6"  >
                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                        <Form.Label>BVN</Form.Label>
                        <Form.Control type="number" placeholder="BVN Number"  value = {bvn} onChange = { (e) => setBvn(e.target.value)} />
                        <span className="errortext">{errorList.BVN} </span>
                        
                    </Form.Group>
                </div>

            </div>
                
                <Form.Group className="mb-3 mt-4" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms and conditions" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>

    )
}


export default LoanForm