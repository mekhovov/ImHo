/*
 * @author Artyom Deryavka
 * @template registration/(sign in) form
**/
Jaml.register('form_sign_in', function(){
    div({id: 'regFormMainBlock', cls: 'modalBlock'},
        div({cls: 'modalOverlay'}),
        div({cls: 'modalWindow'},
            div({cls: 'modalMessage'},
                div({cls: 'modalMessageHead'}, 'Sign in',
                    div({id: 'modalCloseCross', cls: 'modalClose'},
                        a('')
                    )
                )
            ),
            div({id: 'orRegister'},
                p('',
                    span('Sign in'),
                    ' or ',
                    a({id: 'linkToRegistration', href:'#'},
                        span('create'),
                      ' an account'
                    )
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
                        input({type: 'password', size: 22, id: 'password'})
                    ),
                    div({id: 'forgot'}, ' Forgot your password?'),
                    div({id: 'signIn', cls: 'regFormButtons btnOrange'},
                    div({id: 'regUser'})
                    )
                )
            )
        )
    )
});

