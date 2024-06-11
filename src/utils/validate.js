export const validate = data => {
    const errors = {};
    if (!data.full_name) {
      errors.full_name = "full name is required";
      return;
    } else if (
      !/^^(?!.*(-| ).*(-| ).*)(?!.*([a-z])\1{3})[a-z]+(?:-[a-z]+)*(?: [a-z]+)*(?<!-)$/i.test(
        data.full_name
      )
    ) {
    //   errors.full_name = "This name is invalid ,use only character";
    }
  
    if (!data.email) {
      errors.email = "Email is required";
      return;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
      return;
    }
    if (!data.message) {
        errors.message = "Message is required";
        return;
      } 
  
    return errors;
  };
  