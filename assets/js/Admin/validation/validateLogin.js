import { messageVietnamese } from '../../message';

$(document).ready(() => {
    
    const nameForm = 'name-form'                //~ Give form name
    const submitButton = 'login-submit-button'  //~ Give submit button name 
    const actionSubmit = '/admin/auth'          //~ Give action for submit 
    const methodSubmit = 'post'                 //~ Give method for submit

    //? CLEAR MESSAGE
    $('#exampleInputEmail1').on('input', () => {
        $("#messageError").text(''); 
    });
    
    $('#exampleInputPassword1').on('input', () => {
        $("#messageError").text(''); 
    });


    //? VALIDATION
    $(`#${nameForm}`).validate({
        onfocusout:(element) => {
            this.element(element); 
        },
        rules: {
            username: {
                required: true
            },
            password: {
                required: true
            }
        },
        messages: {
            username: {
                required: messageVietnamese.ER001('tên tài khoản ')
            },
            password: {
                required: messageVietnamese.ER001('mật khẩu')
            }
        },
        submitHandler: (form) => {
            form.action = actionSubmit;
            form.method = methodSubmit
            form.submit();
            $(`#${submitButton}`).attr('disabled', true);
        }
    })
})