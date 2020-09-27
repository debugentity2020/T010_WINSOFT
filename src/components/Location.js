import React, { Component } from 'react'
import {Row,Container,Image,Col,InputGroup,Button,Form} from 'react-bootstrap'
// import { Formik, Field, Form } from "formik";
import axios from 'axios'
import Node from './Node'


export default function Location() {
    const [name,setname] = React.useState('');
    const [key,setKey]= React.useState('');
    const [arr,setArr] =React.useState([])
    const count=[]
    var counter=0
    function onsubmit(e){
        e.preventDefault();

         
        // var str = document.getElementById("one").innerHTML; 
        let a = name.split(",")
        let c=[]
        for(let i =0;i<a.length;i++){
            var ch = a[i];
            var index = 0;

            var j = ch.charCodeAt(index);
            // console.log(j);
            c[i]=j-65


            /*
                Output: 65
            */
        }
        console.log(c);
        

        // let b=this.state.key.split(`,`).map(x=>+x)
        // console.log(b);
        var enemy = c;
        var finalanswer=[]
        axios.post('/location',c)
        .then(response => {
            console.log(response.data.count)
            finalanswer=response.data.count
            for(let i=0;i<finalanswer.length;i++){
                var node = document.createElement("LI");
                        var textnode = document.createTextNode(finalanswer[i].toString().replaceAll(',',''));
                        
                        node.appendChild(textnode);
                        document.getElementById("myList").appendChild(node);
            }
            
        })
        /* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
        
    }
    function click(e){
        setname(e.target.value)
        console.log(name);
    }
    
    return (
        
        <div>
            
            {/* <input type="text" value={name} onChange={click}/>
            <button type='submit' onClick={onsubmit}>Submit</button> */}
            
            <Container>
                    <Row>
                        <Col xs={12} md={12} className='fluid p-4'>
                        <Image src={require('./map.jpeg')} style={{height:'auto',width:'100%'}} rounded />
                        </Col>
                        
                    </Row>
                </Container>
                <Form>
  

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Key</Form.Label>
                    <Form.Control name='key' required value={name} onChange={click} type="text" placeholder="Enter the input in ',' seperated form : ref(A,B,C)" />
                </Form.Group>
                
                <Button variant="primary" type="submit" onClick={onsubmit}>
                    Submit
                </Button>
                </Form>
                <div id="ANSWER">
                <ul id="myList">
                
                </ul>
            </div>
            {/* <Node nodes={count}/> */}

        </div>
    )
}

// let count=[]
// export function Location() {

//     constructor(){
//         super()
//         this.state={
//             msg:"",
//             key:"",
//             answer:[]
//         }
       
//     }
   
    
//     change(e){
//         this.setState({
//             [e.target.name]:e.target.value
//         })
//     }
//     click(e){
//         
//     render() {
//         // console.log(count);
//         return (

//             <div className='p-4'>
               

//                 <Node nodes={[1,2,3]}/>
                
//             </div>
//         )
//     }
// }

// export default Location
