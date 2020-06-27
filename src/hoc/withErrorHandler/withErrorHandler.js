import React from 'react';
import Auxiliary from "../Auxillary/Auxillary";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent) => {
    return(props) => {
        return (
            <Auxiliary>
                <Modal> Some thing went wrong</Modal>
                <WrappedComponent {...props}/>
            </Auxiliary>
        )
    }
};

export default withErrorHandler;
