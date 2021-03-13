import React, { Component } from 'react'
import Modal from '../../components/UI/Modal/Modal'
import AAux from '../AAux/AAux'

const withErrorHandler = (WrappedComponent ,axios ) => {
    return class extends Component {
                state={
                    error:null
                };
//componentWillMount yani render isleminden hemen once  tetiklenen  eventtir Render fonksiyonu daha sonra calisacagi icin SetState Fonksiyonu calismaz 
            componentWillMount(){
             this.reqInterceptor =axios.interceptors.request.use(req=>{
                this.setState({error:null});
                return req;
            });
             this.resInterceptor =axios.interceptors.response.use(res=>res,error=>{
                this.setState({error:error});
            });//second argument i am interested in
        }

//ComponentWillUnmount Dom üzerinden kaldırılması işlemi diyebiliriz kısaca. Yani bütün işlemler bittikten sonra bileşen dom üzerinden kaldırılmadan önce çalışacak Event’ımızdır.
        componentWillUnmount(){
            console.log('componentWillUnmount',this.reqInterceptor,this.resInterceptor)
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }

        errorConfirmedHandler = () =>{
            this.setState({error:null})
        }

        render () { 
            return(
                <AAux>
{/* we need to set  show to something else and that something else needs to come from the WrappedComponent  */}
                    <Modal show={this.state.error}
                           clicked={this.errorConfirmedHandler}
                           >
                           {this.state.error ? this.state.error.message:null}
                    </Modal>
                    <WrappedComponent {...this.props} />
{/* i of course want to return the wrapped component and distribute any props this component might receive on it  */}
                </AAux>
            );
        }
    } 

}

export default withErrorHandler;