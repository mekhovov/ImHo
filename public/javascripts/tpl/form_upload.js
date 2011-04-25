/*
 * @author Artyom Deryavka
 * @template upload file form
**/
Jaml.register('form_upload', function(){
    div({id: 'regFormMainBlock', cls: 'modalBlock'},
        div({cls: 'modalOverlay'}),
        div({cls: 'modalWindow'},
            div({cls: 'modalMessage'},
                div({cls: 'modalMessageHead'}, 'Upload',
                    div({id: 'modalCloseCross', cls: 'modalClose'},
                        a('')
                    )
                )
            ),
            div({id: 'orRegister'},
                p('',
                    span('Upload'),
                    ' your ',
                    span('Photo')
                )
            ),
            div({id: 'horizontalLine'}),
            div({id: 'regForm'},
                form({method: 'POST', enctype: 'multipart/form-data', action: 'testserver.php', id: 'uplForm'},
                    div({id: 'inputInfo'},
                        label(""),
                        input({type: 'file', size: 15, id: 'browse', name: 'myupload', accept: "image/png,image/gif,image/jpeg,image/jpeg",
                        min: '1', max: '10', multiply: 'true'}), br()
                    ),
		    div({id: 'mini'}
			),
                    div({cls: 'btnOrange', id: 'uploadFile'},
                        div({id: 'regUser'})
                    )
                )
            )
        )
    )
});

