import {messageVietnamese} from './message'

$(document).ready(() => {

    const nameForm = 'name-form'  //~ Give your form name here
    
    //~ BASE
    //? Check max length
    const maxLength = (nameMethod, maxLength) => {
        $.validator.addMethod(`${nameMethod}`, (value, element) => {
            const valueLength = value.length;
            if(valueLength) {
                return valueLength <= maxLength
            }
            return true;
        }, (length, element) => { 
            const currentLength = $(element).val().length
            return messageVietnamese.ER002('Username', 10, currentLength);
        })
    }

    //? Check min length
    const minLength = (nameMethod, minLength) => {
        $.validator.addMethod(`${nameMethod}`, (value, element) => {
            const valueLength = value.length;
            if(valueLength) {
                return valueLength >= minLength
            }
            return true;
        }, (length, element) => { 
            const currentlyNum = $(element).val().length
            return messageVietnamese.ER002A('mật khẩu', 8, currentlyNum);
        }) 
    }

    //? Check 2 bytes
    const twoBytes = (nameMethod) => {
        $.validator.addMethod(`${nameMethod}`, (value, element) => {
            return this.optional(element) || !/[\uD800-\uDFFF\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/.test(value);
        }, messageVietnamese.ER004)
    }

    //? Check valid email 
    const validEmail = (nameMethod) => {
        $.validator.addMethod(`${nameMethod}`, (value, element) => { 
            const regex =
            /^.+@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
            return this.optional(element) || regex.test(value); 
        }, messageVietnamese.ER003);
    }

    //? Check no space 
    const noSpace = (nameMethod) => {
        $.validator.addMethod(`${nameMethod}`, (value, element) => { 
            return value == '' || value.trim().length != 0;  
        }, messageVietnamese.ER001('tên tài khoản'));
    }

    //? Check file size 
    const fileSize = (nameMethod, limitSize) => {
        $.validator.addMethod(`${nameMethod}`, (value, element) => {
            return this.optional(element) || (element.files[0].size <= limitSize * 1000000)  //? MB
        }, messageJapanese.ECL034('1 MB'));
    }

    //~ USING CUSTOM METHODS


    $(`#${nameForm}`).validate({
        onfocusout:(element) => {
            this.element(element); 
        },
        rules: {
            name: {
                required: true
            },
            sex: {
                required: true
            }, 
            phone: {
                required: true
            },
            language: {
                required: true
            }, 
            email: {
                required: true
            },
            address: {
                required: true
            },
            specialization: {
                required: true
            },
            research: {
                
            },
            image: {
                required: true
            },
            username: {
                required: true
            },
            password: {
                required: true
            },
            cfPassword: {
                required: true
            }
        },
        messages: {
            name: {
                required: messageVietnamese.ER001('')
            },
            sex: {
                required: messageVietnamese.ER001('')
            },
            phone: {
                required: messageVietnamese.ER001('')
            },
            language: {
                required: messageVietnamese.ER001('')
            }, 
            email: {
                required: messageVietnamese.ER001('')
            },
            address: {
                required: messageVietnamese.ER001('')
            },
            specialization: {
                required: messageVietnamese.ER001('')
            },
            research: {
                
            },
            image: {
                required: messageVietnamese.ER001('')
            },
            username: {
                required: messageVietnamese.ER001('')
            },
            password: {
                required: messageVietnamese.ER001('')
            },
            cfPassword: {
                required: messageVietnamese.ER001('')
            }
        },
        submitHandler: (form) => {
            form.action = '/login/auth';
            form.method = 'post'
            form.submit();
            $("#login-submit-button").attr("disabled", true);
            
        }
    });
});