
import {messageVietnamese} from './message'

$(document).ready(() => {

    const nameForm = 'name-form'                //~ Give form name
    const submitButton = 'login-submit-button'  //~ Give submit button name 
    const actionSubmit = '/admin/create-doctor' //~ Give action for submit 
    const methodSubmit = 'post'                 //~ Give method for submit
    
    //~ BASE
    //? Check max length
    const maxLength = (nameMethod, maxLength, nameInput) => {
        $.validator.addMethod(`${nameMethod}`, (value, element) => {
            const valueLength = value.length;
            if(valueLength) {
                return valueLength <= maxLength
            }
            return true;
        }, (length, element) => { 
            const currentLength = $(element).val().length
            return messageVietnamese.ER002(`${nameInput}`, 10, currentLength);
        })
    }

    //? Check min length
    const minLength = (nameMethod, minLength, nameInput) => {
        $.validator.addMethod(`${nameMethod}`, (value, element) => {
            const valueLength = value.length;
            if(valueLength) {
                return valueLength >= minLength
            }
            return true;
        }, (length, element) => { 
            const currentlyNum = $(element).val().length
            return messageVietnamese.ER002A(`${nameInput}`, 8, currentlyNum);
        }) 
    }

    //? Check range of length
    const rangeLength = (nameMethod, minLength, maxLength, nameInput) => {
        $.validator.addMethod(`${nameMethod}`, (value, element) => {
            const valueLength = value.length
            if(valueLength) {
                return valueLength >= minLength && valueLength <= maxLength
            }
            return true
        }, (length, element) => {
            const currentLength = $(element).val().length
            return messageVietnamese.ER0012(`${nameInput}`, `${minLength}`, `${maxLength}`, `${currentLength}`)
        })
    }

    //? Check 2 bytes
    const twoBytes = (nameMethod, nameInput) => {
        $.validator.addMethod(`${nameMethod}`, (value, element) => {
            return this.optional(element) || !/[\uD800-\uDFFF\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/.test(value);
        }, messageVietnamese.ER004)
    }

    //? Check valid email 
    const validEmail = (nameMethod, nameInput) => {
        $.validator.addMethod(`${nameMethod}`, (value, element) => { 
            const regex =
            /^.+@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
            return this.optional(element) || regex.test(value); 
        }, messageVietnamese.ER003);
    }

    //? Check no space 
    const noSpace = (nameMethod, nameInput) => {
        $.validator.addMethod(`${nameMethod}`, (value, element) => { 
            return value == '' || value.trim().length != 0;  
        }, messageVietnamese.ER001(`${nameInput}`));
    }

    //? Check file size 
    const fileSize = (nameMethod, limitSize, nameInput) => {
        $.validator.addMethod(`${nameMethod}`, (value, element) => {
            return this.optional(element) || (element.files[0].size <= limitSize * 1000000)  //? MB
        }, messageVietnamese.ER0013(`${limitSize}`))
    }

    //? Check strong password
    const strongPassword = (nameMethod, nameInput) => {
        $.validator.addMethod(`${nameMethod}`, (value, method) => {
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/
            return this.optional(element) || regex.test(value); 
        }, messageVietnamese.ER0015)
    }

    //~ USING CUSTOM METHODS
    twoBytes('check2Bytes')

    maxLength('maxNameDoctor', 50, 'họ và tên')
    noSpace('noSpaceName', 'họ và tên')

    maxLength('maxPhone', 20, 'số điện thoại')

    maxLength('maxEmail', 30, 'email')
    validEmail('checkValidEmail')

    maxLength('maxAddress', 100, 'địa chỉ')
    noSpace('noSpaceAddress', 'địa chỉ')

    maxLength('maxSpecialist', 200, 'chuyên khoa')
    noSpace('noSpaceSpecialist', 'chuyên khoa')

    maxLength('maxResearch', 100, 'công trình nghiên cứu')
    noSpace('noSpaceResearch', 'công trình nghiên cứu')

    fileSize('checkImageSize', 5)

    maxLength('maxUsername', 100, 'tên tài khoản')

    noSpace('noSpacePassword', 'mật khẩu')
    rangeLength('limitPassword', 8, 20, 'mật khẩu')
    strongPassword('checkStrongPassword')

    $(`#${nameForm}`).validate({
        onfocusout:(element) => {
            this.element(element); 
        },
        rules: {
            name: {
                required: true,
                noSpaceName: true,
                check2Bytes: true,
                maxNameDoctor: true,
            },
            sex: {
                required: true,
            }, 
            phone: {
                required: true,
                digits: true,
                maxPhone: true
            },
            language: {
                required: true
            }, 
            email: {
                required: true,
                checkValidEmail: true,
                maxEmail: true,
                remote: {
                    url: '/api/checker/email',
                    type: 'post',
                    data: {
                      email: () => {
                        return $( "#email" ).val();
                      }
                    },
                    dataType: 'json'
                }
            },
            address: {
                required: true,
                noSpaceAddress: true,
                check2Bytes: true,
                maxAddress: true
            },
            specialist: {
                required: true,
                noSpaceSpecialist: true,
                check2Bytes: true,
                maxSpecialist: true
            },
            research: {
                noSpaceResearch: true,
                check2Bytes: true,
                maxResearch: true
            },
            image: {
                extension: 'jpg|jpeg|png|gif',
                checkImageSize: true
            },
            username: {
                required: true,
                checkValidEmail: true,
                maxUsername: true,
                remote: {
                    url: '/api/checker/account',
                    type: 'post',
                    data: {
                      username: () => {
                        return $( "#username" ).val();
                      }
                    },
                    dataType: 'json'
                }
            },
            password: {
                required: true,
                noSpacePassword: true,
                check2Bytes: true,
                limitPassword: true,
                checkStrongPassword: true
            },
            cfPassword: {
                required: true,
                equalTo : "#password"
            }
        },
        messages: {
            name: {
                required: messageVietnamese.ER001('họ và tên')
            },
            sex: {
                required: messageVietnamese.ER001('giới tính')
            },
            phone: {
                required: messageVietnamese.ER001('số điện thoại'),
                digits: messageVietnamese.ER0011
            },
            language: {
                required: messageVietnamese.ER001('ngôn ngữ')
            }, 
            email: {
                required: messageVietnamese.ER001('email')
            },
            address: {
                required: messageVietnamese.ER001('địa chỉ')
            },
            specialist: {
                required: messageVietnamese.ER001('chuyên khoa')
            },
            image: {
                extension: messageVietnamese.ER0014('jpg/jpeg, png, gif')
            },
            username: {
                required: messageVietnamese.ER001('tên tài khoản'),
                remote: messageVietnamese.ER007('tên tài khoản')
            },
            password: {
                required: messageVietnamese.ER001('mật khẩu')
            },
            cfPassword: {
                required: messageVietnamese.ER001('xác nhận mật khẩu'),
                equalTo: messageVietnamese.ER006
            }
        },
        submitHandler: (form) => {
            form.action = actionSubmit;
            form.method = methodSubmit
            form.submit();
            $(`#${submitButton}`).attr('disabled', true);
        }
    });
});