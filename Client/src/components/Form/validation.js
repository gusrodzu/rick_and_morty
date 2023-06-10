const validation = (data) => {
    let errors = {};

    // validar el email
    if (!data.email.includes ("@")){
        errors.e1 = 'El correo electrónico no es válido.';
    }

    if (!data.email){
        errors.e2 = 'El correo electrónico es obligatorio.';
    }

    if (data.email.length > 35) {
        errors.e3 = 'El correo electrónico no puede tener más de 35 caracteres.';
    }

    // validar la contraseña
    if(!/\d+/.test(data.password)){
        errors.p1 = 'La contraseña debe contener al menos un número.';
    }

    if (data.password.length < 6 || data.password.length > 10) {
        errors.p2 = 'La contraseña debe tener entre 6 y 10 caracteres.';
    }

    return errors;
};

export default validation;
