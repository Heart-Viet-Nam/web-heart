export const addMethods = {

    //? Check valid length
    const maxLength= () => {
        $.validator.addMethod("maxCharacters", function(value, element) {
            var valueLength = value.length;
            if(valueLength) {
                return valueLength <= 10
            }
            return true;
        }, function(length, element){ 
            var currentLength = $(element).val().length
            return messageVietnamese.ER002('Username', 10, currentLength);
        })
    }
}