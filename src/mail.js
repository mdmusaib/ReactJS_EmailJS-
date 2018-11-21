import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
class Mail extends Component{
    constructor(props) {
        super(props);
    this.state= {
        name:'',
        email:'',
        phone:'',
        message:''
    }
}

handleChangeName=(event)=>{
    this.setState({
        name:event.target.value,
    });
    
}
handleChangeEmail=(event)=>{
    this.setState({
        email:event.target.value,
    });
}
handleChangePhone=(event)=>{
    this.setState({
        phone:event.target.value,
    });
}
handleChangeMessage=(event)=>{
    this.setState({
        message:event.target.value,
    });
}
sendMail=()=>{
    

    var template_params = {
        "name": this.state.name,
        "email": this.state.email,
        "phone": this.state.phone,
        "message":this.state.message,
     }
     
     var service_id = "default_service";
     var template_id = "YOUR EMAJS TEMPLATEID";
     emailjs.send(service_id,template_id,template_params,'YOUR EMAIJS USERID')
     .then(function(response) {
       alert('SUCCESS!');
    }, function(err) {
       console.log('FAILED...', err);
    });
};
render(){
    return(
        <div>
            Name:<input type="text" name="name" onChange={this.handleChangeName} />
            Email:<input type="text" name="email" ref="email" onChange={this.handleChangeEmail}/>
            Phone:<input type="number" name="phone" ref="phone" onChange={this.handleChangePhone}/>
            Message:<input type="textarea" name="message" ref="message" onChange={this.handleChangeMessage}/>
            <button type="submit" onClick={this.sendMail}>Send Email</button>
        </div>
    );
}
}
export default Mail;
