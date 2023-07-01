//after the page Elements have loaded
document.addEventListener('DOMContentLoaded',()=>{
    const creds = [
        {
            username : 'eg_username_1',
            vatId : 'eg_vatId_1',
            subKey : 'eg_subKey_1'
        },
        {
            username : 'eg_username_2',
            vatId : 'eg_vatId_2',
            subKey : 'eg_subKey_2'
        },
    ];
    
    //define input fields DOM element ids
    const fields = {
        username: 'UserName',
        vatId : 'VatNumber',
        subKey: 'SubscriptionKey'
        
    };

    function addListener( inp, inpField ){
        if( inp != null ){
            inp.addEventListener('keyup', ()=>matchInput(inp, inpField) );
        }
    }
    
    function matchInput( inp, inpField ){
        creds.forEach( cred=>{
            //complete other fields if a is match found
            if( inp.value === cred[inpField] ){
                Object.keys(fields).forEach( key=>{
                    if( key!==inpField ){
                        let elementInp = document.getElementById(fields[key]);
                        if( elementInp !== null ){
                            elementInp.value = cred[key];
                        }
                    }
                } );
            }
        });
    }

    addListener(document.getElementById( fields.username ), 'username');
    addListener(document.getElementById( fields.vatId ), 'vatId');
    addListener(document.getElementById( fields.subKey ), 'subKey');
});