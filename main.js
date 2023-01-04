//after the page Elements have loaded
document.addEventListener('DOMContentLoaded',()=>{
    var usernameInp = document.getElementById('UserName');
    if( usernameInp != null ){
    const creds = [
        {
            username : 'eg_username_1',
            afm : 'eg_afm_1',
            key : 'eg_key_1'
        },
        {
            username : 'eg_username_2',
            afm : 'eg_afm_2',
            key : 'eg_key_2'
        },
    ];

        usernameInp.addEventListener('keyup',()=>{
            creds.forEach( cred=>{
                if( usernameInp.value === cred.username ){
                    let afmInp = document.getElementById('VatNumber');
                    let keyInp = document.getElementById('SubscriptionKey');
                    if( afmInp != null && keyInp != null ){
                        afmInp.value = cred.afm;
                        keyInp = cred.key;
                    }
                }
            });
        });
    }
});
