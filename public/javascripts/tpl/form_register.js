/*
 * @author Artyom Deryavka
 * @template registration/(sign in) form
**/
Jaml.register('form_register', function(){
            div({cls: 'modalMessage'},
                div({cls: 'modalMessageHead'}, 'Registration',
                    div({id: 'modalCloseCross', cls: 'modalClose'},
                        a('')
                    )
                )
            ),
            div({id: 'orRegister'},
                p('',
                    a({id: 'linkToSignIn', href:'#'},
                        span('Sign in')
                    ),
                    ' or ',
                    span('create'),
                    ' an account'
                )
            ),
            div({id: 'horizontalLine'}),
            div({id: 'regForm'},
                form({method: 'POST'},
                    div({id: 'inputInfo'},
                        label("Email:"),
                        span({cls: 'errors', id: 'er_email'}),
                        input({type: 'text', size: 22, id: 'email'}),
                        label({id: 'lb_password'}, "Password:"),
                        span({cls: 'errors', id: 'er_password'}),
                        input({type: 'password', size: 22, id: 'password'}),
                        label({id: 'lb_confpassword'}, "Confirm password:"),
                        span({cls: 'errors', id: 'er_conf_password'}),
                        input({type: 'password', size: 22, id: 'conf_password'})
                    ),
                    div({id: 'createNewAccount', cls: 'regFormButtons btnOrange'},
                        div({id: 'regUser'})
                    )
                )
            );
});

